This the the project that solve the bundles of exercises
# **Bundle 1**

Exercise 1

- Create a project & initialize git
- Rename your main branch from `master` to `main`
- Make changes to the project (add files, rename them or edit them)
- Stage your changes and commit them
- Create a github repo and connect it with your project
- Push your changes to github
- Create a new branch `dev`
- From `dev` create another branch `test`
- Go back to the `dev` branch and delete the `test` branch

Exercise 2

- Create a new `home.html` file, add some html changes and save them
- Stash save your current changes
- Repeat the same process for a new `about` page and stash save your changes
- Repeat the same process for a new `team` page and stash save your changes
- Using stash pop restore the changes of the `about page`
- With the help of an index use stash pop bring back the `home page` changes
- Commit the current changes and push them
- Using stash pop restore the changes of the `team page` index
- Reset the current changes using git reset and go back to the changes without the `team page`

# Bundle 2

Exercises 1

- Create a new branch named `ft/bundle-2`
- Add new changes to your project. create a new page named `services.html` and add some changes
- Commit your changes and create a Pull Request against the `main` branch in your github repository
- Request a review and make sure your Pull request gets merged (Look for someone to merge your PR)

Exercise 2

- Checkout your `main` branch and pull the latest changes
- Create a new branch named `ft/service-redesign`
- Add new changes to the `service.html` page
- commit and push them
- create a new PR for your changes
- go back to your `main` branch and add again new changes to your `service.html` page, you can add different changes but make sure to affect the same part(line of code) as you did in the other PR
- Commit and push those changes
- Now go back to the github PR you had created for the `ft/service-redesign`branch, you will then see that you have conflicts with the `main` branch
- In your project checkout the `ft/service-redesign`branch
- Compare the `ft/service-redesign`with the `main` branch using git diff and observe the changes
- Using git merge, merge the `main` branch with `ft/service-redesign` branch and commit and push you changes again

# Bundle 3

Exercise 1:

- Create a new branch named `ft/team-page`
- Create a new html page named `team.html` and add some changes
- commit and push those changes
- Create a new PR for the changes
- Go back to `main` branch (checkout the `main` branch)
- Create new branch named `ft/contact-page`
- Go back to the `ft/team-page`
- With the help of git log look for the last commit and copy its hash
- Checkout again `ft/contact-page` using git cherry-pick get the changes from the last commit on the `ft/team-page` branch.
- Add new changes for the contact page and commit, push them
- Create a new PR for the contact page
- From the `ft/contact-page` branch create a new branch called `ft/faq-page`
- Create a new `faq.html` page and add some changes there
- Commit and push those changes
- Using git revert, revert the changes of the last commit of the `ft/team-page` branch. (use the commit hash you copied earlier)
- Push the changes and create a new PR

Exercise 2:

- Create new branch from the `ft/faq-page` branch named `ft/home-page-redesign`
- Go back to the `main` branch and make some changes there
- Commit and push them
- go back to the `ft/home-page-redesign` branch
- Using git rebase, rebase your branch to `main`
- Add changes to the home page and commit push them
- Create a PR for the changes.

# Bundle 4

Exercise 1

- Checkout the `main` branch
- Create a new repository on github
- Using git remote add the repo to your project as second remote named `git-copy`
- Make a new changes on the home page
- Commit the changes
- Push the changes to the both remotes. the `origin` and `git-copy`

Exercise 2

- Checkout a new branch named `ft/footer`
- Add some changes to the branch and commit them
- Add more changes again to the branch and create a second commit
- Push and create a new PR for the branch
- Checkout the `main` branch again
- From there create a new branch named `ft/squashing`
- Using git merge squash, squash the changes on the `ft/footer` branch
- Commit the changes with a different commit message such as `footer changes squashing`
- Push the changes and create a PR

# Bundle 5

Exercise 1:

- On your github repo enable github pages
- Check if the link is publicly visible to anyone

Exercise 2:

- Fork this project https://github.com/octangroup/git-cafe-exercise
- Clone your fork on your machine
- Edit the `index.html` file
- Change the text `Welcome to our place` to `Welcome to our restaurant`
- Commit and push the changes
- Raise a PR to the original Repo

# Bundle 6

> In this exercise, you will be working on the copy of the `git-cafe-exercise` that you have forked on your account in the previous exercise.

Keep in mind that each exercise must be done on a different branch
> 

Exercise1:

- On the `git-cafe-exercise` repo create a new feature branch
- Add new changes related to a new page named `Menu`
- Afterward, raise a new PR
- Request review

Exercise2:

- Create a new bug fix branch
- From there change the title of the `index-4.html` file to “**Contact**”
- Raise a new PR
- Request review

Exercise 3:

- On the `git-cafe-exercise` repo, there is a small hotfix on the contact page
- Change the telephone on the `index-4.html` page from `+1 800 603 6035` to `+1 800 659 6035`

Exercise 4:

- Review two PRs from your peers and request some changes on those PRs —> your peers need to give you access to their repository for you to review them.
- Once, they have adjusted the requested changes, approve and merge that PR.
