import Row from "../../layout/Row";
import RaidDropDownMenu from "./menu/RaidDropDownMenu";
import ResetBtn from "./menu/ResetBtn";
import StatDropDownMenu from "./menu/StatDropDownMenu";
import UserSearch from "./UserSearch";

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
