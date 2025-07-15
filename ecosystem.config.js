module.exports = {
  apps: [{
    name: 'chatflow-saas',
    script: 'server/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
      CLIENT_URL: 'https://seudominio.com'
    }
  }]
};