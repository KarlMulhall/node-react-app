# Karl's REST Countries App
An application built using React for frontend and Node.js for backend. This application is being built as part of the interview process for a Software Engineer internship position.

## Prerequisites
Firstly, to run this app you will need to install Node.js and npm.
Once installed, run the following command in the projects terminal to install all of the projects dependancies:
```
npm install
```
This application uses the fetch API that is native to Node as of version 18 and may not work if your Node is not up to date.
To check your node version, just type 'node' into your terminal.
```
node
```

## Installation and Setup
1. Clone this project into your IDE of choice. (e.g VSCode)

2. Open two seperate terminal windows, one for both the frontend and backend.

3. In one terminal window, cd into the backend folder. Once you've done this enter the following command.
```
cd backend

npm run dev
```
This will start the backend server in development mode using Nodemon.
This will run on port 5000. If you would like to just query the backend server without using the frontend application, visit [http://localhost:5000](http://localhost:5000) in your browser.

4. In the other terminal window, cd into the frontend folder. Enter the following command:
```
cd frontend

npm start
```
This will run our React application.

5. Now that both are running, open your browser and the app should be running on [http://localhost:3000](http://localhost:3000)

## Using the App
Once the app is open on [http://localhost:3000](http://localhost:3000) you can begin entering the name of a country in the text bar and pressing the search button. If you have entered a valid country name, that countries information will be presented to you.

## Testing
To run the Jest tests for this project:
1. cd into either the /frontend folder or the /backend folder.
2. Enter the following command:
```
npm test
```
3. The tests should run and the results will be displayed in the terminal
Both backend and frontend carry out unit tests, while the frontend also does a snapshot test.

Test cases are stored in both 'frontend/src/__tests__' and 'backend/__tests__'