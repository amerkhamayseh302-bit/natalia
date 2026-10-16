module.exports = {
  apps: [{
    name: 'natalia-backend',
    script: 'dist/server.js',
    cwd: __dirname,
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
    },
  }],
};
