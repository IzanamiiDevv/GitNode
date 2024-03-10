const { exec } = require('child_process');

function runNpmInstall() {
  const childProcess = exec('npm install');

  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  childProcess.on('close', (code) => {
    if (code === 0) {
      console.log('npm install completed successfully.');
    } else {
      console.error(`npm install process exited with code ${code}.`);
    }
  });
}

// Run the npm install command
runNpmInstall();


function GitNode(){
    console.log("GitNode Linked");
}

module.exports = GitNode;