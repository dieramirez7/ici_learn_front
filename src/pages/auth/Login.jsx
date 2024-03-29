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
  Spinner,
  Switch,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import AuthServices from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const authContext = useContext(AuthContext);

  const onSubmit = async (data) => {
    if (isStudent) {
      handleLoginStudent(data);
    } else {
      handleLoginTeacher(data);
    }
  };

  const handleLoginStudent = async (data) => {
    try {
      setIsLoading(true);
      const response = await AuthServices.loginStudent(
        data.email,
        data.password
      );
      const { token, usuario } = response;
      authContext.loginStudent(token, usuario.id);
      setIsLoading(false);
      navigate('/', { replace: true });
    } catch (err) {
      var error = 'Ocurrió un error al iniciar sesión';
      setIsLoading(false);
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

  const handleLoginTeacher = async (data) => {
    try {
      setIsLoading(true);
      const response = await AuthServices.loginTeacher(
        data.email,
        data.password
      );
      const { token, profesor } = response;
      authContext.loginTeacher(token, profesor.id);
      setIsLoading(false);
      navigate('/', { replace: true });
    } catch (err) {
      var error = 'Ocurrió un error al iniciar sesión';
      setIsLoading(false);
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
        <Text fontSize='xl' fontWeight='bold' mb={4} textAlign='center'>
          Entrar como:
        </Text>
        <HStack w='full' justify='center' spacing={5}>
          <Text fontWeight={isStudent ? 'bold' : 'normal'}>Estudiante</Text>
          <Switch
            isChecked={!isStudent}
            onChange={() => setIsStudent(!isStudent)}
            colorScheme='gray'
            size='md'
          />
          <Text fontWeight={!isStudent ? 'bold' : 'normal'}>Profesor</Text>
        </HStack>
        <Box mt={4}></Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align='flex-start' w='full'>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                variant='outline'
                bgColor={'white'}
                id='email'
                placeholder='Introduce tu correo'
                {...register('email', {
                  required: true,
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
              <FormLabel>Contraseña</FormLabel>
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
              {isLoading ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='sm'
                />
              ) : (
                'Iniciar sesión'
              )}
            </Button>
            <HStack w='full' justify='center'>
              <Text>¿No tienes una cuenta? </Text>
              <Button
                variant='link'
                colorScheme='blue'
                textColor={'#463F57'}
                onClick={() => {
                  navigate('/register', { replace: true });
                }}
              >
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
