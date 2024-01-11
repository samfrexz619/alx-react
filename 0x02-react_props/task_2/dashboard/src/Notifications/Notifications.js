import React from 'react'
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import './Notifications.css'


const Notifications = () => {

  const handleClose =()=> {
    console.log('Close button has been clicked')
  };

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem 
          value={'New course available'}
          type={'urgent'}
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
        }}
        aria-label='Close'>
        <img src={close} alt="close-icon" width={17} />
      </button>
    </div>
  )
}

export default Notifications;
