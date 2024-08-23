"use client";
import { useState } from "react";
import Row from "../../common/Row";

const values = [
  "이름",
  "직업",
  "길드",
  "레벨",
  "공격력",
  "방어력",
  "크리티컬",
  "밸런스",
  "공격속도",
  "추가피해",
  "공격력 제한 해제",
  "메뉴",
];

const AbilityFilterList = () => {
  const [filterValue, setFilterValue] = useState(values);
  return (
    <Row className="grid h-8 grid-cols-12 items-center rounded-lg bg-zinc-800 py-2">
      {filterValue.map((title) => (
        <div className="flex items-center justify-center" key={title}>
          {title}
        </div>
      ))}
    </Row>
  );
};

export default AbilityFilterList;
