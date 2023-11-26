import React from 'react';

interface ProjectDetailsProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  jobDescription: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ name, email, phone, address, jobDescription }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col mb-6'>
      <h2 className='text-2xl font-semibold mb-4'>Project Detail</h2>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Name / Co:</label>
          <div className='mt-1 font-semibold'>{name}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email:</label>
          <div className='mt-1 font-semibold'>{email}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Phone:</label>
          <div className='mt-1 font-semibold'>{phone}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Address:</label>
          <div className='mt-1 font-semibold'>{address}</div>
        </div>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Job Description:</label>
        <div className='mt-1 font-semibold'>{jobDescription}</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
