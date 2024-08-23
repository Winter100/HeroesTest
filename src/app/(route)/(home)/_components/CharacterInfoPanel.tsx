import AbilityList from "@/app/_components/character/components/AbilityList";
import AbilityFilterList from "@/app/_components/character/components/AbilityFilterList";
import Section from "@/app/_components/layout/Section";
import Column from "@/app/_components/common/Column";

const CharacterInfoPanel = () => {
  return (
    <Section className="h-full w-full gap-1 text-xs text-gray-200">
      <Column className="flex h-full w-full gap-1">
        <AbilityFilterList />
        <AbilityList />
      </Column>
    </Section>
  );
};

export default CharacterInfoPanel;
