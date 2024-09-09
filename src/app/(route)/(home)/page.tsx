import Row from "@/app/_components/layout/Row";
import CharacterInfoPanel from "./_components/CharacterInfoPanel";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center gap-1">
      <Row className="min-h-[510px] gap-1">
        <CharacterInfoPanel />
      </Row>
      <Row className="flex-1 gap-1"></Row>
    </div>
  );
}
