import React from 'react';

const NotificationItem = ({type, html, value}) => {
  return (
    <>
     {type && value && <li data-notification-type={type} data-priority={type}>{ value }</li>}
     {html && <li dangerouslySetInnerHTML={{__html: html}} data-priority={type}></li>}
    </>
  );
}

export default NotificationItem;
