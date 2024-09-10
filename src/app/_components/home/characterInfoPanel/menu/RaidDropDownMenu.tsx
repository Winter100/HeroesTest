"use client";
import { useState } from "react";
import Button from "@/app/_components/common/Button";
import BottomArrow from "@/app/_components/common/BottomArrow";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick/useOutsideClick";
import { raidList } from "@/app/_constant/raidList";
import { useRaidStore } from "@/app/_store/raidStore";

const RaidDropDownMenu = () => {
  const [view, setView] = useState(false);
  const [activeRaid, setActiveRaid] = useState<string | null>(null);

  const setSelectBoss = useRaidStore((state) => state.setSelectBoss);
  // const raidName = useRaidStore((state) => state.raidName);
  // const setRaidName = useRaidStore((state) => state.setRaidName);
  const selectedBoss = useRaidStore((state) => state.selectedBoss);
  const resetRaid = useRaidStore((state) => state.resetRaid);

  const dropdownRef = useOutsideClick(() => {
    setView(false);
    // setActiveRaid(null); // 메뉴 닫힐 때 서브 메뉴도 닫기
  });

  const raidOnclick = (raidName: string) => {
    if (activeRaid === raidName) {
      setView(false);
      setActiveRaid(null);
      resetRaid();
      return;
    }
    setActiveRaid(raidName);
    // setActiveRaid((prev) => (prev === raidName ? null : raidName));
  };

  return (
    <div className="inline-block h-full w-32" ref={dropdownRef}>
      <Button
        onClick={() => setView((pre) => !pre)}
        className="flex h-full w-full items-center justify-center"
      >
        <span>{selectedBoss?.name || "상한 확인"}</span>
        <BottomArrow />
      </Button>
      <div
        className={`absolute z-10 mt-1 flex w-32 flex-col rounded-lg bg-black transition-all duration-300 ease-in-out ${
          view
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[10px] opacity-0"
        } `}
      >
        <div className="flex h-full w-full flex-col">
          {raidList.map((r) => (
            <div key={r.raid_name} className="relative">
              <button
                onClick={() => raidOnclick(r.raid_name)}
                className={`h-8 w-full ${activeRaid === r.raid_name ? "text-blue-300" : ""} hover:bg-zinc-700`}
              >
                {r.raid_name}
              </button>
              {/* 하위 메뉴: 몬스터 이름 렌더링 */}
              {activeRaid === r.raid_name && (
                <div className="absolute left-32 top-0 z-20 w-28 bg-black">
                  {r.monsters.map((monster) => (
                    <button
                      onClick={() => setSelectBoss(r?.raid_name, monster?.name)}
                      key={monster.name}
                      className={`${selectedBoss?.name === monster?.name ? "text-blue-300" : "text-white"} h-8 w-full hover:bg-zinc-700`}
                    >
                      {monster.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RaidDropDownMenu;
