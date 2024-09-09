"use client";

import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

import Row from "../../layout/Row";
import Input from "../../common/Input";
import Loading from "../../common/Loading";
import Button from "../../common/Button";

import { useCharacterStore } from "@/app/_store/characterStore";
import { useCharacter } from "@/app/_hooks/useCharacter/useCharacter";

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleCharacterInfo, loading } = useCharacter();
  const characters = useCharacterStore((state) => state.characters);

  const onClickHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!characters || characters.length >= 8) {
      toast.error("캐릭터는 최대 8명까지 등록 가능합니다.");
      return;
    }
    if (inputRef.current) {
      const cleanedCharacterName = inputRef.current.value.replace(/\s/g, "");

      if (cleanedCharacterName) {
        await handleCharacterInfo(cleanedCharacterName);
      } else {
        inputRef.current.focus();
        toast.error("캐릭터 이름을 입력해주세요.", {
          toastId: "characterName",
        });
      }
      inputRef.current.value = "";
    }
  };

  return (
    <Row className="justify-center gap-1 text-black">
      <form className="flex gap-1">
        <Input
          ref={inputRef}
          className="w-60 text-xs"
          placeholder="캐릭터 이름을 입력해주세요."
        />
        <Button
          type="submit"
          disabled={loading}
          className={`h-full w-14 text-xs hover:opacity-80 ${loading ? "opacity-80" : ""}`}
          onClick={onClickHandler}
        >
          {!loading ? "검색" : <Loading />}
        </Button>
      </form>
    </Row>
  );
};

export default UserSearch;
