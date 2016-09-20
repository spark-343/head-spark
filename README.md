# home-spark

*Everybody is welcomed for this project.*

A smart cube that displays your notifications in the most suitable ways everywhere in your home.

For now the cube works only if you are online.

In the final version, **home-spark** will be composed of:

* 1 arduino for the hardware interface
* 1 raspberry pi 3 for the online interface and the computing power

> Maybe only arduino will be necessary if all the computing is transfered online.

> For development raspberry pi can be replaced by a computer.



## Setup the Apis

* create the file .env
* add your api keys in the file .env

See more on the file .env_example

## Development

```javascript

npm install

// to generate css general style
npm run less

// to generate js from ts for backend (errors will be raised but don't worry)
npm run typescript

// to generate js from ts, css from less for angular
npm run webpack

// to start the webserver
npm start

// to clean the temporary files
npm run clean

```

To install a dependency:

```javascript

npm install <module> --save

typings install <module> --save --global --source <source> // try without argument source, typins will make you proposition
```

## Theme

We use [semanticUi](http://semantic-ui.com/).
