import React from 'react'
import close from './close-icon.png'
import './Notifications.css'
import { getLatestNotification } from './utils';


const Notification = () => {

  const handleClose =()=> {
    console.log('Close button has been clicked')
  };

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li style={{color: 'red'}} dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
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

export default Notification;
