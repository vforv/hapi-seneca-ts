pipeline {
    agent any
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
            junit 'build/reports/**/*.xml'
          }
        }
    
}