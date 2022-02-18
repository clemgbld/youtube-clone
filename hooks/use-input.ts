import { useState, useEffect } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const [isWord, setIsWord] = useState(false);

  useEffect(() => {
    if (value.length >= 1) setIsWord(true);
    if (value.length === 0) setIsWord(false);
  }, [value]);

  const valueInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
    setIsWord(false);
  };

  return {
    value,
    isWord,
    reset,
    valueInputChangeHandler,
    setValue,
  };
};
