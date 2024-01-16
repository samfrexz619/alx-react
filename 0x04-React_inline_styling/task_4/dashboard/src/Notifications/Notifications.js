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
    return nextProps.length > this.props.listNotifications.length;
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
        <div className={css(styles.menuItem)}>
          <p>Your Notifiations</p>
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
              onClick={this.handleClose}
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

const styles = StyleSheet.create({
  menuItem: {
    width: '100%,',
    display: 'flex',
    justifyContent: 'flex-end',
    // padding: '15px 3px',
    margin: '0 auto',
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
    // padding: '10px 8px',
    left: '0',
    '@media (min-width: 900px)': {
      padding: '10px 20px',
      height: '130px',
      border: '1px dashed #DF354B',
      width: '400px',
      background: 'none',
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
  }
})

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notifications.proptypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape)
}

export default Notifications;
