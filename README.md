# The React Phone Directory 

This is my first react project. It implements a phone directory search. 

For some of my architecture decisions please refer to [architecture decision record](architecture-decision-record.md) (incomplete).
For tracking my current state of work refer to my [todo list](TODO.md) (incomplete).

# Contents
 - [Installation](#installation) 
    - [Requirements](#requirements) 
 - [Tooling](#Tooling) 
    - [Frontend](#Frontend) 
    - [Backend](#Backend) 
    - [Other](#Other) 


# Installation

To run this application follow these steps: 
 - check the [requirements](#requirements) below  
 - download the repository  
 - extract it to your prefered location
 - start backend:
    - switch to /backend 
    - run docker-compose
 - start frontend
    - switch to /backend
    - run npm install 
    - run npm start

## Requirements

Requirements to run this app:
    - docker 
    - docker-compose
    - npm  

# Tooling

In the following dependencies and tools used to develop this app and deploy this app are listed. For some insights into tooling decisions please refere
to the [architecture decision record](architecture-decision-record.md).

### Frontend

- libraries 
  - emotion/react
  - emotion/styled
  - mui/material
  - mui/x-data-grid
  - testing-library/jest-dom
  - testing-library/react
  - testing-library/user-event
  - react
  - react-dom
  - react-scripts
  - web-vitals

### Backend

- database: postgresql 
- libraries 
    - body-parser
    - cors
    - express
    - pg
    - swagger-jsdoc
    - swagger-ui-express


### Other
- docker
- docker-compose
