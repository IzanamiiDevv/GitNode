const { exec } = require('child_process');
const fs = require('fs');

function runCommand(command, callback = ()=>{}) {
  exec(command, (err, res) => {
    callback(err,res);
  });
}

function gitnode() {
  // Check if .git directory exists
  const isGitPresent = fs.existsSync('.git');

  // Check if Git is installed
  runCommand('git --version');

  if (!isGitPresent) {
    console.error("Error Loading GitNode: Your repository doesn't have a .git folder.");
    return;
  }

  return {
    runGitCommand: function (command) {
      runCommand(`git ${command}`);
    },
    autoCommit: function (message) {
      const autoCommitScript = `
        git status
        git add .
        git status
        git commit -m "${message}"
        git checkout main
        git pull origin main
        git merge your-feature-branch
        git commit -m "Merge branch 'your-feature-branch' into main"
        git push origin main
      `;

      runCommand(autoCommitScript);
    },

    status: function(callback){
      runCommand('git status',callback);
    },
    add: function(path,callback){
      runCommand(`git add ${path}`,callback);
    },
    commit: function(message,callback){
      runCommand(`git commit -m "${message}"`,callback);
    },
    checkout: function(branch,callback){
      runCommand(`git checkout ${branch}`,callback);
    },
    pullOrigin: function(branch,callback){
      runCommand(`git pull origin ${branch}`,callback);
    },
    pushOrigin: function(branch,callback){
      runCommand(`git push origin ${branch}`,callback);
    }
  };
}


module.exports = gitnode;