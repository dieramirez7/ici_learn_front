import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  Link,
  ListItem,
  Spinner,
  UnorderedList,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../../components/layout/Card';
import AuthContext from '../../../context/AuthContext';
import LevelContext from '../../../context/LevelContext';

const ExtraResources = () => {
  const levelContext = useContext(LevelContext);
  const authContext = useContext(AuthContext);
  const { level } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.user.nivel < level) {
      navigate('/aprende');
    }
    if (!levelContext.checkIfSameLevel(level)) {
      levelContext.getLevel(level);
    }
  }, []);

  return (
    <Card>
      {levelContext.isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading>Recursos extra</Heading>
          <UnorderedList spacing={3}>
            {levelContext.currentLevel.recursos.map((resource, i) => (
              <ListItem key={resource.recurso_url}>
                <Link href={resource.recurso_url} isExternal>
                  Recurso {i + 1} <ExternalLinkIcon mx='2px' />
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
          <Button
            colorScheme='blackAlpha'
            size='lg'
            onClick={() => {
              navigate(`/aprende/niveles/${level}/examen`, { replace: true });
            }}
          >
            Contestar el examen de nivel
          </Button>
        </>
      )}
    </Card>
  );
};

export default ExtraResources;
