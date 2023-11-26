import React from 'react';

interface ProjectDetailsProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  jobDescription: string;
  startDate: string;
  scopeOfProject: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ name, email, phone, address, jobDescription, startDate, scopeOfProject }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col'>
      <h2 className='text-xl font-semibold mb-4'>Project Details</h2>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Name / Co:</label>
          <div className='mt-1'>{name}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email:</label>
          <div className='mt-1'>{email}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Phone:</label>
          <div className='mt-1'>{phone}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Address:</label>
          <div className='mt-1'>{address}</div>
        </div>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Job Description:</label>
        <div className='mt-1'>{jobDescription}</div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Start Date:</label>
          <div className='mt-1'>{startDate}</div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Scope of Project:</label>
          <div className='mt-1'>{scopeOfProject}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
