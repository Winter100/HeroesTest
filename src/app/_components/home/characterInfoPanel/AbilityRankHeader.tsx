import Row from "../../layout/Row";
import UserSearch from "./UserSearch";
import ResetBtn from "./menuList/ResetBtn";
import RaidDropDownMenu from "./menuList/RaidDropDownMenu";
import StatDropDownMenu from "./menuList/StatDropDownMenu";

const AbilityRankHeader = () => {
  return (
    <Row className="grid grid-cols-3">
      <Row className="h-full w-12" />
      <Row className="flex items-center justify-center gap-1">
        <UserSearch />
        <ResetBtn />
      </Row>
      <Row className="flex h-full justify-end gap-1">
        <RaidDropDownMenu />
        <StatDropDownMenu />
      </Row>
    </Row>
  );
};

export default AbilityRankHeader;
