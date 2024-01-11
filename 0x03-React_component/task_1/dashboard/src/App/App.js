import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications'
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import './App.css'

class App extends React.Component {

  listCourses = [
    {id: 1, name: 'ES6', credit: '60',},
    {id: 2, name: 'Webpack', credit: '20',},
    {id: 3,name: 'React', credit: '40',},
  ];

  listNotifications = [
    {id: 1, type: 'default', value: 'New course available',},
    {id: 2, type: 'urgent', value: 'New resume available',},
    {id: 3, type: 'urgent', html: getLatestNotification(),},
 ];

 componentDidMount() {
  window.addEventListener('keydown', this.handleKeyBoard)
 }

 componentWillUnmount() {
  window.removeEventListener('keydown', this.handleKeyBoard)
 }

 handleKeyBoard = (e) => {
  if(e.ctrlKey && e.key === 'h'){
    alert('Logging you out')
    this.props.logout()
  }
 }

  render() {
    return(
      <React.Fragment>
        <div className="App">
          <div className="App-notif">
            <Notification listNotifications={this.listNotifications} />
          </div>
          <Header />
          <div className="App-body">
            {
              this.props.isLoggedIn 
              ? <CourseList listCourses={this.listCourses} /> 
              : <Login  />
            }
          </div>
          <Footer  />
        </div>
      </React.Fragment>
    );
  }
};

App.defaultProps = {
  isLoggedIn: false,
  logout: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

export default App;
