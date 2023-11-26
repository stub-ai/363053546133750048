import React from 'react';

interface TaxReportFormProps {
  fromDate: string;
  toDate: string;
  onExport: () => void;
}

const TaxReportForm: React.FC<TaxReportFormProps> = ({ fromDate, toDate, onExport }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
      <button className='mb-4 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
        <span>EXPORT TAX REPORT</span>
      </button>
      <div className='flex space-x-4'>
        <input type='text' value={fromDate} className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='From' />
        <input type='text' value={toDate} className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='To' />
      </div>
      <button onClick={onExport} className='mt-4 bg-black text-white font-semibold py-2 px-4 rounded-lg'>
        <span>Export</span>
      </button>
    </div>
  );
};

export default TaxReportForm;
