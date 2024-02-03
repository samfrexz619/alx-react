import PropTypes from 'prop-types'

const htmlShape = PropTypes.shape({
  html: PropTypes.string
})

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  __html: PropTypes.objectOf(htmlShape),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
})

export default NotificationItemShape;
