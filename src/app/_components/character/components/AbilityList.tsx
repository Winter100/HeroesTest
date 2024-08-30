"use client";

import Row from "../../layout/Row";
import AbilityItem from "./AbilityItem";
import { useCharacterStore } from "@/app/_store/characterStore";

const AbilityList = () => {
  const { characters, addSelectedCharacter, selectedCharacter } =
    useCharacterStore();

  return (
    <Row className="h-full rounded-lg bg-zinc-800 py-2">
      <ul className="grid w-full grid-rows-8 gap-[3px]">
        {characters.map((info) => (
          <li
            key={info?.basic?.name}
            onClick={() => addSelectedCharacter(info)}
            className={`flex h-full w-full items-center justify-center rounded-lg bg-zinc-900 ${selectedCharacter?.basic?.name === info?.basic?.name ? "border border-blue-300 text-blue-300" : ""}`}
          >
            <AbilityItem userData={info} />
          </li>
        ))}
      </ul>
    </Row>
  );
};

export default AbilityList;
