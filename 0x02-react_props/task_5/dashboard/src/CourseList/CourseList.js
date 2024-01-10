import React from 'react';
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import './CourseList.css'

const CourseList = ({listCourses}) => {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow 
          textFirstCell="Available courses" 
          isHeader={true} 
        />

        <CourseListRow 
          textFirstCell="Course name" 
          textSecondCell="Credit" 
          isHeader={true} 
        />
      </thead>
      <tbody>
        <CourseListRow 
          textFirstCell="ES6" 
          textSecondCell="60" 
          isHeader={false}  
        />
        <CourseListRow 
          textFirstCell="Webpack" 
          textSecondCell="20" 
          isHeader={false}  
        />
        <CourseListRow 
          textFirstCell="React" 
          textSecondCell="40" 
          isHeader={false}  
        />
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList;
