pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Название из Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ваш-репозиторий.git' // Укажите ваш репозиторий
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
            junit 'test-results/**/*.xml' // Если нужно собирать JUnit отчеты
        }
    }
}