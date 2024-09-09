import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg border-none bg-black text-white hover:text-blue-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
