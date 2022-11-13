import {
  Box,
  Text,
  Flex,
  Image,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  Icon,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import * as AuthServices from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const authContext = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await AuthServices.login(data.email, data.password);
      const { token } = response.data;
      authContext.login(token);
      navigate('/', { replace: true });
    } catch (err) {
      var error = 'Ocurrió un error al iniciar sesión';
      if (err.response && err.response.data && err.response.data.msg) {
        error = err.response.data.msg;
      }
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align='flex-start' w='full'>
            <FormControl isInvalid={errors.email}>
              <FormLabel>E-mail</FormLabel>
              <Input
                variant='outline'
                bgColor={'white'}
                id='email'
                placeholder='Introduce tu correo'
                {...register('email', {
                  required: true,
                  // validate: (value) => value.trim() !== '',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              <FormErrorMessage>
                Introduce un correo electrónico válido
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup bgColor='white'>
                <Input
                  variant='outline'
                  type={isPasswordVisible ? 'text' : 'password'}
                  bgColor={'white'}
                  id='password'
                  placeholder='Introduce tu contraseña'
                  autoComplete='off'
                  {...register('password', { required: true, minLength: 0 })}
                />
                <InputRightElement
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                >
                  <Icon
                    as={isPasswordVisible ? FiEyeOff : FiEye}
                    _hover={{
                      cursor: 'pointer',
                    }}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>Introduce una contraseña</FormErrorMessage>
            </FormControl>
            <Flex
              direction={['column', 'row']}
              justify={['space-between']}
              align='flex-start'
              w='full'
            >
              <Button variant='link' colorScheme='gray' textColor={'#463F57'}>
                ¿Olvidaste tu contraseña?
              </Button>
            </Flex>
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
              Login
            </Button>
            <HStack w='full' justify='center'>
              <Text>¿No tienes una cuenta? </Text>
              <Button variant='link' colorScheme='blue' textColor={'#463F57'}>
                Registrarse
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
