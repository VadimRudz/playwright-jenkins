pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Name from Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/VadimRudz/playwright-jenkins.git' // Repository name
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
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
            junit 'test-results/**/*.xml' // If we need to colelct JUnit reports
        }
    }
}