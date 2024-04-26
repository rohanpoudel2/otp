import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const InputField = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref: React.Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full rounded-md border-gray-200 shadow-sm sm:text-sm ${className}`}
      {...props}
    />
  );
});

export default InputField;