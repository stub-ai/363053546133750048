import React from 'react';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
      {text}
    </button>
  );
};

export default ActionButton;
