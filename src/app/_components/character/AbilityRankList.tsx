import dynamic from "next/dynamic";
import AbilityRankThead from "./components/AbilityRankThead";

const NoSSRAbilityRankTbody = dynamic(
  () => import("./components/AbilityRankTbody"),
  { ssr: false },
);

const AbilityRankList = () => {
  return (
    <table className="flex h-full w-full table-auto flex-col gap-1">
      <caption className="hidden">캐릭터 리스트</caption>
      <thead className="flex h-9 w-full items-center justify-center rounded-lg bg-zinc-800">
        <AbilityRankThead />
      </thead>
      <tbody className="flex h-full w-full flex-1 flex-col rounded-lg bg-zinc-800">
        <NoSSRAbilityRankTbody />
      </tbody>
    </table>
  );
};

export default AbilityRankList;
