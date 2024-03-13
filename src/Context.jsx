import { checkPasswords } from "./utils/checkPasswords";
import { passwordGenerator } from "./utils/passwordGenerator";

const { createContext, useState } = require("react");

export const Context = createContext(null);

export const ContextApp = ({ children }) => {
  //_Password:
  const [password, setPassword] = useState("");

  //_Length:
  const [length, setLength] = useState(10);

  //_Settings:
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  //Strength
  const [strength, setStrength] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newPassword = passwordGenerator(
      length,
      isUppercase,
      isLowercase,
      isNumbers,
      isSymbols
    );
    const rating = [isUppercase, isLowercase, isNumbers, isSymbols].reduce(
      (acc, v) => acc + Number(v),
      0
    );

    setPassword(newPassword);
    setStrength(checkPasswords(length, rating));
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
    strength,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
