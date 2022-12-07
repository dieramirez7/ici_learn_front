import { Heading, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import LevelCircle from '../../../components/learn/LevelCircle';
import AuthContext from '../../../context/AuthContext';

const Learn = () => {
  const authContext = useContext(AuthContext);
  const LEVELS = 10;

  return (
    // TODO: if the user hasn't reach a level display a something in that level page
    <VStack spacing={10} mb={10} pt='80px'>
      <Heading>Continua con tu aprendizaje</Heading>
      {Array.from({ length: LEVELS }, (_, i) => i + 1).map((level) => (
        <LevelCircle
          key={level}
          level={level}
          isEnabled={level <= authContext.user.nivel}
        />
      ))}
    </VStack>
  );
};

export default Learn;
