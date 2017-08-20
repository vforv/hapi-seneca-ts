
pipeline {
    
    agent { node { label 'agent1' } }
    stages {
        stage('Build') {
            steps {
                sh '''
                  ./system/fuge/ci/docker-up.sh
                  ./system/fuge/ci/docker-down.sh
                '''
            }
        }
        
        stage('Test') {
            steps {
                sh '''
                 ./system/fuge/ci/docker-up-test.sh
               '''
            }
        }
    }
    
        post {
          always {
            junit './test/*.xml'
          }
        }
    
}