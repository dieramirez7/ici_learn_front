import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  Icon,
  FormErrorMessage,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AuthServices from '../../services/auth';
import AuthContext from '../../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const authContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await AuthServices.register(data);
      // TODO: remove this
      if (response.ok === false) {
        throw new Error(response.msg);
      }
      const { token, usuario } = await AuthServices.login(
        data.email,
        data.password
      );
      authContext.login(token, usuario.id);
      toast({
        title: 'Registro exitoso',
        description: 'Tu cuenta ha sido creada exitosamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
      navigate('/onboarding', { replace: true });
    } catch (err) {
      var error = 'Ocurrió un error al registrarse';
      setIsLoading(false);
      if (err.response && err.response.data && err.response.data.msg) {
        error = err.response.data.msg;
      }
      if (err.message) {
        error = err.message;
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
        mt={[10, '5vh']}
        mx='auto'
        border={['none', 'none']}
        borderColor={['', 'gray.300']}
        borderRadius={[10]}
        backgroundColor={['gray.100', 'white']}
        shadow={['none', 'md']}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align='flex-start' w='full'>
            <FormControl isInvalid={errors.name}>
              <FormLabel>Nombre(s)</FormLabel>
              <Input
                variant='outline'
                bgColor={'white'}
                id='name'
                placeholder='Introduce tu nombre'
                {...register('name', {
                  required: true,
                  validate: (value) => value.trim() !== '',
                })}
              />
            </FormControl>
            <FormControl isInvalid={errors.lastName}>
              <FormLabel>Apellidos</FormLabel>
              <Input
                variant='outline'
                bgColor={'white'}
                id='lastName'
                placeholder='Introduce tus apellidos'
                {...register('lastName', {
                  required: true,
                  validate: (value) => value.trim() !== '',
                })}
              />
            </FormControl>
            <FormControl isInvalid={errors.id}>
              <FormLabel>ID</FormLabel>
              <Input
                variant='outline'
                bgColor={'white'}
                id='id'
                placeholder='Introduce tu ID'
                {...register('id', {
                  required: true,
                  validate: (value) => {
                    if (value.trim().length !== 6) {
                      return 'Introduce un ID válido';
                    }
                    if (value.trim().length === 0) {
                      return 'El campo ID no puede estar vacío';
                    }
                  },
                })}
              />
              <FormErrorMessage>
                {errors.id
                  ? errors.id.message
                  : 'El campo ID no puede estar vacío'}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                variant='outline'
                bgColor={'white'}
                id='email'
                placeholder='Introduce tu email'
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Introduce un email válido',
                  },
                  validate: (value) => {
                    if (value.trim() === '') {
                      return 'El campo email no puede estar vacío';
                    }
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input
                  variant='outline'
                  type={isPasswordVisible ? 'text' : 'password'}
                  autoComplete='off'
                  bgColor={'white'}
                  id='password'
                  placeholder='Introduce tu contraseña'
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'La contraseña debe tener al menos 6 caracteres',
                    },
                    maxLength: {
                      value: 18,
                      message: 'La contraseña debe tener máximo 18 caracteres',
                    },
                    validate: (value) => {
                      if (value.trim() === '') {
                        return 'El campo contraseña no puede estar vacío';
                      }
                    },
                  })}
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
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel>Repita su contraseña</FormLabel>

              <InputGroup>
                <Input
                  variant='outline'
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  autoComplete='off'
                  bgColor={'white'}
                  id='confirmPassword'
                  placeholder='Repite tu contraseña'
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) => {
                      if (watch('password') !== value) {
                        return 'Las contraseñas no coinciden';
                      }
                      if (value.trim().length === 0) {
                        return 'El campo contraseña no puede estar vacío';
                      }
                    },
                    minLength: {
                      value: 6,
                      message: 'La contraseña debe tener al menos 6 caracteres',
                    },
                    maxLength: {
                      value: 18,
                      message: 'La contraseña debe tener máximo 18 caracteres',
                    },
                  })}
                />
                <InputRightElement
                  onClick={() => {
                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
                  }}
                >
                  <Icon
                    as={isConfirmPasswordVisible ? FiEyeOff : FiEye}
                    _hover={{
                      cursor: 'pointer',
                    }}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>
            <Box></Box>
            <Button
              rounded='md'
              colorScheme='gray'
              w='full'
              alignSelf='end'
              bgColor={'#463F57'}
              textColor={'white'}
              type='submit'
              marginTop={20}
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
                  size='md'
                />
              ) : (
                'Registrarse'
              )}
            </Button>
            <HStack w='full' justify='center'>
              <Text>¿Ya tienes una cuenta? </Text>
              <Button
                variant='link'
                colorScheme='blue'
                textColor={'#463F57'}
                onClick={() => {
                  navigate('/login', { replace: true });
                }}
              >
                Inicia sesión
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
