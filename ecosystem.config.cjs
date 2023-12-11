// Launch with: $ pm2 start ecosystem.config.cjs 
module.exports = {
  apps: [
    {
      name: 'client',
      script: 'npm',
      args: 'run dev',
      cwd: './', // Current working directory is the root
      watch: true,
      ignore_watch: ['node_modules', 'api', '*.timestamp-*'],
      env: {
        NODE_ENV: 'development',
        // Add other environment variables if needed
      }
    },
    {
      name: 'api',
      script: 'node',
      args: 'api/server.js',
      cwd: './', // Current working directory is the root
      watch: true,
      ignore_watch: ['node_modules', 'dist', 'src', '*.timestamp-*'],
      env: {
        NODE_ENV: 'development',
        // Add other environment variables if needed
      }
    }
  ]
};
