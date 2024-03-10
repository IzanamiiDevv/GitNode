const { exec } = require('child_process');
const fs = require('fs');

class GitNode {

    runCommand(command){
        exec(command,(err,res)=>{
            if(err){console.error(err)}
            console.log("Command Run Sucessfully")
        });
    }

    static onLoad(){
        runCommand("");
    }
}

module.exports = GitNode;