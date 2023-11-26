import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import WorkResponse from '../components/WorkResponse';
import ActionButton from '../components/ActionButton';

const ProjectPage: React.FC = () => {
  // Example data to match the screenshot
  const projectData = {
    name: 'Tony J. Riley',
    email: 'tonyjriley@teleworm.us',
    phone: '405-472-4756',
    address: '4525 Sharon Lane',
    jobDescription: 'Add a living room',
    startDate: '07/23/2023',
    scopeOfProject: 'Construction of living room'
  };

  const workResponseData = {
    labor: 9000,
    materials: 5000,
    others: 2000,
    markup: 900,
    total: 17900
  };

  const handleActionClick = () => {
    // Implement action functionality here
  };

  return (
    <div className='container mx-auto p-8'>
      <ProjectDetails {...projectData} />
      <WorkResponse {...workResponseData} />
      <div className='flex space-x-4 my-4'>
        <ActionButton text='Edit Project Detail' onClick={handleActionClick} />
        <ActionButton text='Revise Proposal' onClick={handleActionClick} />
        <ActionButton text='Resend Proposal' onClick={handleActionClick} />
      </div>
    </div>
  );
};

export default ProjectPage;
