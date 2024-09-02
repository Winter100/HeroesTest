import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { getOcid } from "../_utils/fetch/getOcid";
import { getBasic } from "../_utils/fetch/getBasic";
import { getStats } from "../_utils/fetch/getStats";
import { getGuild } from "../_utils/fetch/getGuild";

import { translateAndUnifyStats } from "../_utils/translateAndUnifyStats";
import { mergeCharacterData } from "../_utils/mergeCharacterData";
import { setWaitingRoomCharactersInfo } from "../_utils/localStorage";
import { useCharacterStore } from "../_store/characterStore";
import { mergeAtk } from "../_utils/mergeAtk";

export const useCharacter = () => {
  const [loading, setLoading] = useState(false);
  const { addCharacter, addSelectedCharacter } = useCharacterStore();

  const handleCharacterInfo = useCallback(
    async (characterName: string) => {
      setLoading(true);

      try {
        const ocid = await getOcid(characterName);
        const [basic, stat, guild] = await Promise.all([
          getBasic(ocid),
          getStats(ocid),
          getGuild(ocid),
        ]);

        const mergedAtkStats = mergeAtk(stat);

        const translatedStats = translateAndUnifyStats(mergedAtkStats);

        const mergedChrarcterData = mergeCharacterData(
          basic,
          translatedStats,
          guild,
        );
        setWaitingRoomCharactersInfo(mergedChrarcterData);
        addCharacter(mergedChrarcterData);
        addSelectedCharacter(mergedChrarcterData);
      } catch (e) {
        toast.error("생성된 캐릭터가 없습니다.");
        if (e instanceof Error) {
          console.error("e", e);
        } else {
          console.error("e", e);
        }
      } finally {
        setLoading(false);
      }
    },
    [addCharacter, addSelectedCharacter],
  );

  return { loading, handleCharacterInfo };
};
