"use client";

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useCharacterStore } from "@/app/_store/characterStore";
import { useRankStore } from "@/app/_store/rankStore";
import { filterCharacters } from "./utils/filterCharacters";
import { useDrag } from "@/app/_hooks/useDrag/useDrag";
import { getLocalStorageItems } from "@/app/_utils/localStorage";
import { LOCALSTORAGE_KEY } from "@/app/_constant/localstorage";
import { MergedCharacter } from "@/app/_type/characterType";
import { useRaidStore } from "@/app/_store/raidStore";
import LimitStat from "./stat/LimitStat";

const AbilityRankTbody = () => {
  const characters = useCharacterStore((state) => state.characters);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter,
  );
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);
  const setDropCharacterList = useCharacterStore(
    (state) => state.setDropCharacterList,
  );

  const selectedTitleList = useRankStore((state) => state.rankTitleList);

  const filteredCharacters = filterCharacters(characters, selectedTitleList);

  const setSeletRankTitle = useRankStore((state) => state.setSeletRankTitle);

  const { dragEnd, dragEnter, dragOver, dragStart } = useDrag(
    setDropCharacterList,
    () => setSeletRankTitle(null),
  );

  const selectedBoss = useRaidStore((state) => state.selectedBoss);

  useEffect(() => {
    const waitingList =
      getLocalStorageItems<MergedCharacter[]>(LOCALSTORAGE_KEY.waiting) ?? [];
    waitingList.slice(0, 8).map((c) => addCharacter(c));
  }, [addCharacter]);

  return (
    <tbody className="grid h-full w-full grid-rows-8 rounded-lg bg-zinc-800 hover:cursor-pointer">
      {filteredCharacters.map((c, i) => (
        <tr
          key={uuidv4()}
          onClick={() => {
            const name = c?.info?.find((s) => s?.stat_name === "이름");
            selectedHandler(name?.stat_value ?? "");
          }}
          draggable
          onDragStart={(e) => dragStart(e, i)}
          onDragEnd={dragEnd}
          onDragOver={dragOver}
          onDragEnter={() => dragEnter(i)}
          className={`flex ${c?.info ? "border-b" : ""} ${selectedCharacter?.name === c?.info?.find((s) => s.stat_name === "이름")?.stat_value ? "text-blue-300" : ""} w-full items-center justify-center rounded-lg hover:bg-zinc-600`}
        >
          {c?.info?.map((i) => (
            <td
              className="flex h-full flex-1 items-center justify-center"
              key={i?.stat_name + i?.stat_value}
            >
              <div className="flex flex-col items-center justify-center">
                <span>{i?.stat_value}</span>
                {selectedBoss && (
                  <LimitStat
                    characterName={
                      c?.info?.find((a) => a?.stat_name === "이름")
                        ?.stat_value ?? ""
                    }
                    selectedBoss={selectedBoss}
                    {...i}
                  />
                )}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default AbilityRankTbody;
