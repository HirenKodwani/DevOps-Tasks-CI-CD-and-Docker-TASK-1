CI/CD Pipeline for Node.js App using GitHub Actions & DockerHub

This repository contains Task 1 & 4 of the DevOps Internship: Automating Code Deployment using a complete CI/CD pipeline powered by GitHub Actions and DockerHub.

The goal of this project is to demonstrate how modern DevOps teams automate application build, testing, containerization, and deployment using CI/CD workflows.

📌 Project Overview

This project implements a full CI/CD pipeline that:

Automatically triggers on every push to the main branch

Installs dependencies and runs tests

Builds a Docker image for the Node.js application

Pushes the image to DockerHub

Ensures smooth, repeatable, and automated delivery

This pipeline showcases the end-to-end CI/CD automation process expected in real-world DevOps environments.

🧩 Tech Stack & Tools Tool Purpose Node.js Web application runtime Docker Containerization of the app GitHub Actions CI/CD automation DockerHub Host the pushed Docker images YAML Workflow configuration 🗂️ Repository Structure ├── Dockerfile ├── package.json ├── server.js ├── README.md └── .github/ └── workflows/ └── main.yml

⚙️ CI/CD Workflow (main.yml)

The CI/CD workflow performs the following:

1️⃣ Trigger

Runs automatically on every push to the main branch.

2️⃣ Build Phase

Checks out the repository

Installs Node.js

Installs dependencies

Executes tests (if present)

3️⃣ Docker Phase

Logs in to DockerHub securely using GitHub Secrets

Builds Docker image using the provided Dockerfile

Pushes the image to DockerHub with latest tag

🐳 Docker Image Deployment

Once the pipeline completes, the image is available on DockerHub:

docker pull /nodejs-demo-app:latest docker run -p 3000:3000 /nodejs-demo-app

The application will be live at:

http://localhost:3000

🔐 GitHub Secrets Used

Add these under:

Settings → Secrets → Actions

Secret Name Description DOCKERHUB_USERNAME Your DockerHub username DOCKERHUB_TOKEN DockerHub access token 🧪 Testing

The workflow supports running tests automatically if you include a test script in package.json:

npm test

If no tests exist, the pipeline continues safely.

📝 How to Run Locally Clone the repo git clone cd nodejs-demo-app

Install dependencies npm install

Run app node server.js

Visit: http://localhost:3000

🧠 What I Learned From This Task

Setting up CI/CD pipelines using GitHub Actions

Writing workflow YAML files

Automating Node.js app builds

Docker image creation and deployment

Using GitHub Secrets for secure authentication

Understanding DevOps deployment automation lifecycle

🙌 Acknowledgment

This project is part of the DevOps Internship – Task 1: Automate Code Deployment Using CI/CD Pipeline. The task helped me understand real-world DevOps processes, CI/CD tools, and Docker-based deployment workflows.
