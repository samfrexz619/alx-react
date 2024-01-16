import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';


const CourseList = ({listCourses}) => {
  return (
    <table id='CourseList' className={css(styles.courseList)}>
      <div className={css(styles.table)}>
        <thead className={css(styles.courseList)}>
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
      </div>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    border: '1px solid lightgray',
    padding: '10px'
  },
  courseList: {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
  }
})

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList;
