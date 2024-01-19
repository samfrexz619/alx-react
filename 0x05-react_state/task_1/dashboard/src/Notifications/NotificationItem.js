import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'


class NotificationItem extends React.PureComponent {
  constructor(props){
    super(props)
  }

  className = css(
    [this.props.type === 'default' ? styles.default : styles.urgent], styles.border
  )

  render() {
    return (
      <>
       {
        this.props.type && this.props.value 
        && <li 
              onClick={() => this.props.markAsRead(this.props.id)}
              data-notification-type={this.props.type} 
              data-priority={this.props.type}
              className={this.className}
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
              className={this.className}
              />
       }
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  },
  border: {
    borderBottom: '1px solid #000',
    padding: '5px 10px',
    '@media(min-width: 900px)': {
      borderBottom: 'none'
    }
  }
})

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
