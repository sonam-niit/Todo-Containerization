# Use Node.js LTS version as the base image
FROM node:20-alpine3.20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the application
CMD ["node", "server.js"]
