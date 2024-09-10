import { Basic, Guild, MergedCharacter, Stat } from "@/app/_type/characterType";

export const mergeCharacterData = (
  basic: Basic,
  stat: Stat[],
  // guild: Guild = { guild_name: "" },
  name: string,
) => {
  const mergedCharacterData: MergedCharacter = {
    name: name,
    info: [
      {
        stat_name: "이름",
        stat_value: basic?.character_name,
      },
      {
        stat_name: "직업",
        stat_value: basic?.character_class_name,
      },
      {
        stat_name: "길드",
        stat_value: "",
      },
      {
        stat_name: "레벨",
        stat_value: "",
      },
      ...stat,
    ],
    stat: [...stat],
  };
  // const mergedCharacterData: MergedCharacter = {
  //   name: basic.character_name ?? "",
  //   basic: {
  //     name: basic.character_name ?? "",
  //     class: basic.character_class_name ?? "",
  //     guild: guild.guild_name ?? "",
  //     level: basic.character_level.toString() ?? "",
  //     cairde: basic.cairde_name ?? "",
  //   },
  //   stat: [...stat],
  // };
  return mergedCharacterData;
};
// import { Basic, Guild, MergedCharacter, Stat } from "@/app/_type/characterType";

// export const mergeCharacterData = (
//   // basic: Basic,
//   stat: Stat[],
//   // guild: Guild = { guild_name: "" },
//   name: string,
// ) => {
//   const mergedCharacterData: MergedCharacter = {
//     name: basic.character_name ?? name,
//     info: [
//       {
//         stat_name: "이름",
//         stat_value: basic?.character_name ?? "",
//       },
//       {
//         stat_name: "직업",
//         stat_value: basic?.character_class_name ?? "",
//       },
//       {
//         stat_name: "길드",
//         stat_value: guild?.guild_name ?? "",
//       },
//       {
//         stat_name: "레벨",
//         stat_value: basic?.character_level.toString() ?? "",
//       },
//       {
//         stat_name: "카르제",
//         stat_value: basic?.cairde_name ?? "",
//       },
//       ...stat,
//     ],
//     basic: [
//       {
//         stat_name: "이름",
//         stat_value: basic?.character_name ?? "",
//       },
//       {
//         stat_name: "직업",
//         stat_value: basic?.character_class_name ?? "",
//       },
//       {
//         stat_name: "길드",
//         stat_value: guild?.guild_name ?? "",
//       },
//       {
//         stat_name: "레벨",
//         stat_value: basic?.character_level.toString() ?? "",
//       },
//       {
//         stat_name: "카르제",
//         stat_value: basic?.cairde_name ?? "",
//       },
//     ],
//     stat: [...stat],
//   };
//   // const mergedCharacterData: MergedCharacter = {
//   //   name: basic.character_name ?? "",
//   //   basic: {
//   //     name: basic.character_name ?? "",
//   //     class: basic.character_class_name ?? "",
//   //     guild: guild.guild_name ?? "",
//   //     level: basic.character_level.toString() ?? "",
//   //     cairde: basic.cairde_name ?? "",
//   //   },
//   //   stat: [...stat],
//   // };
//   return mergedCharacterData;
// };
