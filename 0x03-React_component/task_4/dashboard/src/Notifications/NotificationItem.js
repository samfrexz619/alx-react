import React from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
       {
        this.props.type && this.props.value 
        && <li 
              onClick={() => this.props.markAsRead(this.props.id)}
              data-notification-type={this.props.type} 
              data-priority={this.props.type}
            >
                { this.props.value }
           </li>
       }
       {
        this.props.html 
        && <li 
              onClick={() => this.props.markAsRead(this.props.id)}
              dangerouslySetInnerHTML={{__html: this.props.html}} 
              data-priority={this.props.type} 
              />
       }
      </>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log('empty');
  },
  id: 0
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
}
export default NotificationItem;
