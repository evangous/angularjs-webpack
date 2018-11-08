#AngularJS Project by Lilian Gousiou

##Description

A single-page application using AngularJS. It displays information calling the Rick and Morty API and bundles all JavaScript files with Webpack.

## Installation & Running

Angular-http-server installation needed. Extra packages are included in lib folder.

`$ npm install -g angular-http-server`

Run application as in angular-http-server configuration file.

`$ angular-http-server --config angular-http-server.config.js`

It opens in a default browser automatically [localhost:8081](http://localhost:8081/), where is running the application.

## Structure
```
lilian_gousiou
├── angular-http-server.config.js
├── app
│   ├── bundle.js
│   ├── css
│   │   ├── ngDialog.css
│   │   └── style.css
│   ├── favicon.ico
│   ├── index.html
│   ├── index.js
│   ├── js
│   │   ├── config.js
│   │   ├── controller.js
│   │   └── factories.js
│   └── templates
│       ├── character.html
│       ├── characters.html
│       ├── filtering.html
│       └── paging.html
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```

**Table of Contents**

[TOC]
