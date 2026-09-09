import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      {course.instructor && <p>Instructor: {course.instructor.name}</p>}
    </div>
  );
};

export default CourseCard;
