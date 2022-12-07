import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../../components/layout/Card';
import LevelContext from '../../../context/LevelContext';

const LevelLection = () => {
  const levelContext = useContext(LevelContext);
  const [lection, setLection] = useState(0);
  const { level } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!levelContext.checkIfSameLevel(level)) {
      levelContext.getLevel(level);
    }
  }, []);

  return (
    <Card autoHeight={true}>
      {levelContext.isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading>
            {levelContext.currentLevel.informacion[lection].titulo}
          </Heading>
          <Text>
            {levelContext.currentLevel.informacion[lection].informacion}
          </Text>
          {/* <UnorderedList>
            {levelContext.currentLevel.informacion[lection].informacion &&
              levelContext.currentLevel.information[
                lection - 1
              ].bullet_points.map((bulletPoint) => (
                <ListItem key={bulletPoint}>{bulletPoint}</ListItem>
              ))}
          </UnorderedList> */}
          {levelContext.currentLevel.informacion[lection].img_url === '' ? (
            <></>
          ) : (
            <Image
              src={levelContext.currentLevel.informacion[lection].img_url}
            />
          )}

          <Flex justify='space-between'>
            <IconButton
              icon={<ArrowBackIcon />}
              isDisabled={lection === 0}
              onClick={() => {
                setLection(lection - 1);
              }}
            />
            <IconButton
              icon={<ArrowForwardIcon />}
              onClick={() => {
                if (
                  lection + 1 ===
                  levelContext.currentLevel.informacion.length
                ) {
                  navigate(
                    `/aprende/niveles/${level}/lecciones/recursos-extra`,
                    { replace: true }
                  );
                  return;
                }
                setLection(lection + 1);
              }}
            />
          </Flex>
        </>
      )}
    </Card>
  );
};

export default LevelLection;
