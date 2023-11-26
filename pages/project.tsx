import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import WorkResponse from '../components/WorkResponse';
import ActionButton from '../components/ActionButton';

const ProjectPage: React.FC = () => {
  const projectData = {
    name: 'Duro Roses',
    email: 'duro@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, AT 12345',
    jobDescription: 'The scope of the project includes white residence which will involve both interior and exterior surfaces. The objectives is to revitalize and enhance the aesthetic appeal of your property, while also ensuring durability and longevity of the paintwork.'
  };

  const workResponseData = {
    title: 'Change Order 1',
    labor: 2800,
    materials: 1500,
    others: 500,
    markup: 1000,
    total: 5800,
    totalMarkupPercentage: 20
  };

  const handleActionClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className='container mx-auto p-8'>
      <ProjectDetails {...projectData} />
      <WorkResponse {...workResponseData} />
      <div className='flex space-x-4 my-4'>
        <ActionButton text='Cancel Project' onClick={() => handleActionClick('Cancel Project')} variant='secondary' />
        <ActionButton text='Send Invoice' onClick={() => handleActionClick('Send Invoice')} variant='secondary' />
        <ActionButton text='Edit Change Order' onClick={() => handleActionClick('Edit Change Order')} variant='secondary' />
        <ActionButton text='Mark As Finished' onClick={() => handleActionClick('Mark As Finished')} variant='primary' />
      </div>
    </div>
  );
};

export default ProjectPage;
