const { exec } = require('child_process');

function TerminalCommand(command) {
  exec(command,(err,stdout)=>{
    if(err){
        console.err("Error Running The", command)
    }
  });
}



module.exports = TerminalCommand;