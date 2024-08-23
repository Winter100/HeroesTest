// 더미 데이터 받기 영웅들 스텟...

import Row from "../../common/Row";
import { CHARACTER_INFO } from "../../DUMMY/dummy";
import AbilityItem from "./AbilityItem";

const DATAS = [...CHARACTER_INFO];

const AbilityList = () => {
  return (
    <Row className="h-full rounded-lg bg-zinc-800 py-2">
      <ul className="grid w-full grid-rows-8 gap-[2px]">
        {DATAS.map((stats, index) => (
          <li
            key={index}
            className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-900"
          >
            <AbilityItem info={stats} />
          </li>
        ))}
      </ul>
    </Row>
  );
};

export default AbilityList;
