import React from 'react';
import ConfirmationDialog from '../components/ConfirmationDialog';

const SendInvoicePage: React.FC = () => {
  const handleConfirm = () => {
    // Implement confirmation logic here
  };

  const handleCancel = () => {
    // Implement cancel logic here
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <ConfirmationDialog amount='$724.40' onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
};

export default SendInvoicePage;