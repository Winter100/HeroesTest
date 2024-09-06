import Row from "@/app/_components/layout/Row";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";
import UserDetailInfo from "./_components/UserDetailInfo";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center gap-1">
      <Row className="gap-1">
        <CharacterInfoPanel />
        <UserDetailInfo />
      </Row>
      <Row className="flex-1 gap-1"></Row>
    </div>
  );
}
