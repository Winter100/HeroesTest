import {
  CharacterBasic,
  CharacterStat,
  Guild,
  MergedCharacter,
} from "../_type/type";

export const mergeCharacterData = (
  basic: CharacterBasic,
  stat: CharacterStat[],
  guild: Guild,
) => {
  const mergedCharacterData: MergedCharacter = {
    name: basic.character_name ?? "",
    basic: {
      name: basic.character_name ?? "",
      class: basic.character_class_name ?? "",
      guild: guild.guild_name ?? "",
      level: basic.character_level.toString() ?? "",
    },
    stat: [...stat],
  };

  return mergedCharacterData;
};
