const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const phonebookData = require('./phonebook.json'); // Assuming your phonebook data is in this file

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
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 */
app.get('/search', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send({ error: 'Passing name parameter is required' });
  }
  const searchName = name.toLowerCase();
  const results = phonebookData.filter(entry =>
    entry.name.toLowerCase().includes(searchName)
  );
  res.json(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

