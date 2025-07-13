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
            steps {
                sh '''
                export PLAYWRIGHT_BROWSERS_PATH=$HOME/.cache/playwright
                npx playwright install --with-deps
                '''
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