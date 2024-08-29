import { MergedCharacter } from "./../_type/type";

export const sortCharacters = (
  sortTitle: string,
  arr: MergedCharacter[],
  ascending: boolean = false,
) => {
  const characters = [...arr];

  const basic = ["이름", "직업", "길드", "레벨"];

  const sortedData = characters.sort((a, b) => {
    if (!basic.includes(sortTitle)) {
      const statA = a.stat.find((stat) =>
        stat.stat_id.replace(/\s/g, "").includes(sortTitle),
      );
      const statB = b.stat.find((stat) =>
        stat.stat_id.replace(/\s/g, "").includes(sortTitle),
      );

      const valueA = statA ? statA.stat_value : "0";
      const valueB = statB ? statB.stat_value : "0";

      const numA = parseFloat(valueA);
      const numB = parseFloat(valueB);

      return ascending ? numA - numB : numB - numA;
    } else if (sortTitle === "이름") {
      const statA = a.basic.name;
      const statB = b.basic.name;

      if (statA < statB) return ascending ? -1 : 1;
      if (statA > statB) return ascending ? 1 : -1;
      return 0;
    } else if (sortTitle === "직업") {
      const statA = a.basic.class;
      const statB = b.basic.class;

      if (statA < statB) return ascending ? -1 : 1;
      if (statA > statB) return ascending ? 1 : -1;
      return 0;
    } else if (sortTitle === "길드") {
      const statA = a.basic.guild;
      const statB = b.basic.guild;

      if (statA < statB) return ascending ? -1 : 1;
      if (statA > statB) return ascending ? 1 : -1;
      return 0;
    } else if (sortTitle === "레벨") {
      const statA = Number(a.basic.level);
      const statB = Number(b.basic.level);

      if (statA < statB) return ascending ? -1 : 1;
      if (statA > statB) return ascending ? 1 : -1;
      return 0;
    } else return 0;
  });

  return sortedData;
};
