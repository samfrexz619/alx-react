import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';


const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} alt="logo" width={300} />
      <h1>School dashboard</h1>
    </div>
  );
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
