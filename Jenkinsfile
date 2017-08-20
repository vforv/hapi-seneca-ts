
pipeline {
    
    agent { node { label 'agent1' } }
    stages {
        stage('Build') {
            
            steps {
                git "https://github.com/vforv/hapi-seneca-ts"
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
               sh '''
                 mkdir -p test
                 docker cp devtest_api_1:home/app/test/api.xml test/api.xml
               '''
            }
        }
    }
    
        post {
          always {
            junit 'test/*.xml'
          }
        }
    
}