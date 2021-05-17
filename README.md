# Celcoin-trial

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=bugs)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=code_smells)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=security_rating)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jschneiderm98_KMM&metric=ncloc)](https://sonarcloud.io/dashboard?id=jschneiderm98_KMM)

## Acesse o site aqui

https://ident-project.netlify.app/

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
 
 
