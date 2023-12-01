
pipeline {
    agent any
    tools {
        nodejs 'NodeJS-20.9'
    }
    
    environment {
        VERCEL_TOKEN = credentials('vercel-token') // Create a Jenkins secret credential with the Vercel token
        VERCEL_PROJECT_ID = 'prj_vndONnDyXiRdP75Of90mKChKwSqV' // Set your Vercel project ID
        NEXTJS_APP_NAME = 'your-nextjs-app-name'
    }

    stages {
        stage('Checkout') {
            when {
                expression { env.BRANCH_NAME == 'dev' }
            }
            steps {
                script {
                    // Checkout your Next.js app code from version control (e.g., Git)
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm
   
                    // Install Vercel CLI
                    sh 'npm install -g vercel'
                    
                    // Install project dependencies
                    // sh 'npm ci'
                    //pull Vercel environment information
                    sh "vercel pull --yes --enviroment=production --token=${VERCEL_TOKEN}"
                    // Build project artifacts
                    sh "vercel build --prod --token=${VERCEL_TOKEN}"
                    sh "vercel deploy --prebuilt --prod --token=${VERCEL_TOKEN}"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run test
                    echo 'run test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Next.js app
                    echo 'npm run build'
                }
            }
        }

        stage('Deploy to Vercel') {
            steps {
                script {
                    // Deploy the Next.js app to Vercel using the Vercel CLI
                    // sh "vercel --token ${VERCEL_TOKEN} --prod --name ${NEXTJS_APP_NAME} --project ${VERCEL_PROJECT_ID}"
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}

