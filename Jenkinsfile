throttle(['throttleDocker']) {
  node('agent1') {
      try{
        stage('Setup') {
          checkout scm
          sh '''
            ./system/fuge/ci/docker-down.sh
            ./system/fuge/ci/docker-up.sh
          '''
        }

        stage('Unit Test') {
          sh '''
            ./system/fuge/test.sh
          '''
        }
      }
      finally {
        stage('Cleanup') {
          sh '''
            ./system/fuge/ci/docker-down.sh
          '''
        }
      }
  }
}