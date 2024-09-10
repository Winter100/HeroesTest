"use client";
import { CiTrash } from "react-icons/ci";

import Button from "@/app/_components/common/Button";
import { useCharacterStore } from "@/app/_store/characterStore";

const ResetBtn = () => {
  const reset = useCharacterStore((state) => state.reset);
  return (
    <Button
      className="flex h-full w-12 items-center justify-center"
      onClick={reset}
    >
      <CiTrash className="text-xl" />
    </Button>
  );
};

export default ResetBtn;
