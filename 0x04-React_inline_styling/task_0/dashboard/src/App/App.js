import React from "react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications'
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import './App.css'
import BodySection from "../BodySection/BodySection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyBoard = this.handleKeyBoard.bind(this);
  }

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
    this.props.logOut()
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
              ? (<BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={this.listCourses} /> 
                </BodySectionWithMarginBottom> )
              : (<BodySectionWithMarginBottom title='Log in to continue'>
                  <Login  />
                </BodySectionWithMarginBottom>)
            }
            <BodySection  title='News from the School'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam rem nostrum saepe quas eos soluta aperiam! Recusandae dignissimos impedit accusamus, quis assumenda asperiores id molestiae, consequuntur tempora minima dolorum.</p>
            </BodySection>
          </div>
          <Footer  />
        </div>
      </React.Fragment>
    );
  }
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return
},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;