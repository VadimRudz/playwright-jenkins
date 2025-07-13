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

        stage('Install Chrome') {
            steps {
                sh 'npx playwright install chromium'
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