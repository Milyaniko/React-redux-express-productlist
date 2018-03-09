##Good afternoon!

The program is consisted of 2 parts – server and client. The server provides client side with API from database (in our case fake data from .js file).

Prior to use don’t forget to install dependencies in both root and client folders.
-	Install server dependencies : open the root folder and run “npm install”.
-	Install client dependencies: in the same root folder run “npm run client-install”, it will go to client folder and install all the dependencies there, or you may do it manually from client’s folder

To turn on the program you need to be sure that you are in the root folder (not client’s or any other) and run the command  “npm run dev“ . This command will turn on our server, client and SCSS preprocessor automatically. Server is settled on port 5000 and client on 3000, so be sure that these ports are available. 
To run the client’s side test, you have to be in the clients folder and run command “npm run test”.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

