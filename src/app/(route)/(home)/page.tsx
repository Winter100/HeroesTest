import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import UserDetailInfo from "./_components/UserDetailInfo";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center gap-1">
      <div className="flex h-full w-full gap-1">
        <CharacterInfoPanel />
        <UserDetailInfo />
      </div>
      <div className="h-full max-h-[35rem]"></div>
    </div>
  );
}
