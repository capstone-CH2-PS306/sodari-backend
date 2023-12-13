FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start app
CMD [ "npm", "run", "start" ]