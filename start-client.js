/** Runs 'npm start' in the client directory */
const args = ['start'];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);
