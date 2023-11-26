import React from 'react';

interface ConfirmationDialogProps {
  amount: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ amount, onConfirm, onCancel }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4'>
      <h2 className='text-lg font-semibold'>SEND PARTIAL INVOICE</h2>
      <p>Are you sure you want an invoice for <span className='font-bold'>{amount}</span>?</p>
      <div className='flex space-x-4'>
        <button onClick={onCancel} className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg'>
          <span>No</span>
        </button>
        <button onClick={onConfirm} className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg'>
          <span>Yes</span>
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;