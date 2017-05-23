# React Kanban Board
[![Build Status](https://travis-ci.org/wellingtonsampaio/react-kanban-board.svg?branch=master)](https://travis-ci.org/wellingtonsampaio/react-kanban-board)

An online Kanban Board that uses Google Tasks as data store.

## Overview
React Kanban Board is an online [Kanban Board](https://en.wikipedia.org/wiki/Kanban_board) that helps you organize your daily tasks.  

The application uses the [Google Tasks API](https://developers.google.com/google-apps/tasks/) to synchronize your work. During your first login, you will be requested to authorize the application to use your [Google Tasks](https://mail.google.com/tasks/canvas) account for this purpose.  

Don't worry, the application will create and use its own task lists. None of your other data will be touched.

Please click [here](https://react-kanban-board.herokuapp.com/) and try it out!.  

### Features
* Create tasks under the To Do list
* Delete tasks
* Move tasks between the lists
* Responsive web design

## Installation
You are encouraged to clone this repository and run the application by yourself. Please follow the instructions below.

### Prerequisites
You will need:
* [Node.js](https://nodejs.org/en/)
* A Google project and a registered client. Please follow [these](https://developers.google.com/google-apps/tasks/firstapp) instructions.

### Cloning the repository
```sh
$ git clone https://github.com/wellingtonsampaio/react-kanban-board.git
```
### Installing the dependencies
```sh
$ npm install
```
### Using your own API key and Client ID
Update the API_KEY and CLIENT_ID constants on this [file](https://github.com/wellingtonsampaio/react-kanban-board/blob/master/app/services/authApiService.js) with your Google Project credentials.

### Running the application in development mode
```sh
$ npm start
```

### Running unit tests
```sh
$ npm test
```
