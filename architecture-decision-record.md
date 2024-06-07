# "Architecture Decision Record"

## Other Stuff
  - mainaining a TODO list for maintaining a list of oppen issues/features

## Frontend

### design needs
  - clean, nice
  - intuitive
  - high usability on different devices

###  realisation of needs
  - responsive 
  - different themes for different preferences
  - mui data grid for live update list 
  - search bar in the middle first for aesthetics, moves up as soon as results appear to make room for them
  - small but good noticable buttons in the right bottom corner to change the theme (in the themes color style)
  - disabled scrollbar for firefox (supported styling not sattisfying)
  - viasualize pattern match in result list -> realized through font-weight

### code structure 
  - clear directory structure for clarity, maintainability
      - e.g. all components in components/, all services in /service
  - Each feature of the template/website  gets its component (searchbar, resultlist, circularbutton (to change themes)
      - reasons: maintainability, reusability
  - server connectivity is handled in a service file
      - reasons: maintainability, easier debugging, scalability
  - Error handling
      - passing error to the highest level - only log there -> less error logging, all error logging in one place


## backend:
  - express.js
    - easy server setup
  - swagger
    - clear api documentation 
  - logging:
    - logs with datetime for proper sever logging  
  - postgresql
    - more advanced than for example sqllite
      - good in scaling, durability, simultaneous accesses 
    - works really well with docker
    - already familiar to me  
  - passing proper http errors (if reasonable) to frontend 
    - so frontend can deal with it and show errors 
  - matching of strings: match only from the beginning. -> noone starts to search for a name in the middle of the word 

  - use of docker container for backend and database
    - making use of docker for easy os independent deployment  
    - possibility data restore with docker-compose for first start
    - docker-compose faciliates inter-container communication 
    - scalability 

## possible improvements in the code:
  - split up App.js (a little too much going on there right now)
  - more consistency in component structure 
  - more consistency for comments 
  - better color choices for themes (could be better)
  - add tests
  - see open issues in TODO

