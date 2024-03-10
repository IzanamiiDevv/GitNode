@echo off



REM Check the status
REM git status

REM Stage changes
git add .

REM Verify staged changes
REM git status

REM Commit changes with a custom message
git commit -m "Your commit message here"

REM Switch to the main branch
git checkout main

REM Pull the latest changes from the main branch
git pull origin main

REM Merge changes from the feature branch (replace 'your-feature-branch' with your actual branch name)
git merge your-feature-branch

REM Resolve any potential merge conflicts manually

REM Commit the merge
git commit -m "Merge branch 'your-feature-branch' into main"

REM Push changes to the remote repository
git push origin main

REM Pause to keep the console window open (optional)
pause
