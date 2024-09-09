import { Stat } from "@/app/_type/characterType";

export const fillArrayToEight = (arr: {}[]): Stat[][] => {
  const result = [...arr];

  while (result.length < 8) {
    result.push([{}]);
  }

  return result.map((item) => (Array.isArray(item) ? item : [{}]));
};
