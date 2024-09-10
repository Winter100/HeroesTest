import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import Row from "@/app/_components/layout/Row";
import UserSearch from "@/app/_components/home/characterInfoPanel/UserSearch";
import AbilityRankList from "@/app/_components/home/characterInfoPanel/AbilityRankList";
import ResetBtn from "@/app/_components/home/characterInfoPanel/Menu/ResetBtn";
import StatDropDownMenu from "@/app/_components/home/characterInfoPanel/Menu/StatDropDownMenu";

const CharacterInfoPanel = () => {
  return (
    <Section className="h-full w-full gap-1 text-xs text-gray-200">
      <Column className="flex h-full w-full gap-1">
        <Row className="flex items-center justify-center gap-1">
          <UserSearch />
          <ResetBtn />
          <StatDropDownMenu />
        </Row>
        <Column className="h-full">
          <AbilityRankList />
        </Column>
      </Column>
    </Section>
  );
};

export default CharacterInfoPanel;
