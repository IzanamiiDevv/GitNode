# GitNode
**Remote GitHub Control in Node.js**

GitNode is a Node.js module designed to streamline the interaction with GitHub by transforming Git CLI commands into JavaScript functions. This module empowers developers to seamlessly integrate Git operations into their Node.js applications, providing a convenient and efficient way to manage repositories, branches, commits, and more.

**Key Features:**

1. **JavaScript Interface:** GitNode translates common Git commands into JavaScript functions, allowing developers to control GitHub repositories programmatically within a Node.js environment.

2. **GitHub Automation:** Easily automate routine Git operations such as cloning repositories, creating branches, committing changes, pushing updates, and handling pull requests—all through intuitive JavaScript methods.

3. **Simplified Workflows:** GitNode abstracts the complexities of the Git CLI, offering a more straightforward and user-friendly interface for handling version control tasks within Node.js applications.

4. **Enhanced Productivity:** By integrating GitNode, developers can enhance their workflow and focus on building applications, without the need to switch between the Git CLI and their code editor.


**Getting Started:**

1. Install GitNode using npm:

   ```bash
   npm install @izanamidev/gitnode
   ```

2. Require GitNode in your Node.js application and start leveraging Git operations programmatically.

Simplify your GitHub interactions with GitNode—where Git meets Node.js seamlessly.

**Example Usage**
```javascript
//Import
const gitnode = require('@izanamidev/gitnode');

//Initialze
const git = gitnode();

//Gitnode Method
git.status((err,res)=>{
    if(err){throw new Error("Error on Checking Gitnode status");}
    console.log(res)
});
```

## Documentaion
### git.status();
Show the working tree status<br>
**Syntax:**
```javascript
git.status(callback(error,resources));
```

### git.add();
Add file contents to the index<br>
**Syntax:**
```javascript
git.add(path,callback(error,resources));
```

### git.commit();
Add file contents to the index<br>
**Syntax:**
```javascript
git.add(path,callback(error,resources));
```

### git.checkout();
Add file contents to the index<br>
**Syntax:**
```javascript
git.add(path,callback(error,resources));
```

### git.pullOrigin();
Add file contents to the index<br>
**Syntax:**
```javascript
git.add(path,callback(error,resources));
```

### git.pushOrigin();
Add file contents to the index<br>
**Syntax:**
```javascript
git.add(path,callback(error,resources));
```

## Tools Used
<img src="https://skillicons.dev/icons?i=npm,git,nodejs,javascript" />