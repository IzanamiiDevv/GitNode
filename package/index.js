const { exec } = require('child_process')

function runNpmInstall() {
  const command = exec('echo Hi');

  command.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  command.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  command.on('close', (code) => {
    if (code === 0) {
      console.log('npm install completed successfully.');
    } else {
      console.error(`npm install process exited with code ${code}.`);
    }
  });
}

function GitNode(){
    console.log("GitNode Linked");
}

module.exports = runNpmInstall;