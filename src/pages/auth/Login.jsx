import {
  Box,
  Text,
  Flex,
  Image,
  VStack,
  StackDivider,
  Heading,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  Center,
} from '@chakra-ui/react';
const Login = () => {
  return (
    <Box bgColor={['gray.100', 'gray.100']} height='100vh'>
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
        <Heading textColor='Black'>Bienvenido</Heading>
        <Text>Ingresa tus credenciales para entrar</Text>
      </VStack>
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        mt={[5, '5vh']}
        mx='auto'
        border={['none', 'none']}
        borderColor={['', 'gray.300']}
        borderRadius={[10]}
        backgroundColor={['gray.100', 'white']}
        shadow={['none', 'md']}
      >
        <VStack spacing={4} align='flex-start' w='full'>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input variant='outline' bgColor={'white'} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input variant='outline' type='password' bgColor={'white'} />
          </FormControl>
          <Flex
            direction={['column', 'row']}
            justify={['space-between']}
            align='flex-start'
            w='full'
          >
            <Checkbox colorScheme='gray'>Recordarme.</Checkbox>
            <Button variant='link' colorScheme='blue' textColor={'#463F57'}>
              ¿Olvidaste la contraseña?
            </Button>
          </Flex>
          <Button
            rounded='md'
            colorScheme='blue'
            w={['full', 'full']}
            alignSelf='end'
            bgColor={'#463F57'}
            _hover={{
              bgColor: 'gray.500',
            }}
          >
            Login
          </Button>
          <HStack w='full' justify='center'>
            <Text>¿No tienes una cuenta? </Text>
            <Button variant='link' colorScheme='blue' textColor={'#463F57'}>
              Registrarse
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
