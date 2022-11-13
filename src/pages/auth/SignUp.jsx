import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';
const SignUp = () => {
  return (
    <Box bgColor={['gray.100', 'gray.100']} height='130vh'>
      <Center>
        <Image
          src='../../../assets/ICI_learn_logo.png'
          width='200px'
          p={4}
          alt='ICI Learn Logo'
          mt={4}
        ></Image>
      </Center>
      <VStack spacing={1} align={['center', 'center']} w='full'>
        <Heading textColor='Black'>Crea tu cuenta</Heading>
        <Text>¡Comienza tu Aprendizaje!</Text>
      </VStack>
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        mt={[20, '5vh']}
        mx='auto'
        border={['none', 'none']}
        borderColor={['', 'gray.300']}
        borderRadius={[10]}
        backgroundColor={['gray.100', 'white']}
        shadow={['none', 'md']}
      >
        <VStack spacing={4} align='flex-start' w='full'>
          <FormControl>
            <FormLabel>Nombre </FormLabel>
            <Input variant='outline' bgColor={'white'} />
          </FormControl>
          <FormControl>
            <FormLabel>Apellidos</FormLabel>
            <Input variant='outline' bgColor={'white'} />
          </FormControl>
          <FormControl>
            <FormLabel>ID</FormLabel>
            <Input variant='outline' bgColor={'white'} />
          </FormControl>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input variant='outline' bgColor={'white'} />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input variant='outline' type='password' bgColor={'white'} />
          </FormControl>
          <FormControl>
            <FormLabel>Repita su contraseña</FormLabel>
            <Input variant='outline' type='password' bgColor={'white'} />
          </FormControl>
          <Button
            rounded='md'
            colorScheme='gray'
            w='full'
            alignSelf='end'
            bgColor={'#463F57'}
            textColor={'white'}
            type='submit'
            _hover={{
              bgColor: 'gray.500',
            }}
          >
            Registrarse
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignUp;
