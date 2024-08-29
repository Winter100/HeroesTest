import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/layout/Column";
import Row from "@/app/_components/layout/Row";
import UserSearch from "@/app/_components/character/UserSearch";
import AbilityTitleList from "@/app/_components/character/components/AbilityTitleList";
import AbilityList from "@/app/_components/character/components/AbilityList";

const CharacterInfoPanel = () => {
  return (
    <Section className="h-full w-full gap-1 text-xs text-gray-200">
      <Column className="flex h-full w-full gap-1">
        <Row className="flex items-center justify-center">
          <UserSearch />
        </Row>
        <AbilityTitleList />
        <AbilityList />
      </Column>
    </Section>
  );
};

export default CharacterInfoPanel;
