import Row from "../../layout/Row";
import UserSearch from "./UserSearch";
import ResetBtn from "./menuList/ResetBtn";
import StatDropDownMenu from "./menuList/StatDropDownMenu";
import RaidDropDownMenu from "./menuList/RaidDropDownMenu";

const AbilityRankHeader = () => {
  return (
    <Row className="flex items-center justify-center gap-1">
      <UserSearch />
      <ResetBtn />
      <StatDropDownMenu />
      <RaidDropDownMenu />
    </Row>
  );
};

export default AbilityRankHeader;
