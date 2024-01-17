import React, { Component } from 'react'
import Proptypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';
import close from '../assets/close-icon.png'
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';


class Notifications extends Component {
  constructor(props){
    super(props)

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
        nextProps.length > this.props.listNotifications.length 
        || nextProps.displayDrawer !== this.props.displayDrawer
      );
  }

  handleClose =()=> {
    console.log('Close button has been clicked');
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    return (
      <>
        <div className={css([styles.menuItem, !this.props.displayDrawer && styles.menuItemAnimation])}>
          <span 
            role='button'
            onClick={this.props.handleDisplayDrawer}
            className={css(styles.btn)}
          >
            Your Notifications
          </span>
        </div>
        { this.props.displayDrawer && 
          <div className={css(styles.Notifications)}>
            <h4 className={css(styles.space)}>
              {
                this.props.listNotifications.length > 0
                ? 'Here is the list of notifications'
                : 'No new notification for now'
              }
            </h4>
            <ul className={css(styles.default)}>
              {
                this.props.listNotifications.length > 0
                && this.props.listNotifications.map(({id, type, value, html}) => (
                  <NotificationItem
                    key={id}
                    value={value}
                    type={type}
                    html={html}
                    markAsRead={this.markAsRead}
                    id={id}
                  />
                ))
              }
            </ul>
            <button
              onClick={this.props.handleHideDrawer}
              style={{
                border: 'none',
                position: 'absolute',
                top: '1rem',
                right: '5px',
                cursor: 'pointer',
              }}
              aria-label='Close'>
              <img src={close} alt="close-icon" width={17} />
            </button>
          </div>
        }
      </>
    )
  }
};

const notifica8nFrame = {
  'from': {
    opacity: 0.5,
  },
  'to': {
      opacity: 1,
  },
};

const shake = {
  '0%': {
    transform: 'translate(1px, 1px) rotate(0deg)'
  },
  '10%': {
    transform: 'translate(-1px, -2px) rotate(-1deg)'
  },
  '20%': {
    transform: 'translate(-3px, 0px) rotate(1deg)'
  },
  '30%': {
    transform: 'translate(3px, 2px) rotate(0deg)'
  },
  '40%': {
    transform: 'translate(1px, -1px) rotate(1deg)'
  },
  '50%': {
    transform: 'translate(-1px, 2px) rotate(-1deg)'
  },
  '60%': {
    transform: 'translate(-3px, 1px) rotate(0deg)'
  },
  '70%': {
    transform: 'translate(3px, 1px) rotate(-1deg)'
  },
  '80%': {
    transform: 'translate(-1px, -1px) rotate(1deg)'
  },
  '90%': {
    transform: 'translate(1px, 2px) rotate(0deg)'
  },
  '100%': {
    transform: 'translate(1px, -2px) rotate(-1deg)'
  },
}

const styles = StyleSheet.create({
  menuItem: {
    width: '100%,',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 auto',
  },
  menuItemAnimation: {
    animation: 'shake 0.4s',
    animationName: [notifica8nFrame, shake],
    animationDuration: '3s, 1200ms',
    animationIterationCount: 'infinite',
  },
  default: {
    listStyle: 'none',
    padding:'0',
    '@media (min-width: 900px)': {
      listStyle: 'disc',
      padding: 0,
    }
  },
  Notifications: {
    width: '100%',
    position: 'fixed',
    height: '100vh',
    fontSize: '20px',
    background: '#fff',
    border: 'none',
    top: '20px',
    left: '0',
    background: '#fff8f8',
    '@media (min-width: 900px)': {
      padding: '10px 20px',
      height: '130px',
      border: '1px dashed #DF354B',
      width: '400px',
      // background: 'none',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      top: '0',
      fontSize: '15px'
    }
  },
  space: {
    padding: '0',
  },
  btn: {
    cursor: 'pointer',
  }
})

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

Notifications.proptypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: Proptypes.func,
  handleHideDrawer: Proptypes.func
}

export default Notifications;
