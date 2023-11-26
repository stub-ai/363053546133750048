import React from 'react';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick, variant }) => {
  const baseStyles = 'font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline';
  const primaryStyles = 'bg-red-500 hover:bg-red-700 text-white ' + baseStyles;
  const secondaryStyles = 'bg-gray-200 hover:bg-gray-300 text-gray-700 ' + baseStyles;

  return (
    <button onClick={onClick} className={variant === 'primary' ? primaryStyles : secondaryStyles} type='button'>
      {text}
    </button>
  );
};

export default ActionButton;
