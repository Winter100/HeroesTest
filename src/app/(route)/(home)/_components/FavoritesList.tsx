import React from "react";

import Section from "@/app/_components/layout/Section";
import AbilityTitleList from "@/app/_components/character/components/AbilityTitleList";
import AbilityList from "@/app/_components/character/components/AbilityList";

const FavoritesList = () => {
  return (
    <Section className="w-full flex-1 gap-1 border text-center text-xs text-gray-200">
      <AbilityTitleList />
      <AbilityList />
    </Section>
  );
};

export default FavoritesList;
