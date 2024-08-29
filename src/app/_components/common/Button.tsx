import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-black text-white border-none rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
