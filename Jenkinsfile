pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/VadimRudz/playwright-jenkins.git'
            }
        }

       stage('Install System Dependencies') {
             steps {
                sh '''
                apt-get update
                apt-get install -y libglib2.0-0 \
                libnspr4 \
                libnss3 \
                libatk1.0-0 \
                libatk-bridge2.0-0 \
                libcups2 \
                libxcb1 \
                libxkbcommon0 \
                libatspi2.0-0 \
                libx11-6 \
                libxcomposite1 \
                libxdamage1 \
                libxext6 \
                libxfixes3 \
                libxrandr2 \
                libgbm1 \
                libcairo2 \
                libpango-1.0-0 \
                libasound2
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install chromium'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test:chrome'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*'
            junit 'test-results/**/*.xml'
        }
    }
}