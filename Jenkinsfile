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

        stage('Install dependencies') {
            steps {
                sh 'npm install @playwright/test'
            }
        }

        stage('Install browsers') {
            environment {
                PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'
            }
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            junit 'test-results/**/*.xml'
        }
    }
}