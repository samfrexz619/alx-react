import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications'
import CourseList from "../CourseList/CourseList";
import './App.css'


const App = ({isLoggedIn}) => {
  return ( 
    <>
      <Notification  />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList  /> : <Login  />}
        </div>
        <Footer  />
      </div>
    </>
   );
}

App.defaultProps = {
  isLoggedIn: true,
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
}
export default App;
