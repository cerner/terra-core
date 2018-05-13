# use node as base image
FROM node:8.4.0

# Prepare Directory for Source Code
ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Mount Source into Container
ADD . /app

# expose the port
EXPOSE 8080

RUN npm config set unsafe-perm true
RUN npm install

# run the server
CMD ["npm", "run", "start"]