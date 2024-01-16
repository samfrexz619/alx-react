import React from 'react';
import PropTypes from 'prop-types';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {

  const rowStyle = {
    backgroundColor: '#f5f5f5ab'
  }

  const headerStyle = {
    backgroundColor: '#deb5b545',
    width: '100%',
    textAlign: 'left',
  }

  return (
    <tr style={rowStyle}>
      {
        isHeader 
        ? (
          textSecondCell === null
          ? <th style={headerStyle} colSpan={2}>{textFirstCell}</th>
          : (
              <>
                <th style={headerStyle}>{ textFirstCell }</th>
                <th style={headerStyle}>{ textSecondCell }</th>
              </>
            )
          )
        : (
          <>
            <td> { textFirstCell } </td>
            <td> { textSecondCell } </td>
          </>
        )
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default CourseListRow;
