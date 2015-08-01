# NodeJS Demo Application

This application is a demoing the use of NodeJS, ExpressJS, and MySql through Sequelizer.

## Before Starting
Ensure MySql server is setup with the right credentials and location updated in two of the application
files. The two files are located are here:

```
"../config/config.json"
"../bin/www"
```

The database that is set to be used is "database_development"

## Starting the app

```
npm install
npm start
```

After the application is loaded, you should be able to go to [http://localhost:3000](http://localhost:3000) to begin using the app.
## Using the app
Signing in with the username "admin" will get you to the admin panel where you can
create multiple choice questions and answers as well as view any answered questions from
other users.

If you sign in with any other name, a user account will automatically be created and you can begin
answering questions created by the admin. You will be presented with one question each time you submit
until you run out of questions to answer. 