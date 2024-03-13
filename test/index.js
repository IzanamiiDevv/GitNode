//Import
const gitnode = require('@izanamidev/gitnode');

//Initialze
const git = gitnode();

//Gitnode Method
git.status((err,res)=>{
    if(err){throw new Error("Error on Checking Gitnode status");}
    console.log(res)
});