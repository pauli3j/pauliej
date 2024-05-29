FROM node:18-bullseye-slim

# Install necessary dependencies for sharp
RUN apt-get update && apt-get install -y \
  build-essential \
  libc6-dev \
  libvips-dev \
  python3

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
