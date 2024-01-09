import React from 'react'
import Proptypes from 'prop-types'
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import './Notifications.css'


const Notifications = ({ displayDrawer }) => {

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
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem
              value={'New course available'}
              type={'default'}
            />
            <NotificationItem
              value={'New resume available'}
              type={'urgent'}
            />
            <NotificationItem
              type={'urgent'}
              html={getLatestNotification()}
            />
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
  displayDrawer: false
}

Notifications.proptypes = {
  displayDrawer: Proptypes.bool
}

export default Notifications;
