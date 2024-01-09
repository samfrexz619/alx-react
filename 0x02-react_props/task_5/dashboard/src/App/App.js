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
      <div className="App">
        <div className="App-notif">
          <Notification  />
        </div>
        <Header />
        <div className="App-body">
          {!isLoggedIn ? <Login  /> : <CourseList  />}
        </div>
        <Footer  />
      </div>
    </>
   );
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}
export default App;
