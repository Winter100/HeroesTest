"use client";
import { ComponentProps } from "react";

interface CheckBoxProps extends ComponentProps<"input"> {}

const CheckBox = ({ checked = false }: CheckBoxProps) => {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex cursor-pointer items-center">
        <input
          readOnly
          checked={checked}
          type="checkbox"
          className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded bg-zinc-100 shadow transition-all hover:shadow-md"
        />
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
