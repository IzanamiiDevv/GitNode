const { exec } = require('child_process');
const fs = require('fs');

const gtnd = [
  
]

function runCommand(command, callback = ()=>{}) {
  exec(command, (err, res) => {
    callback(err,res);
  });
}

function gitnode() {
  const isGitPresent = fs.existsSync('.git');
  runCommand('git --version');

  if (!isGitPresent) {
    console.error("Error Loading GitNode: Your repository doesn't have a .git folder.");
    return new Error("Error Loading GitNode: Your repository doesn't have a .git folder.");
  }

  return {
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