import React from 'react';

interface WorkResponseProps {
  labor: number;
  materials: number;
  others: number;
  markup: number;
  total: number;
}

const WorkResponse: React.FC<WorkResponseProps> = ({ labor, materials, others, markup, total }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col'>
      <h2 className='text-xl font-semibold mb-4'>Work Response</h2>
      <div className='mb-4'>
        <div className='flex justify-between items-center'>
          <span className='text-sm font-medium text-gray-700'>Labor</span>
          <span className='font-semibold'>${labor.toFixed(2)}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-sm font-medium text-gray-700'>Materials</span>
          <span className='font-semibold'>${materials.toFixed(2)}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-sm font-medium text-gray-700'>Others</span>
          <span className='font-semibold'>${others.toFixed(2)}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-sm font-medium text-gray-700'>Markup</span>
          <span className='font-semibold'>${markup.toFixed(2)}</span>
        </div>
      </div>
      <div className='flex justify-between items-center border-t pt-4'>
        <span className='text-lg font-semibold'>Total</span>
        <span className='text-xl font-bold'>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default WorkResponse;
