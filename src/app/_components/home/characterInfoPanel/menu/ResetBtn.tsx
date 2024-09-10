"use client";
import Button from "@/app/_components/common/Button";
import { useCharacterStore } from "@/app/_store/characterStore";

const ResetBtn = () => {
  const reset = useCharacterStore((state) => state.reset);
  return (
    <Button className="h-full w-12" onClick={reset}>
      리셋
    </Button>
  );
};

export default ResetBtn;
