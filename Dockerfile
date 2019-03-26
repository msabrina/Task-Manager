# base image
FROM node:9.6.1

ENV NPM_CONFIG_LOGLEVEL warn

# set working directory
WORKDIR /To-Do

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /To-Do/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /To-Do/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
