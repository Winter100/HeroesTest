"use client";

import { ComponentProps } from "react";
import { useCharacterStore } from "@/app/_store/characterStore";
import AbilityItem from "../../common/AbilityItem";
import { convertStatToKor } from "@/app/_utils/convertStatToKor";

interface StatusBoxProps extends ComponentProps<"div"> {}

const StatusBox = ({
  className = "",

  ...props
}: StatusBoxProps) => {
  const { selectedCharacter } = useCharacterStore();

  return (
    <div className={`flex-1 ${className}`} {...props}>
      <div className="grid grid-cols-2 gap-4">
        {selectedCharacter?.stat &&
          selectedCharacter?.stat?.map((item) => (
            <AbilityItem
              className="m-auto w-11/12"
              key={item.stat_id}
              pStyle="flex min-w-24 w-full"
              abilityLabel={convertStatToKor(item.stat_id)}
              abilityValue={item.stat_value}
            />
          ))}
      </div>
    </div>
  );
};

export default StatusBox;
