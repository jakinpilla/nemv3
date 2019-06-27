module.exports = {
  apps : [{
    name: 'nemv',
    script: './be/bin/www',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_pr: {
      NODE_ENV: 'production',
      PORT: 80
    }
  }],

  deploy : {
    pr : {
      user : 'root',  
      host : '212.83.163.1',
      key : 'jakin-key.pem',
      ref  : 'origin/master', 
      repo : 'git@github.com:repo.git',
      path : '/var/www/nemv3',
      'post-deploy' : 'yarn pm2'
    }
  }
};
