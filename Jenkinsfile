pipeline {
    agent any
    tools {
        nodejs 'NodeJS-20.9'
    }
    environment {
        REPO_URL = 'https://github.com/Soymilk1006/TripTribe-Frontend.git'
        VERCEL_TOKEN = credentials('vercel-token') // Create a Jenkins secret credential with the Vercel token
        VERCEL_PROJECT_ID = 'prj_vndONnDyXiRdP75Of90mKChKwSqV' // Set your Vercel project ID
        NEXTJS_APP_NAME = 'your-nextjs-app-name'
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
    }
}

