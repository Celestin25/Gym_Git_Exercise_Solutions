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
## Bundle 2
### Exercise 1
git checkout -b ft/bundle-2
git add services.html
git add services.html
git commit -m "Created services.html and made some changes"
git push origin ft/bundle-2
### Exercise 2
git checkout main
git pull
git checkout -b ft/service-redesign
git add service.html
git add service.html
git commit -m "Redesigned services page"
git push origin ft/service-redesign
git checkout main
git pull
 git commit -m "Updated services page on main"
git push origin main
git checkout ft/service-redesign
git diff main
git merge main
git add service.html
git commit -m "Resolved merge conflicts with main"
git push origin ft/service-redesign
## Bundle 3
### Exercise 1
git checkout -b ft/team-page`
git add team.html
git commit -m "Created team.html and added content"
git push origin ft/team-page
git checkout main
git checkout -b ft/contact-page
git checkout ft/team-page
git log
git checkout ft/contact-page
git cherry-pick abc123
git add contact.html
git commit -m "Added content to contact.html"
git push origin ft/contact-page
git checkout -b ft/faq-page
git add faq.html
git commit -m "Created faq.html and added content"
git push origin ft/faq-page
git revert abc123
# Push the changes
git push origin ft/faq-page
### Exercise 2
git checkout -b ft/home-page-redesign
#### Switch back to `main` branch
git checkout main
#### Stage, commit, and push your changes
git add faq.html 
git commit -m "Made changes in main"
git push origin main

#### Switch back to `ft/home-page-redesign`
git checkout ft/home-page-redesign

#### Rebase branch to `main`
git rebase main

#### Stage, commit, and push your changes
git add home.html
git commit -m "Redesigned home page"
git push origin ft/home-page-redesign

#### Creating a PR is done on GitHub's website.
## Bundle 4
### Exercise 1
# Checkout `main` branch
git checkout main
# Stage and commit your changes
git add home.html
git commit -m "Made changes in home page"

# Push the changes to the `origin`
git push origin main

### Push the changes to the `git-copy`
git push git-copy main
### Exercise 2
# Checkout a new branch named `ft/footer`
git checkout -b ft/footer
# commit your changes
git add footer.html
git commit -m "changes in ft/footer"
#  additional changes
git add footer.html
git commit -m "Made additional changes in ft/footer"

# Push your changes
git push origin ft/footer
# Checkout `main` branch
git checkout main

# Create a new branch named `ft/squashing`
git checkout -b ft/squashing

# Merge with the `ft/footer` branch and squash the changes
git merge --squash ft/footer

# Commit the changes
git commit -m "footer changes squashing"

# Push the changes
git push origin ft/squashing
## Bundle 5
### Exercise 1
### Exercise 2
git clone https://github.com/Celestin25/git-cafe-exercise.git
cd git-cafe-exercise
sed -i 's/Welcome to our place/Welcome to our restaurant/g' index.html
git add index.html
git commit -m "index.html updated'"
git push origin master
## Bundle 6
### Exercise 1
git checkout -b feature
echo "<h1>Menu Page</h1> <p>Welcome to our menu!</p>" > menu.html
git add index.html
git commit -m "Added new page"
git push origin feature
### Exercise 2










