import React from 'react';
import CourseCard from '../components/CourseCard';
import type { Course } from '../types';

const Courses: React.FC = () => {
  const sampleCourses: Course[] = [
    { id: '1', title: 'Mathematics', description: 'Advanced Math Concepts' },
    { id: '2', title: 'Science', description: 'Physics, Chemistry, and Biology' }
  ];

  return (
    <div className="page courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        {sampleCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
