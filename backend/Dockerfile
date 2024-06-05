# Use the official Node.js image
FROM node:20.14.0-slim

# Create and change to the app directory
WORKDIR /home/lenovob/Development/react-phone-directory/backend

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the app
CMD ["node", "server.js"]

