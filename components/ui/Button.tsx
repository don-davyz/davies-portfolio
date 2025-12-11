import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-6 py-3 font-bold text-lg border-2 border-black transition-all duration-200 brutal-shadow";
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800",
    outline: "bg-white text-black hover:bg-neutral-50"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};