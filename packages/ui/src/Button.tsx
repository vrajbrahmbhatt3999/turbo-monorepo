import React from 'react';
 
type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
};
 
export const Button = ({ title, type = 'button' }: ButtonProps) => {
  return (
    <button className="bg-primary text-white px-4 py-2 rounded text-secondary" type={type}>
      {title}
    </button>
  );
};  
 
export default Button;