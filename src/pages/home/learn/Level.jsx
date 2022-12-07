import { Heading, Flex, Button, Spinner } from '@chakra-ui/react';
import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../../components/layout/Card';
import AuthContext from '../../../context/AuthContext';
import LevelContext from '../../../context/LevelContext';
import LevelsService from '../../../services/levels';

const Level = () => {
  const levelContext = useContext(LevelContext);
  const authContext = useContext(AuthContext);
  const { level } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.user.nivel < level) {
      navigate('/aprende');
    }
    getData();
    LevelsService.getLevel(1);
  }, []);

  const getData = () => {
    levelContext.getLevel(level);
  };

  return (
    <Card>
      {levelContext.isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading>Nivel {level}</Heading>
          <Heading size='lg'>
            {levelContext.currentLevel.nivel[0].titulo}
          </Heading>
          <Flex gap={5} flexDir={['column', 'column', 'row']}>
            <Button
              w='100%'
              size='lg'
              colorScheme='blackAlpha'
              variant='outline'
              style={{
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              }}
              onClick={() => navigate(`/aprende/niveles/${level}/lecciones`)}
            >
              Ir al nivel
            </Button>

            <Button
              w='100%'
              size='lg'
              colorScheme='blackAlpha'
              style={{
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              }}
              onClick={() => navigate(`/aprende/niveles/${level}/examen`)}
            >
              Ir al examen de nivel
            </Button>
          </Flex>
        </>
      )}
    </Card>
  );
};

export default Level;
