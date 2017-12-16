FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./

# Install app dependencies
RUN npm install

# Bundle app source
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]