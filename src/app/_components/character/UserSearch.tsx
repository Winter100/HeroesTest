"use client";

import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

import Row from "../layout/Row";
import Input from "../common/Input";
import Button from "../common/Button";

import { useCharacter } from "@/app/_hooks/useCharacter";
import Loading from "../common/Loading";

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleCharacterInfo, loading } = useCharacter();

  const onClickHandler = async (e: FormEvent) => {
    e.preventDefault();

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
    <Row className="justify-center text-black">
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
