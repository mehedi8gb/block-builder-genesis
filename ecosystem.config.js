// ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'block-builder-genesis',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/block-builder-genesis', // Replace with your actual path
      exec_mode: 'fork', // or 'cluster' if you're scaling
      instances: 1, // Or use "max" for all CPU cores (only in stateless apps)
      watch: false, // Set true only if you're watching local file changes
      env: {
        NODE_ENV: 'production',
        PORT: 6666,
        MONGODB_URI: 'mongodb+srv://mm_mehedi:9hchHyiS7.6JS6H@tms-experiment.hvwuyfv.mongodb.net/?retryWrites=true&w=majority'
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      merge_logs: true,
      time: true, // adds timestamp to logs
      restart_delay: 5000,
    },
  ],
};
