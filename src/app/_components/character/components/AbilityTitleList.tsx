"use client";

import Row from "../../layout/Row";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useTitleStore } from "@/app/_store/titleStore";

const AbilityTitleList = () => {
  const { titleList } = useTitleStore();
  const { beforeSortValue, sortCharacterList, ascending } = useCharacterStore();
  const textColor = ascending ? "text-red-300" : "text-blue-300";

  return (
    <Row className="grid h-8 grid-cols-12 items-center rounded-lg bg-zinc-800 py-2">
      {titleList.map((title) => (
        <div
          className={`flex items-center justify-center hover:cursor-pointer hover:text-blue-300 ${beforeSortValue === title ? textColor : ""}`}
          key={title}
          onClick={() => sortCharacterList(title)}
        >
          {title}
        </div>
      ))}
    </Row>
  );
};

export default AbilityTitleList;
