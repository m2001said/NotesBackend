# NotesBackend Details : 

- At the first i made two Schema , one for User and the second for tasks and in task Schema put user inside it so every task has the user information to easily get the task with the user .
- Create routes and every router has a function which is exported from controllers folder , actually you don't need to mak a folder for these function but to make all the files readable and any one can read it easy
- Creating middlewares : here i don't want any one to go to homePage without login so we should check if user login or not. This i made with checkAuth file in utils


  
