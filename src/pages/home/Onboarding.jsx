import {
  Center,
  VStack,
  Image,
  Heading,
  ScaleFade,
  Text,
  Button,
  Box,
  Grid,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Onboarding = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Grid bgColor='gray.200' h='100vh'>
      <Center>
        <VStack
          spacing={8}
          bgColor={['gray.200', 'white']}
          p={10}
          borderRadius={15}
        >
          <ScaleFade in={true} initialScale={0.1}>
            <Image
              src={`../../../assets/ICI_learn_logo.png`}
              alt='ici-learn-logo'
              height={[70, 70, 100]}
            />
          </ScaleFade>
          <ScaleFade in={true} initialScale={0.1}>
            <Image
              src={`https://api.multiavatar.com/${authContext.user.email}${authContext.user.apellidos}.png`}
              alt={`${authContext.user.nombre} ${authContext.user.apellidos}`}
              height={[70, 70, 100]}
              borderRadius='full'
            />
          </ScaleFade>
          <ScaleFade in={true} initialScale={0.1}>
            <Heading textAlign='center'>
              {`Bienvenid@ a ICI Learn, ${authContext.user.nombre} ${authContext.user.apellidos}.`}
            </Heading>
            <Box h={5}></Box>
            <Text align='center'>
              Realiza el examen de diagnóstico para colocarte en el nivel
              adecuado.
            </Text>
          </ScaleFade>
          <ScaleFade in={true} initialScale={0.1}>
            <Button
              colorScheme={'blackAlpha'}
              onClick={() => {
                navigate('/placement-test', { replace: true });
              }}
            >
              Comenzar el examen de diagnóstico
            </Button>
          </ScaleFade>
        </VStack>
      </Center>
    </Grid>
  );
};

export default Onboarding;
