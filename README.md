# Celcoin-trial

## Documentation

https://jschneiderm98.github.io/Ident/

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
 3. Create and start the service container:

 ```
 docker-compose build
 docker-compose up
 ```

 4. Acess the application on port 3000 of your `browser`: [http://localhost:3000]()

 5. When you want to stop the container you can use:
 ```
 docker-compose down
 ``` 
 
 
