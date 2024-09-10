// "use client";

// import { ComponentProps } from "react";

// import { useCharacterStore } from "@/app/_store/characterStore";
// import AbilityItem from "../../common/AbilityItem";
// import { convertAttributeName } from "@/app/_utils/convertAttributeName";

// interface CharacterInfoBoxProps extends ComponentProps<"div"> {}

// const CharacterInfoBox = ({
//   className = "",
//   ...props
// }: CharacterInfoBoxProps) => {
//   const { selectedCharacter } = useCharacterStore();

//   return (
//     <div className={`grid grid-cols-2 gap-4 ${className}`} {...props}>
//       <div className="border-gray-30 rounded-lg border">
//         {/** 캐릭터 이미지 */}
//       </div>
//       <div className="flex h-full flex-col justify-center">
//         {selectedCharacter &&
//           Object?.entries(selectedCharacter?.basic).map(([key, value]) => (
//             <AbilityItem
//               className="flex-1"
//               key={key}
//               pStyle="min-w-12"
//               abilityLabel={convertAttributeName(key)}
//               abilityValue={value}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CharacterInfoBox;
