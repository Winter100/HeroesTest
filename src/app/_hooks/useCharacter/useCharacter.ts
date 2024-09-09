import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { mergeAtk } from "./utils/mergeAtk";
import { translateAndUnifyStats } from "./utils/translateAndUnifyStats";
import { mergeCharacterData } from "./utils/mergeCharacterData";
import { useCharacterStore } from "@/app/_store/characterStore";
import { getOcid } from "@/app/_services/getOcid";
import { getBasic } from "@/app/_services/getBasic";
import { getStats } from "@/app/_services/getStats";
import { getGuild } from "@/app/_services/getGuild";
import { setWaitingRoomCharactersInfo } from "@/app/_utils/localStorage";

export const useCharacter = () => {
  const [loading, setLoading] = useState(false);
  const addCharacter = useCharacterStore((state) => state.addCharacter);
  const selectedHandler = useCharacterStore((state) => state.selectedHandler);

  const handleCharacterInfo = useCallback(
    async (characterName: string) => {
      setLoading(true);

      try {
        const ocid = await getOcid(characterName);
        const [basic, stat] = await Promise.all([
          getBasic(ocid),
          getStats(ocid),
          // getGuild(ocid),
        ]);

        const mergedAtkStats = mergeAtk(stat);
        const translatedStats = translateAndUnifyStats(mergedAtkStats);
        const mergedChrarcterData = mergeCharacterData(
          basic,
          translatedStats,
          characterName,
          // guild,
        );

        setWaitingRoomCharactersInfo(mergedChrarcterData);
        addCharacter(mergedChrarcterData);
        selectedHandler(characterName);
      } catch (e) {
        toast.error("생성된 캐릭터가 없습니다.");
        if (e instanceof Error) {
          console.error("e 확인중", e);
        } else {
          console.error("e", e);
        }
      } finally {
        setLoading(false);
      }
    },
    [addCharacter, selectedHandler],
  );

  return { loading, handleCharacterInfo };
};
