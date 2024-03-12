import { passwordGenerator } from "./utils/passwordGenerator";

const { createContext, useState } = require("react");

export const Context = createContext(null);

export const ContextApp = ({ children }) => {
  //_Password:
  const [password, setPassword] = useState("");

  //_Length:
  const [length, setLength] = useState(10);

  //_Rating

  //_Settings:
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const rating = [isUppercase, isLowercase, isNumbers, isSymbols].reduce(
      (acc, v) => acc + Number(v),
      0
    );

    const newPassword = passwordGenerator(
      length,
      isUppercase,
      isLowercase,
      isNumbers,
      isSymbols
    );
    setPassword(newPassword);
  };

  const state = {
    password,
    length,
    setLength,
    isUppercase,
    setIsUppercase,
    isLowercase,
    setIsLowercase,
    isNumbers,
    setIsNumbers,
    isSymbols,
    setIsSymbols,
    handlerSubmit,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
