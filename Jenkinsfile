pipeline {
  agent any
  options { 
	disableConcurrentBuilds()
        lock('Cache Volume')
  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:12'
        }

      }
      steps {
        sh 'yarn install'
        sh 'PUBLIC_URL=https://allowance.fun yarn build'
        sh 'tar czf ../allowance-fun.tar.gz build/'
        stash(name: 'dist', includes: 'allowance-fun.tar.gz')
      }
    }
    stage('Publish Web') {
      when {
        branch 'master'  //only run these steps on the master branch
      }
      steps {
        unstash('dist')
        sh '''
            tar xzf allowance-fun.tar.gz
            cd build; rsync -avt --delete . /data/www.allowance.fun/
        '''
      }
    }
  }
}
