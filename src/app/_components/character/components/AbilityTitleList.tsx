"use client";

import Row from "../../layout/Row";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useTitleStore } from "@/app/_store/titleStore";
import Dropdown from "../../common/Menu";

const AbilityTitleList = () => {
  const { titleList } = useTitleStore();
  const { beforeSortValue, sortCharacterList, ascending } = useCharacterStore();
  const textColor = ascending ? "text-red-300" : "text-blue-300";

  const list = titleList
    .slice(0, 11)
    .concat(new Array(11 - titleList.length).fill(null));

  return (
    <Row className="grid h-8 grid-cols-12 items-center rounded-lg bg-zinc-800 text-xs">
      {list.map((title, i) => (
        <div
          className={`flex h-full w-full items-center justify-center hover:cursor-pointer hover:text-blue-300 ${beforeSortValue === title ? textColor : ""}`}
          key={title + i}
          onClick={() => sortCharacterList(title)}
        >
          {title}
        </div>
      ))}

      <Dropdown />
    </Row>
  );
};

export default AbilityTitleList;
