# Update NPM  
`npm i -g npm`

# Initialise npm  
`npm init`

# Initialise git  
`git init`

# Install express  
`npm i -S express@version`

# Update git config locally
`git config --local user.name "Garima Kamboj"`
`git config --local user.email "garima.kamboj@icloud.com"`

# Update remote url
`git remote set-url origin https://iamgarima@github.com/iamgarima/todo_server.git`

# Sample Heroku App  
`https://github.com/heroku/node-js-getting-started.git`

# Push to Heroku
### Install Heroku and it's cli
### Create an account on Heroku
#### Add .env defining number of times your app start if fails, Procfile defines how to run your app and attached to HTTP routing stack, engines property specifying the node and npm versions, start script mentioning how to run your app
`heroku login`
`heroku create`
`git push heroku master`