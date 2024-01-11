import React from 'react'
import Proptypes from 'prop-types'
import close from '../assets/close-icon.png'
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
import './Notifications.css'


const Notifications = ({ displayDrawer, listNotifications }) => {

  const handleClose =()=> {
    console.log('Close button has been clicked')
  };

  return (
    <>
      <div className="menuItem">
        <p>Your Notifiations</p>
      </div>
      { displayDrawer && 
        <div className='Notifications'>
          <h4>
            {
              listNotifications.length > 0
              ? 'Here is the list of notifications'
              : 'No new notification for now'
            }
          </h4>
          <ul>
            {
              listNotifications.length > 0
              && listNotifications.map(({id, type, value, html}) => (
                <NotificationItem
                  key={id}
                  value={value}
                  type={type}
                  html={html}
                />
              ))
            }
          </ul>
          <button
            onClick={handleClose}
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

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notifications.proptypes = {
  displayDrawer: Proptypes.bool,
  listNotifications: Proptypes.arrayOf(NotificationItemShape)
}

export default Notifications;
