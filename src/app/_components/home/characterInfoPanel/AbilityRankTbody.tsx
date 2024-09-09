"use client";

import { v4 as uuidv4 } from "uuid";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useRankStore } from "@/app/_store/useRankStore";
import { filterCharacters } from "./utils/filterCharacters";

const AbilityRankTbody = () => {
  const characters = useCharacterStore((state) => state.characters);
  const selectedTitleList = useRankStore((state) => state.rankTitleList);
  const filteredCharacters = filterCharacters(characters, selectedTitleList);

  return (
    <tbody className="grid h-full w-full grid-rows-8 rounded-lg bg-zinc-800">
      {filteredCharacters.map((c) => (
        <tr
          key={uuidv4()}
          className={`flex w-full grid-cols-9 items-center justify-center rounded-lg lg:grid ${c?.name?.length > 1 ? "border-b border-gray-400 hover:cursor-pointer hover:text-blue-300" : "border-none"} hover:bg-zinc-800`}
        >
          {c?.info.map((i) => (
            <td
              className="flex h-full flex-1 items-center justify-center"
              key={i?.stat_name + i?.stat_value}
            >
              {i?.stat_value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default AbilityRankTbody;
