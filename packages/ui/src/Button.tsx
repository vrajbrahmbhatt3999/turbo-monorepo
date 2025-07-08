import React from 'react';
 
type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({ title, type = 'button', onClick }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" type={type} onClick={onClick}>
      {title}
    </button>
  );
};  
 
export default Button;