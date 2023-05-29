# GIT Exercise
## Bundle 1
### Exercise 1
''' bash
git init
git checkout master 
git branch -m master main 
git remote add origin htts://github.com/Celestin25/Gym_Git_Exercise_Solutions.git
git branch -M main 
git push -u origin main 



git checkout -b dev
git status 
git checkout -b test

git checkout dev 
'''
### Exercise 2
echo "<h1>Home Page</h1>" > home.html
git add home.html
git stash save "home page changes"
echo "<h1>About Page</h1>" > about.html
git add about.html
git stash save "about page changes"
echo "<h1>Team Page</h1>" > team.html
git add team.html
git stash save "team page changes"
git stash list 
git stash pop stash@{1} 
git stash list 
git stash pop stash@{1}
git add .
git commit -m "Add home and about pages"
git push origin master 
git stash pop stash@{0} 
git reset --hard HEAD
