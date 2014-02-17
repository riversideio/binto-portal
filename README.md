## Magnolia Bloom

Coworking Member Portal. This is a tool to allow member access their information, and also accept new signups.

#### Victoria Club

This app uses [riversideio/victoriaclub](https://github.com/riversideio/victoria-club) as an api to get member data.

#### Settup

You will need to create a `.env` file in the root of the directory. This will hold all of you enviroment variables. 

```
API=http://localhost:3000/api/v0/
TEST_USER=user@gmail.com
TEST_PASSWORD=123456
```

The `API` config points towards the api that you would like to run the app against. `TEST_USER` and `TEST_PASSWORD` is a user in you test database that you can login with when using the automated test.

This app runs off of nodejs &  `grunt` CLI, and there is some automated browser test ran by `dalekjs`.

###### Install CLI Tools

```
[sudo] npm install -g grunt-cli
[sudo] npm install -d dalek-cli
```

##### Install dependecies

```
cd ~/app-directory
npm install
```

##### Starting up

```
grunt server
```

This command will do a number of things, compile template, watch files and start the app. Also a process will run that will allow the templates to recompiled once the files are changed

#### Technologies
- nodejs
- handlebars
- jquery
- stylus
- requirejs

#### Testing

`Do NOT test against the production api`

So we use [DalekJS](http://dalekjs.com/index.html) to run automated BDD test. Right now the only browser configured is Google Chrome.

Make sure the dev dependecies are installed as well as Chrome.

to run the just use the command

```
npm test
```

This will open up Chrome and test the site based off the `TEST_USER` and `TEST_PASSWORD`. Note that sometimes these test can fail due to slow interent connections and not the new code. Please try and test on good connections.
