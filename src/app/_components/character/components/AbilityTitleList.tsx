"use client";

import { useCharacterStore } from "@/app/_store/characterStore";
import { useTitleStore } from "@/app/_store/titleStore";
import Row from "../../common/Row";

const AbilityTitleList = () => {
  const { titleList } = useTitleStore();
  const { sortCharacterList } = useCharacterStore();
  return (
    <Row className="grid h-8 grid-cols-12 items-center rounded-lg bg-zinc-800 py-2">
      {titleList.map((title) => (
        <div
          className="flex items-center justify-center hover:cursor-pointer hover:text-blue-300"
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
