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
    /**
     * 
     * @param {Function} callback (error,resolve)=>{};
     */
    status: function(callback){
      runCommand('git status',callback);
    },
    /**
     * 
     * @param {string} path 
     * @param {Function} callback
     */
    add: function(path,callback){
      runCommand(`git add ${path}`,callback);
    },
    /**
     * 
     * @param {string} message 
     * @param {Function} callback 
     */
    commit: function(message,callback){
      runCommand(`git commit -m "${message}"`,callback);
    },
    /**
     * 
     * @param {string} branch 
     * @param {Function} callback 
     */
    checkout: function(branch,callback){
      runCommand(`git checkout ${branch}`,callback);
    },
    /**
     * 
     * @param {string} branch 
     * @param {Function} callback 
     */
    pullOrigin: function(branch,callback){
      runCommand(`git pull origin ${branch}`,callback);
    },
    /**
     * 
     * @param {string} branch 
     * @param {Function} callback 
     */
    pushOrigin: function(branch,callback){
      runCommand(`git push origin ${branch}`,callback);
    }
  };
}


module.exports = gitnode;