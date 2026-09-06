pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building EduSphere Application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing EduSphere Application...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying EduSphere Application...'
            }
        }
    }
}