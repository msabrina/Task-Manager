## Task Manager Application

Full stack application which performs CRUD operations on a simplistic data model, and uses a datastore to store data.


## Technologies 
#### [mLab](https://mlab.com/)
#### Node v10.15.3
#### Express v4.16.0 
#### React v16.8.4
#### React Router 5.0.0
#### Mongodb v3.2.1
#### Docker v18.09.2
#### Docker Compose v1.23.2


## Setup 

Clone project repo

````bash
$ git clone git@github.com:msabrina/Task-Manager.git
$ cd project folder (To-Do)
$ npm install
$ npm start
````
This will start up To-Do and open a new tab.
Or go to [http://localhost:3000](http://localhost:3000) to view it in the browser.


### User Stories
1. User is able to create a task providing a task name, description, and priority.
2. User is able to view a list of existing tasks.
3. User is able to view the details of a specific task and make edits.
4. User is able to mark task as completed.
5. User is able to remove task.
6. User is able to update task.


### Initial Thoughts
Build MERN Full stack application that runs on Docker Compose, with a 12 Factor App methodology.


### Discussion 
This application was built using a microservice architecture approach where the user interface is separated from the business logic.

One of my main goals was to delivered the app via containerization. I started off by Dockerizing the app during early build stages; unfortunately, I was unable to see it through without errors as the build progressed. Docker is a tool I haven't worked with before so I was excited to learn it and try to implement it.


### Improvements

Include Automated unit and functional tests.
Add TypeScript.
Get Docker Compose running without errors.
Integrate with React Redux.


### Other available scripts

````bash 
$ docker-compose up
````
### References

[Create React App](https://github.com/facebook/create-react-app),
[Docker Docs](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/),
[Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/#project-setup),
[React + Webpack](https://www.valentinog.com/blog/react-webpack-babel/),
[mLab](https://mlab.com/)


