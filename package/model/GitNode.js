const { exec } = require('child_process');
const fs = require('fs');

function runCommand(command){
    exec(command,(err,res)=>{
        if(err){throw new Error("Error Running Command")}
        console.log("Command Run Sucessfully")
    });
}

function GitNode(){

    return {
        gitCheck: function(cmd){
            try {
                runCommand(cmd);
                return true
            } catch (error) {
                return false
            }
        },

    }
}

module.exports = GitNode;