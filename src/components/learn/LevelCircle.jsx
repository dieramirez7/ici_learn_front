import { Center, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const LevelCircle = ({ level, isEnabled }) => {
  if (isEnabled) {
    return (
      <Link
        as={ReactLink}
        to={`/aprende/niveles/${level}`}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <VStack spacing={5}>
          <Center>
            <Image
              src='https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg'
              boxSize='120px'
              borderRadius='full'
              objectFit='cover'
              filter={isEnabled ? 'none' : 'grayscale(100%)'}
              _hover={{
                boxSize: '130px',
                transition: 'all 0.2s ease-in-out',
                boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.5)',
              }}
            />
          </Center>
          <Text fontSize='xl' fontWeight='bold'>
            Nivel {level}
          </Text>
        </VStack>
      </Link>
    );
  } else {
    return (
      <VStack spacing={0}>
        <Center>
          <Image
            src='https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg'
            boxSize='120px'
            borderRadius='full'
            objectFit='cover'
            filter='grayscale(100%)'
          />
        </Center>
        <Text fontSize='xl' fontWeight='bold'>
          Nivel {level}
        </Text>
      </VStack>
    );
  }
};

export default LevelCircle;
