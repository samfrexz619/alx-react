import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications'
import './App.css'


const App = () => {
  return ( 
    <>
      <Notification  />
      <div className="App">
        <Header />
        <Login  />
        <Footer  />
      </div>
    </>
   );
}
 
export default App;

/*
 "jest": {
    "setupFilesAfterEnv": [
      "<rootDir>/config/setupTests.js"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "transform": {
      "\\.js$": "<rootDir>/node_modules/babel-jest"
    }
  },
*/