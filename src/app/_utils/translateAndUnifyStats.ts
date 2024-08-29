import { convertStatToKor } from "./convertStatToKor";
import { statsKeyWord } from "./../_constant/stats";
import { CharacterStat } from "../_type/type";

export const translateAndUnifyStats = (stats: CharacterStat[]) => {
  const keys = Object.keys(statsKeyWord);

  const result = keys.map((key) => {
    const stat = stats.find((stat) => stat.stat_id === key);
    const convertKey = convertStatToKor(key);
    return stat
      ? { stat_id: convertKey, stat_value: stat.stat_value }
      : { stat_id: convertKey, stat_value: "0" };
  });

  return result;
};
