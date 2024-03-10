const { exec } = require('child_process');
const fs = require('fs');

function TerminalCommand(command) {
  exec(command,(err,stdout)=>{
    if(err){
        console.err("Error Running The", command)
    }
  });
}



module.exports = TerminalCommand;