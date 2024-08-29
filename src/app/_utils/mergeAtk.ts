import { FetchStats } from "../_type/type";

/**
 *
 * @param stats
 * @returns ATK와 MATK중 더 높은 스텟을 ATK 값으로 합친 후 스텟 배열을 리턴합니다.
 */
export const mergeAtk = (stats: FetchStats) => {
  const copyStats = [...stats.stat];

  const atkValue = copyStats.find((stat) => stat.stat_id === "ATK")?.stat_value;
  const matkValue = copyStats.find(
    (stat) => stat.stat_id === "MATK",
  )?.stat_value;

  const maxAtk = Math.max(
    parseInt(atkValue || "0"),
    parseInt(matkValue || "0"),
  );

  const mergedAtkStats = copyStats
    .filter((stat) => stat.stat_id !== "MATK")
    .map((name) => {
      if (name.stat_id === "ATK") {
        return { stat_id: "ATK", stat_value: maxAtk?.toString() };
      } else {
        return { ...name };
      }
    });

  return mergedAtkStats;
};
