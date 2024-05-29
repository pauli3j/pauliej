# Use the official Node.js image as the base image
FROM node:18-bullseye-slim

# Install necessary dependencies for sharp
RUN apt-get update && apt-get install -y \
  build-essential \
  libc6-dev \
  libvips-dev \
  python3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]
