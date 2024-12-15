# 🌟 PaulieJ Project 🌟

Welcome to project **pauliej.com**! This repository houses a sophisticated full-stack application with a Python backend and a Next.js frontend, all containerized for easy deployment. Follow the steps below to set up and run the project on your local machine or deploy it to the cloud.

## 🚀 Features

- **Backend**: Python with FastAPI served by Gunicorn.
- **Frontend**: Next.js for server-side rendering and static site generation.
- **Dockerized**: Containerized services for consistent and reproducible environments.
- **CI/CD**: Ready for continuous integration and deployment.


## 🗂 Project Structure

```plaintext
/pauliej
│
├── backend
│   ├── app
│   │   ├── main.py
│   ├── Dockerfile
│   ├── requirements.txt
│
├── frontend
│   ├── components
│   │   ├── Button.jsx
│   │   ├── ui
│   │   │   └── button.jsx
│   ├── lib
│   │   └── utils.js
│   ├── src
│   │   ├── pages
│   │   │   ├── _app.js
│   │   │   ├── index.js
│   ├── styles
│   │   └── globals.css
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── jsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── custom-webpack-plugin.js
│   ├── Dockerfile
│   ├── components.json
│   ├── public
│   ├── .dockerignore
│
├── docker-compose.yml
└── README.md
```

## 📦 Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local development)
- [Python](https://www.python.org/) (for local backend development)

## 🛠️ Setup

### Clone the Repository

```bash
git clone https://github.com/pauli3j/pauliej.git
cd pauliej
```

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
pip install -r requirements.txt
```

## 🏃‍♂️ Running the Project

### Using Docker Compose

```bash
docker-compose up -d
```

### Locally

#### Backend

```bash
cd backend
gunicorn -b :8000 main:app
```

#### Frontend

```bash
cd frontend
npm run dev
```

## 🚢 Deployment

### Step-by-Step Guide to Deploy on DigitalOcean

1. **Create a DigitalOcean Droplet**:
   - Log in to DigitalOcean.
   - Create a new Droplet using Ubuntu.
   - Choose the appropriate size and data center region.
   - Add your SSH key.

2. **Access Your Droplet**:
   ```bash
   ssh root@your_droplet_ip
   ```

3. **Clone Your GitHub Repository**:
   ```bash
   git clone https://github.com/pauli3j/pauliej.git
   cd pauliej
   ```

4. **Install Docker and Docker Compose**:
   ```bash
   apt update
   apt install docker.io
   curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   chmod +x /usr/local/bin/docker-compose
   ```

5. **Build and Run Containers**:
   ```bash
   docker-compose up -d
   ```

6. **Install Nginx**:
   ```bash
   apt install nginx
   ```

7. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name pauliej.com www.pauliej.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

   Restart Nginx:
   ```bash
   systemctl restart nginx
   ```

8. **Setup Custom Domain on DigitalOcean**:
   - Add your domain to DigitalOcean.
   - Update DNS settings on Namecheap to point to your Droplet's IP.

9. **Setup SSL with Let’s Encrypt**:
   ```bash
   apt install certbot python3-certbot-nginx
   certbot --nginx -d pauliej.com -d www.pauliej.com
   ```

   Automate SSL renewal:
   ```bash
   crontab -e
   ```

   Add:
   ```bash
   0 0,12 * * * root certbot renew --quiet
   ```

10. **Setup GitHub Actions for CI/CD**:
    - Create `.github/workflows/deploy.yml`:
      ```yaml
      name: Deploy to DigitalOcean

      on:
        push:
          branches:
            - main

      jobs:
        deploy:
          runs-on: ubuntu-latest

          steps:
          - name: Checkout code
            uses: actions/checkout@v2

          - name: Set up Docker
            uses: docker/setup-buildx-action@v1

          - name: Log in to Docker Hub
            uses: docker/login-action@v1
            with:
              username: ${{ secrets.DOCKER_USERNAME }}
              password: ${{ secrets.DOCKER_PASSWORD }}

          - name: Build and push Docker images
            run: |
              docker-compose -f docker-compose.yml build
              docker-compose -f docker-compose.yml push

          - name: SSH and Deploy
            uses: appleboy/ssh-action@master
            with:
              host: ${{ secrets.DROPLET_IP }}
              username: root
              key: ${{ secrets.SSH_PRIVATE_KEY }}
              script: |
                cd /path/to/your/project
                git pull origin main
                docker-compose -f docker-compose.yml pull
                docker-compose -f docker-compose.yml up -d
      ```

    - Add GitHub Secrets:
      - `DOCKER_USERNAME`: Your Docker Hub username.
      - `DOCKER_PASSWORD`: Your Docker Hub password.
      - `DROPLET_IP`: Your DigitalOcean Droplet IP address.
      - `SSH_PRIVATE_KEY`: Your private SSH key.

## ✨ Contributors

- [Paulie Jesukiewicz](https://github.com/pauli3j)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
