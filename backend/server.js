const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  serverLog('Healthcheck: server connected to the database');
});

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Phonebook API',
      description: 'Phonebook API Information',
      version: '1.0.0',
    },
    servers: ['http://localhost:5000'],
  },
  apis: ['server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search contacts in the phonebook
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name to search for
 *     responses:
 *       200:
 *         description: A list of matching contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 */

app.get('/search', async (req, res) => {
  const { name } = req.query;
  if (!name) {
    serverLog(`/search access without parameter `);
    return res.status(400).send({ error: '400: Name query parameter is required' });
  }

  try {
    const matchQuery = `${name.toLowerCase()}`;
    const results = await pool.query(
      `SELECT * 
        FROM contacts 
        WHERE LOWER(name) LIKE $1 || '%'
           OR LOWER(SUBSTRING(name, POSITION(' ' IN name) + 1)) LIKE $1 || '%' `,
      [matchQuery]
    );
    res.json(results.rows);
  } catch (err) {
    serverLog(`Database query failed on api access '/search': ${err}`);
    res.status(500).send({ error: '500: Database query failed' });
  }
});

// Handle non-existing routes
app.use((req, res, next) => {
  serverLog(`User tried to access non-existing route: ${req.url}`);
  res.status(404).send({ error: '404: Page not found'});
});


// TODO: use environment variables or remove
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  serverLog(`Server is running on port ${PORT}`);
});

// server logging
function serverLog(message) {
  const now = new Date();
  const formattedDate = now.toISOString(); // Format as ISO 8601 string
  console.log(`[${formattedDate}] ${message}`);
}
















