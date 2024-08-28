import { statTranslations } from "../_constant/stats";

export type StatType = keyof typeof statTranslations;

// 추후 같은 기능이지만 다른 코드로 리팩토링하기
export const convertStatToKor = (stat: string) => {
  switch (stat) {
    case "ATK":
      return "공격력";
    case "DEF":
      return "방어력";
    case "STR":
      return "힘";
    case "DEX":
      return "민첩";
    case "INT":
      return "지능";
    case "WILL":
      return "의지";
    case "LUCK":
      return "행운";
    case "HP":
      return "최대 생명력";
    case "STAMINA":
      return "최대 스태미나";
    case "ATK_Speed":
      return "공격 속도";
    case "ATK_Absolute":
      return "추가피해";
    case "Critical":
      return "크리티컬";
    case "CritFactor":
      return "크리티컬 피해량";
    case "Res_Critical":
      return "크리티컬 저항";
    case "Balance":
      return "밸런스";
    case "ATK_LimitOver":
      return "공격력 제한 해제";
    case "Immunity":
      return "대항력";
    default:
      return stat;
  }
};
