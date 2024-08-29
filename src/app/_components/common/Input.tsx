import React, { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`h-8 rounded-md border-2 p-1 text-sm shadow-sm outline-blue-300 ${className}`}
        {...props}
      />
    );
  },
);

export default Input;

Input.displayName = "Input";
