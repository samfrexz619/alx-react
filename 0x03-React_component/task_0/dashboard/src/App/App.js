import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications'
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import './App.css'


const App = ({isLoggedIn}) => {

  const listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: '60'
    },
    {
      id: 2,
      name: 'Webpack',
      credit: '20'
    },
    {
      id: 3,
      name: 'React',
      credit: '40'
    },
  ]

  const listNotifications = [
    {
      id: 1,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      type: 'urgent',
      html: getLatestNotification()
    },
  ]

  return ( 
    <>
      <div className="App">
        <div className="App-notif">
          <Notification listNotifications={listNotifications} />
        </div>
        <Header />
        <div className="App-body">
          {!isLoggedIn ? <Login  /> : <CourseList listCourses={listCourses} />}
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
