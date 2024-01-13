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
        {
          listCourses.length > 0 
          ? listCourses.map(listCourse => (
            <CourseListRow 
              key={listCourse.id}
              textFirstCell={listCourse.name} 
              textSecondCell={listCourse.credit} 
              isHeader={false}  
            />
          ))
          : <CourseListRow textFirstCell="No course available yet" />
        }
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
