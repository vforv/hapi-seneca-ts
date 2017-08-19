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

        stage('Test') {
               sh '''
                  ./system/init.sh
                  ./system/fuge/test.sh
                '''
        }
      }
      catch (err) {
        echo "Failed: ${err}"
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