import React from "react";
import { StyleSheet, css } from 'aphrodite';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications'
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { user, AppContext } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut
    }

    this.logOut = this.logOut.bind(this)
    this.logIn = this.logIn.bind(this)
    this.handleKeyBoard = this.handleKeyBoard.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)

    this.listCourses = [
      {id: 1, name: 'ES6', credit: '60',},
      {id: 2, name: 'Webpack', credit: '20',},
      {id: 3,name: 'React', credit: '40',},
    ];
  
    this.listNotifications = [
      {id: 1, type: 'default', value: 'New course available',},
      {id: 2, type: 'urgent', value: 'New resume available',},
      {id: 3, type: 'urgent', html: getLatestNotification(),},
   ];
  }

  logIn =(email, password)=> {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut =()=> {
    this.setState({
      user: user
    })
  }
  
  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    })
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    })
  }


 componentDidMount() {
  window.addEventListener('keydown', this.handleKeyBoard)
 }

 componentWillUnmount() {
  window.removeEventListener('keydown', this.handleKeyBoard)
 }

 handleKeyBoard = (e) => {
  if(e.ctrlKey && e.key === 'h'){
    this.showLogoutAlert()
    this.logOut()
  }
 }

 showLogoutAlert =()=> {
  alert('Logging you out')
 }


  render() {
    return(
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut
      }}>
        <React.Fragment>
          <div className={css(styles.App)}>
            <div className={css(styles.AppNotif)}>
              <Notification
                displayDrawer={this.state.displayDrawer}
                listNotifications={this.listNotifications}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
              />
            </div>
            <Header />
            <div className={css(styles.AppBody)}>
              {
                this.state.user.isLoggedIn
                ? (<BodySectionWithMarginBottom title='Course list'>
                    <CourseList listCourses={this.listCourses} />
                  </BodySectionWithMarginBottom> )
                : (<BodySectionWithMarginBottom title='Log in to continue'>
                    <Login logIn={this.logIn} />
                  </BodySectionWithMarginBottom>)
              }
              <BodySection  title='News from the School'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam rem nostrum saepe quas eos soluta aperiam! Recusandae dignissimos impedit accusamus, quis assumenda asperiores id molestiae, consequuntur tempora minima dolorum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi quod aspernatur expedita, exercitationem explicabo aperiam delectus deserunt doloremque velit error. Veritatis iure odio, sequi cupiditate vel nostrum sint repellendus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos nisi nostrum numquam minus mollitia doloremque! Repellat asperiores a temporibus. Expedita culpa a voluptatibus, odit amet vel tempora magni voluptate?
                </p>
              </BodySection>
            </div>
            <Footer  />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
};

const styles = StyleSheet.create({
  App: {
    position: 'relative',
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    background: '#fff'
  },
  AppBody: {
    width: '95%',
    margin: '0 auto',
    borderTop: '3px solid #DF354B',
    borderBottom: '3px solid #DF354B',
    minHeight: '50vh',
    padding: '40px 15px'
  },
  AppNotif: {
    position: 'absolute',
    right: '20px',
    // '@media(min-width: 900px)': {
    //   right: '20px',
    // }
  }
})

// App.defaultProps = {
//   isLoggedIn: false,
//   logOut: () => {
//     return
//   },
// };

// App.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   logOut: PropTypes.func,
// };

export default App;