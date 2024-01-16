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
            <h4>
              {
                this.props.listNotifications.length > 0
                ? 'Here is the list of notifications'
                : 'No new notification for now'
              }
            </h4>
            <ul>
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
    padding: '15px 3px',
    margin: '0 auto',
  },
  Notifications: {
    width: '400px',
    padding: '10px 20px',
    border: '1px dashed #DF354B',
    position: 'relative',
    height: '130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  space: {
    paddingLeft: '35px'
  }
})

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

Notifications.proptypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape)
}

export default Notifications;
