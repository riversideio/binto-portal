## Magnolia Bloom

Coworking Member Portal. This is a tool to allow member access their information, and also accept new signups.

#### Victoria Club

This app uses [riversideio/victoriaclub](https://github.com/riversideio/victoria-club) as an api to get member data

#### Settup

This app runs off of nodejs &  `grunt` CLI 

##### Install grunt

```
[sudo] npm install -g grunt-cli
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

this command will do a number of things, compile template, watch files and start the app. Also a process will run that will allow the templates to recompiled once the files are changed

#### Technologies

	- nodejs
	- handlebars
	- jquery
	- stylus
	- requirejs
