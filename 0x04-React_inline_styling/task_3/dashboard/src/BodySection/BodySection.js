import React from 'react';
import Proptypes from 'prop-types'
import { StyleSheet, css} from 'aphrodite'


class BodySection extends React.Component {

  render() {
    const { title, children } = this.props
    return(
      <div className='bodySection'>
        <h2 className={css(styles.title)}>{ title }</h2>
        { children }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: '6px'
  }
})

BodySection.propTypes = {
  title: Proptypes.string,
  children: Proptypes.oneOfType([Proptypes.string, Proptypes.element])
}
export default BodySection;
