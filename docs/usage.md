## System requirements 

 1. Install [Docker](https://docs.docker.com/engine/installation/)
 2. Install [Docker Compose](https://docs.docker.com/compose/install/)

## Guide

 1. Clone the repository:
 ```
 git clone https://github.com/jschneiderm98/Ident.git
 ```
 2. Create local network with docker:
 ```
 docker network create network-api
 ```
 3. Change directory to app:
 ```
 cd app
 ```
 4. Create and start the service container:

 ```
 docker-compose build
 docker-compose up
 ```

 5. Acess the application on port 3000 of your `browser`: http://localhost:3000

 6. When you want to stop the container you can use:
 ```
 docker-compose down
 ``` 