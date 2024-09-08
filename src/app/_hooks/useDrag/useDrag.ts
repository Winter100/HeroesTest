import { useRef } from "react";

export const useDrag = (setDropItem: (start: number, end: number) => void) => {
  const dragStartItem = useRef<number | null>(null);
  const dragEndItem = useRef<number | null>(null);

  const dragStart = (e: React.DragEvent, i: number) => {
    dragStartItem.current = i;
    e.dataTransfer.effectAllowed = "move";
  };

  const dragEnter = (e: React.DragEvent, i: number) => {
    dragEndItem.current = i;
  };

  const dragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const dragEnd = (e: React.DragEvent) => {
    if (dragStartItem.current !== null && dragEndItem.current !== null) {
      if (dragStartItem.current === dragEndItem.current) return;
      setDropItem(dragStartItem.current, dragEndItem.current);
    }
  };

  return {
    dragOver,
    dragStart,
    dragEnter,
    dragEnd,
  };
};
