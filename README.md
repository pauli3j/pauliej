# 🌟 PaulieJ Project 🌟

Welcome to the **PaulieJ Project**! This repository houses a sophisticated full-stack application with a Python backend and a Next.js frontend, all containerized for easy deployment. Follow the steps below to set up and run the project on your local machine or deploy it to the cloud.

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
│   │   ├── styles
│   │   │   └── globals.css
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
- [Fly.io CLI](https://fly.io/docs/hands-on/install-flyctl/)
- [Node.js](https://nodejs.org/) (for local development)
- [Python](https://www.python.org/) (for local backend development)

## 🛠️ Setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/pauliej.git
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

### Fly.io

1. **Login to Fly.io:**

   ```bash
   flyctl auth login
   ```

2. **Initialize Fly.io App:**

   ```bash
   flyctl launch
   ```

3. **Deploy:**

   ```bash
   flyctl deploy
   ```

## ✨ Contributors

- [Your Name](https://github.com/pauli3j)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---