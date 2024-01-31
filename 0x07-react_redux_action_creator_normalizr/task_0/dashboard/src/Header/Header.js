import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';


class Header extends React.Component {
  static contextType = AppContext

  render() {
    const {user, logOut} = this.context
    // console.log(user)

    return (
      <>
        <header className={css(styles.AppHeader)}>
          <img src={logo} alt="logo" width={300} />
          <h1>School dashboard</h1>
        </header>
        { user?.isLoggedIn &&
          (<section id='logoutSection' style={{color: 'red'}}>
            <h2>
              Welcome <strong>{ user.email }</strong>
              <a onClick={logOut} href="#">
                <i>(logOut)</i>
              </a>
            </h2>
          </section>) 
        }
      </>
    );
  }
  
}

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    color: '#DF354B',
    alignItems: 'center',
    columnGap: '1rem',
  }
})

export default Header;
