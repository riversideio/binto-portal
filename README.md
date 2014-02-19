# binto-portal

![](https://raw2.github.com/riversideio/binto-api/master/binto.jpg)

An open source member portal for coworking spaces. Built on top off [binto-api](http://github.com/riversideio/binto-api). Accept new signups, make donations, allow members to update and cancel their membership, and more.

## Quickstart

1. [Setup binto-api](https://github.com/riversideio/binto-api).

2. Run the following commands.

```
git clone https://github.com/riversideio/binto-portal.git
cd binto-portal
heroku create
heroku config:set BINTO_API=http://your-binto-api.herokuapp.com/api/v0/
heroku config:set PORTAL_TITLE=Riverside.io PORTAL_URL=http://riverside.io PORTAL_EMAIL=info@riverside.io
git push heroku master
```

You're done. Visit <http://your-binto-portal.herokuapp.com>. 

## Screenshots

![](https://raw2.github.com/riversideio/binto-portal/master/screenshots/signup.png)

![](https://raw2.github.com/riversideio/binto-portal/master/screenshots/update.png)

![](https://raw2.github.com/riversideio/binto-portal/master/screenshots/plan.png)

## Development Setup

1. [Setup binto-api](https://github.com/riversideio/binto-api#development-setup) locally and make sure it is running.

2. Run the following commands.


```
npm install
cp .env.example .env
grunt server
```

Notes: The `BINTO_API` setting in `.env.` points towards the api that you would like to run the app against. `TEST_USER` and `TEST_PASSWORD` is a user in you test database that you can login with when using the automated test.

### Additional Notes

#### Install CLI Tools

```
[sudo] npm install -g grunt-cli
[sudo] npm install -d dalek-cli
```

#### Starting up

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
