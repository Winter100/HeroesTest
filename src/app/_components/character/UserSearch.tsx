"use client";

import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

import Row from "../common/Row";
import Input from "../common/Input";
import Button from "../common/Button";

import { useCharacter } from "@/app/_hooks/useCharacter";
import Loading from "../common/Loading";

const UserSearch = () => {
  const [characterName, setCharacterName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleCharacterInfo, loading } = useCharacter();

  const onClickHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!characterName) {
      inputRef.current && inputRef.current.focus();
      return toast.error("캐릭터 이름을 입력해주세요.", {
        toastId: "characterName",
      });
    }
    await handleCharacterInfo(characterName);
  };

  return (
    <Row className="justify-center text-black">
      <form className="flex gap-2">
        <Input
          ref={inputRef}
          className="w-60 text-xs"
          placeholder="캐릭터 이름을 입력해주세요."
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <Button
          type="submit"
          disabled={loading}
          className={`h-full w-14 text-xs hover:opacity-80 ${loading ? "opacity-80" : ""}`}
          onClick={onClickHandler}
        >
          {!loading ? "찾기" : <Loading />}
        </Button>
      </form>
    </Row>
  );
};

export default UserSearch;
