
#Image
FROM node:18

#Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install


# Copy the rest of the application files
COPY . .

#Build the frontend installing the dependencies and then building it.
RUN cd frontend/ && npm install
RUN npm run build:ui

#start the app

ENTRYPOINT [ "npm", "run", "start" ]


