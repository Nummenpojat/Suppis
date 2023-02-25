# Use Node.js 18 as the base image
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Nginx image as the base image
FROM nginx:1.21

# Copy the React build files to the Nginx default public folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port used by Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]