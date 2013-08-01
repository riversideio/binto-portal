## Magnolia Bloom

#### Riverside IO Member Portal

this is a tool to allow member access their information 

#### Victoria Club

this app uses riversideio's victoriaclub as an api to get member data

#### Settup

This app runs off of nodejs &  `grunt` CLI 

##### install grunt

```
npm install -g grunt-cli
```

##### install dependecies

```
cd ~/app-directory
npm install
```

##### starting up

```
grunt server
```

this command will do a number of things, compile template, watch files and start the app. Also a process will run that will allow the templates to recompiled once the files are changed

##### visit it

it will start a server at `http://127.0.0.1:3030` if you visit site this way you hit the main api

if you visit the site from `localhost` then the app will know to hit a local version of `victoria-club` running on http://127.0.0.1:3000

additional configurations will be added later

#### technologies

	- nodejs
	- handlebars
	- backbonejs
	- underscore
	- jquery
