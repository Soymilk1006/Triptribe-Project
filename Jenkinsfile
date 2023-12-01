pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20.9'
    }

    environment {
        REPO_URL = 'https://github.com/Soymilk1006/TripTribe-Frontend.git'
        VERCEL_TOKEN = credentials('vercel-token') // Create a Jenkins secret credential with the Vercel token
        VERCEL_PROJECT_ID = 'prj_vndONnDyXiRdP75Of90mKChKwSqV' // Set your Vercel project ID
        VERCEL_ORG_ID = 'team_WeLBdN2ZfGXX0JtjF0Vk96ax' // Set your Vercel organization ID
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository from GitHub
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], userRemoteConfigs: [[url: env.REPO_URL]]])
            }
        }

        stage('Test'){
            steps {

                script {
                    sh 'npm ci'
                    sh 'npm run lint'
                    sh 'npm run prettier'
                }   
            }
        }
        stage('Install Dependencies and Deploy') {
            steps {
                script {
                    // Install Node.js and npm (assuming Node.js tool is already configured)

                    // Install Vercel CLI
                    sh 'npm install -g vercel'

                    // Print Vercel token for debugging purposes
                    echo "Vercel Token: ${VERCEL_TOKEN}"

                    // Pull Vercel environment information
                    sh 'vercel pull --yes --environment=preview --token=$VERCEL_TOKEN'

                    // Build project artifacts (if needed)
                    // sh 'npm ci'

                    sh 'vercel build --token=$VERCEL_TOKEN'
                    sh 'vercel deploy --prebuilt --token=${VERCEL_TOKEN}'
                }
            }
        }
    }
    
    post {
         changed {
            script { 
                    emailext subject: '$DEFAULT_SUBJECT',
                        body: '$DEFAULT_CONTENT',
                        recipientProviders: [
                            [$class: 'CulpritsRecipientProvider'],
                            [$class: 'DevelopersRecipientProvider'],
                            [$class: 'RequesterRecipientProvider'] 
                        ], 
                        replyTo: '$DEFAULT_REPLYTO',
                        to: '$DEFAULT_RECIPIENTS'
                
            }
        }
    }
}
