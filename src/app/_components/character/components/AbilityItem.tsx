import { MergedCharacter } from "@/app/_type/type";
import Row from "../../common/Row";

interface AbilityItemProps {
  userData: MergedCharacter;
}

const selectedStats = [
  "공격력",
  "방어력",
  "크리티컬",
  "밸런스",
  "공격 속도",
  "추가피해",
  "공격력 제한 해제",
];

const AbilityItem = ({ userData: { basic, stat } }: AbilityItemProps) => {
  const sortedStats = selectedStats.map((id) =>
    stat.find((stat) => stat.stat_id === id),
  );

  return (
    <Row
      draggable
      className="grid h-full w-full cursor-pointer grid-cols-12 items-center hover:text-blue-300"
    >
      {Object.entries(basic).map(([key, value]) => (
        <div className="flex items-center justify-center" key={key}>
          {value}
        </div>
      ))}

      {sortedStats.map((stats) => (
        <div className="flex items-center justify-center" key={stats?.stat_id}>
          {stats?.stat_value}
        </div>
      ))}

      {/* <div className="flex items-center justify-center">추가하기</div> */}
    </Row>
  );
};

export default AbilityItem;
