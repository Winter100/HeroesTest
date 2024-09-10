import Row from "../../layout/Row";
import RaidDropDownMenu from "./menuList/RaidDropDownMenu";
import ResetBtn from "./menuList/ResetBtn";
import StatDropDownMenu from "./menuList/StatDropDownMenu";

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
