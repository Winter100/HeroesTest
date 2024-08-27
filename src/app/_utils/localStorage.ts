import { LOCALSTORAGE_KEY } from "../_components/_constant/localstorage";
import { MergedCharacter } from "../_type/type";

interface OcidData {
  name: string;
  ocid: string;
}

export const getLocalStorageItems = <T>(key: string): T | null => {
  const storageItem = localStorage.getItem(key);

  if (!storageItem) return null;

  try {
    return JSON.parse(storageItem) as T;
  } catch (e) {
    return null;
  }
};

export const setLocalStorageItems = <T extends { name: string }>(
  key: string,
  data: T,
) => {
  const storageItemList = getLocalStorageItems<T[]>(key);

  const updatedItemList = storageItemList ? [...storageItemList] : [];

  const index = updatedItemList.findIndex((item) => item.name === data.name);

  if (index !== -1) {
    updatedItemList[index] = data;
  } else {
    updatedItemList.push(data);
  }

  localStorage.setItem(key, JSON.stringify(updatedItemList));
};

/**
 * 주어진 이름으로 로컬스토리지에서 ocid를 찾습니다.
 *
 * @param name - 검색할 캐릭터의 이름
 * @returns 해당 이름을 가진 아이템이 존재하면 ocid를 반환하고, 그렇지 않으면 `null`을 반환합니다.
 *
 */
export const findOcidByName = (name: string) => {
  const ocidList = getLocalStorageItems<OcidData[]>(LOCALSTORAGE_KEY.ocidList);

  if (!ocidList) return null;

  const index = ocidList && ocidList.findIndex((item) => item.name === name);

  return index !== -1 ? ocidList[index].ocid : null;
};

/**
 *  캐릭터의 이름과 ocid를 객체로 묶어 로컬스토리지에 저장합니다.
 *
 * @param name - 추가할 캐릭터의 이름
 * @param ocidObj - ocidObj : {ocid : "캐릭터의 ocid...."}
 * @returns ocid
 */
export const setOcidListToLocalStorage = (
  name: string,
  ocidObj: { ocid: string },
) => {
  const ocid = ocidObj.ocid;

  setLocalStorageItems(LOCALSTORAGE_KEY.ocidList, { name, ocid });

  return ocid;
};

export const setCharacterInfoToLocalStorage = (userData: MergedCharacter) => {
  setLocalStorageItems(LOCALSTORAGE_KEY.characterInfoList, userData);

  return;
};
