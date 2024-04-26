import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, children, className, ...rest } = props;
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col ${className}`}
      {...rest}
    >
      {children}
    </form>
  )
}

export default Form