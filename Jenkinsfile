pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20.9'
    }

    environment {
        // Define your environment variables
        REPO_URL = 'https://github.com/Soymilk1006/TripTribe-Frontend.git'
        AWS_REGION = 'ap-southeast-2'
        s3_bucket_name = 'www.qldbuildingrepairs.com-primary'
        build_folder = 'out'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository from GitHub
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], userRemoteConfigs: [[url: env.REPO_URL]]])
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm
                script {
                    // Check versions
                    echo 'Maven Version:'
                    sh 'mvn --version'

                    echo 'Git Version:'
                    sh 'git --version'

                    echo 'Java Version:'
                    sh 'java -version'

                    echo 'AWS CLI Version:'
                    sh 'aws --version'

                    echo 'NPM Version:'
                    sh 'npm --version'
                    sh 'node --version'

                    // Install npm dependencies
                   
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run coverage tests (modify the command based on your project)
                script {
                    echo 'npm run test'
                }
            }
        }

        stage('npm coverage') {
            steps {
                // Run coverage tests (modify the command based on your project)
                script {
                    echo 'npm run coverage'
                }
            }
        }

        stage('npm run build') {
            steps {
                // Build the static files
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('deploy to s3 bucket') {
            steps {
                    withCredentials([aws(accessKeyVariable:'AWS_ACCESS_KEY_ID', credentialsId:'aws-credentials', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                            sh "aws s3 cp ./${build_folder}/ s3://${S3_BUCKET_NAME}/ --recursive --region ${AWS_REGION}"
                    }
            }
        }
    }
}

