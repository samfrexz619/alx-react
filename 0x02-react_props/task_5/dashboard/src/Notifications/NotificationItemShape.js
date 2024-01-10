import PropTypes from 'prop-types'

const htmlShape = PropTypes.shape({
  __html: string
})

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.objectOf(htmlShape),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
})

export default NotificationItemShape;
