const { exec } = require('child_process');
const fs = require('fs');

function runCommand(command){
    exec(command,(err,res)=>{
        if(err){throw new Error("Error Running Command")}
        console.log("Command Run Sucessfully")
    });
}

function checkGit() {
    const files = fs.readdirSync('./');
    const isGitPresent = files.includes('.git');
  
    return isGitPresent;
  }

function GitNode(){

    return {
        gitCheck:checkGit

    }
}

module.exports = GitNode;