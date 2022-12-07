import { createContext, useState } from 'react';
import LevelsService from '../services/levels';

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState();
  const [currentLevelIndex, setCurrentLevelIndex] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getLevel = async (level) => {
    if (checkIfSameLevel(level)) return;
    setIsLoading(true);
    const res = await LevelsService.getLevel(level);
    setCurrentLevel(res);
    setCurrentLevelIndex(level);
    setIsLoading(false);
  };

  const checkIfSameLevel = (level) =>
    parseInt(level) === parseInt(currentLevelIndex);

  return (
    <LevelContext.Provider
      value={{ currentLevel, getLevel, isLoading, checkIfSameLevel }}
    >
      {children}
    </LevelContext.Provider>
  );
};

export default LevelContext;
