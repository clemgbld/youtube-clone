import React from "react";
import classes from "./InputForm.module.css";
import { BsSearch } from "react-icons/bs";
import { useInput } from "../../../../../hooks/use-input";
import { useTags } from "../../../../../store/tags";
import InputDeleteBtn from "./InputDeleteBtn/InputDeleteBtn";
import { useRouter } from "next/router";
import InputVocal from "./InputVocal";

export default function InputSections() {
  const { addTag } = useTags();
  const router = useRouter();
  const {
    value: searchTerm,
    isWord,
    reset,
    valueInputChangeHandler,
    setValue: setSearchTerm,
  } = useInput();

  const termSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm === "") return;
    addTag(searchTerm);
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className={classes.flex}>
      <form onSubmit={termSubmitHandler} className={classes.form}>
        <div className={classes["input-control"]}>
          <input
            value={searchTerm}
            onChange={valueInputChangeHandler}
            className={classes.input}
            type="text"
            placeholder="Search"
          />
          {isWord && <InputDeleteBtn reset={reset} />}
        </div>

        <button className={classes.btn} type="submit">
          <BsSearch />
        </button>
      </form>
      <InputVocal setSearchTerm={setSearchTerm} />
    </div>
  );
}
