# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /portfolio

# Tell your container where your app's source code will live
WORKDIR /portfolio

# What source code do you what to copy, and where to put it?
COPY . /portfolio

# Does your app have any dependencies that should be installed?
RUN npm install nodemon @babel/preset-react react-dom react-bootstrap bootstrap react file-loader express body-parser axios webpack webpack-cli

RUN npm install @babel/cli @babel/core @babel/preset-env babel-loader babel-preset-react css-loader style-loader
# What port will the container talk to the outside world with once created?
EXPOSE 80

# How do you start your app?
CMD [ "npm", "start" ]