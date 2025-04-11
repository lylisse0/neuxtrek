
import React from 'react';
import ClassroomMain from './ClassroomMain';

const ClassroomContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <ClassroomMain />
      </div>
    </div>
  );
};

export default ClassroomContent;
