import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`inline-block rounded border border-sky-600 bg-sky-600 w-[5rem] py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
