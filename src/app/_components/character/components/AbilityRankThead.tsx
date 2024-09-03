"use client";
import { useCharacterStore } from "@/app/_store/characterStore";
import { useRankStore } from "@/app/_store/useRankStore";

const AbilityRankThead = () => {
  const titleList = useRankStore((state) => state.titleList);
  const beforeSortValue = useCharacterStore((state) => state.beforeSortValue);
  const ascending = useCharacterStore((state) => state.ascending);
  const sortCharacterList = useCharacterStore(
    (state) => state.sortCharacterList,
  );

  const textColor = ascending ? "text-red-300" : "text-blue-300";

  return (
    <>
      <tr className="flex h-full w-full">
        {titleList.map((t) => (
          <th
            className={`flex h-full w-full items-center justify-center hover:cursor-pointer hover:text-blue-300 ${beforeSortValue === t ? textColor : ""}`}
            key={t}
            onClick={() => sortCharacterList(t)}
          >
            {t}
          </th>
        ))}
      </tr>
    </>
  );
};

export default AbilityRankThead;
