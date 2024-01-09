import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type, html, value}) => {
  return (
    <>
     {type && value && <li data-notification-type={type} data-priority={type}>{ value }</li>}
     {html && <li dangerouslySetInnerHTML={{__html: html}} data-priority={type}></li>}
    </>
  );
}

NotificationItem.defaultProps = {
  type: 'default'
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string
}
export default NotificationItem;
