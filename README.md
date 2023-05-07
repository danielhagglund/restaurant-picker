# RestaurantPicker
This is a simple website built in Angular that will randomly pick a restaurant by calling an API (restuarant-api).

## Prerequisite
You need to install nodejs in order to build this projects.

## Run the application in your local development environment
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Stop the application
To stop the application just press ctrl+c.

## Run the application in a Docker container
In order to run the application in a docker container you need to install Docker or Docker Desktop depending on your Operating System.

### Build the image
To build the image for the application just navigate to the root of the project where the Dockerfile is. Open a terminal and build the image using the following command:
```
docker build -t restaurant-picker .
```
This will build the Angular application and deploy to an NGINX webserver.

### Run the application in a container
To run the application enter the following command in the terminal:
```
docker run -p 4200:80 restaurant-picker
```
Note that the local port number must be 4200. If you choose another port number you will the API will not respond due to CORS (Cross-Origin Resource Sharing).

### Stop the application
The application can be stopped by pressing ctrl+c in the terminal or using docker stop command.