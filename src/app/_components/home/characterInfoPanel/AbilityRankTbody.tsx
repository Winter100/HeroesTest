"use client";

import { v4 as uuidv4 } from "uuid";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useRankStore } from "@/app/_store/useRankStore";
import { filterCharacters } from "./utils/filterCharacters";
import { fillArrayToEight } from "./utils/fillArrayToEight";

const AbilityRankTbody = () => {
  const characters = useCharacterStore((state) => state.characters);
  const selectedTitleList = useRankStore((state) => state.rankTitleList);
  const filteredCharacters = filterCharacters(characters, selectedTitleList);

  const fillArray = fillArrayToEight(filteredCharacters);
  return (
    <tbody className="flex h-full w-full flex-1 flex-col rounded-lg bg-zinc-800">
      {fillArray?.map((c) => (
        <tr
          key={uuidv4()}
          className={`flex w-full flex-1 items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-800 hover:text-blue-300`}
        >
          {c?.map((item) => (
            <td
              className="flex h-full flex-1 items-center justify-center"
              key={item?.stat_name + item?.stat_value}
            >
              {item?.stat_value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default AbilityRankTbody;
