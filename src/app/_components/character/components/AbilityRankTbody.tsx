"use client";

import { v4 as uuidv4 } from "uuid";
import { dummyCharacter } from "@/app/_constant/dummyCharacter";
import { useCharacterStore } from "@/app/_store/characterStore";
import { MergedCharacter } from "@/app/_type/type";

const selectedStats = [
  "공격력",
  "방어력",
  "크리티컬",
  "밸런스",
  "공격 속도",
  "추가피해",
  "공격력 제한 해제",
];

const AbilityRankTbody = () => {
  const characters = useCharacterStore((state) => {
    const chars = state.characters;
    const filedCharas = [...chars];
    while (filedCharas.length < 8) {
      filedCharas.push(dummyCharacter);
    }
    return filedCharas;
  });

  const addSelectedCharacter = useCharacterStore(
    (state) => state.addSelectedCharacter,
  );
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter,
  );

  const addSelect = (c: MergedCharacter) => {
    if (selectedCharacter.name === c.name || !c.name) return;
    addSelectedCharacter(c);
  };

  return (
    <>
      {characters.map((c) => (
        <tr
          className={`flex w-full flex-1 items-center justify-center rounded-lg hover:cursor-pointer hover:bg-zinc-800 hover:text-blue-300 ${selectedCharacter?.basic?.name === c?.basic?.name ? "bg-zinc-800 text-blue-300" : "bg-zinc-900"}`}
          key={uuidv4()}
          onClick={() => addSelect(c)}
        >
          {Object?.entries(c?.basic).map(([_, value], i) => (
            <td
              className="flex flex-1 items-center justify-center"
              key={value + i}
            >
              {value}
            </td>
          ))}
          {selectedStats
            .map((id) => c?.stat.find((item) => item?.stat_id === id))
            .map((stat, i) => (
              <td
                className="flex flex-1 items-center justify-center"
                key={stat?.stat_id}
              >
                {stat?.stat_value}
              </td>
            ))}
        </tr>
      ))}
    </>
  );
};

export default AbilityRankTbody;
