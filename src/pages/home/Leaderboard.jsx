import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  VStack,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import React from 'react';

const Leaderboard = () => {
  return (
    <Box
      bgColor={['gray.100', 'gray.100']}
      spacing={10}
      mb={10}
      pt={['80px', '60px']}
    >
      <Box w={['full', 'lgs']} p={[8, 10]} mx='auto'>
        <Center fontWeight='bold' fontSize='40px'>
          Leaderboard
        </Center>
        <HStack justify='center' m={4} w='auto'>
          <Button bgColor='gray.300'>7 Días</Button>
          <Button bgColor='gray.300'>30 Días</Button>
          <Button bgColor='gray.300'>Siempre</Button>
        </HStack>
        <Box w={['full', 'md']} p={[4, 4]} mx='auto'>
          <HStack justify='space-between'>
            <HStack>
              <Avatar
                mr={4}
                src='https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg'
              ></Avatar>
              <VStack>
                <Box fontWeight='Bold'>Nombre</Box>
                <Box>Rango</Box>
              </VStack>
            </HStack>
            <Text fontWeight='semibold'>9999</Text>
          </HStack>
        </Box>
        <Box w={['full', 'md']} p={[4, 4]} mx='auto'>
          <HStack justify='space-between'>
            <HStack>
              <Avatar
                mr={4}
                src='https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg'
              ></Avatar>
              <VStack>
                <Box fontWeight='Bold'>Nombre</Box>
                <Box>Rango</Box>
              </VStack>
            </HStack>
            <Text fontWeight='semibold'>9999</Text>
          </HStack>
        </Box>
        <Box w={['full', 'md']} p={[4, 4]} mx='auto'>
          <HStack justify='space-between'>
            <HStack>
              <Avatar
                mr={4}
                src='https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg'
              ></Avatar>
              <VStack>
                <Box fontWeight='Bold'>Nombre</Box>
                <Box>Rango</Box>
              </VStack>
            </HStack>
            <Text fontWeight='semibold'>9999</Text>
          </HStack>
        </Box>
        <Box w={['full', 'md']} p={[4, 4]} mx='auto'>
          <HStack justify='space-between'>
            <HStack>
              <Avatar
                mr={4}
                src='https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg'
              ></Avatar>
              <VStack>
                <Box fontWeight='Bold'>Nombre</Box>
                <Box>Rango</Box>
              </VStack>
            </HStack>
            <Text fontWeight='semibold'>9999</Text>
          </HStack>
        </Box>
        <Box w={['full', 'md']} p={[4, 4]} mx='auto'>
          <HStack justify='space-between'>
            <HStack>
              <Avatar
                mr={4}
                src='https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg'
              ></Avatar>
              <VStack>
                <Box fontWeight='Bold'>Nombre</Box>
                <Box>Rango</Box>
              </VStack>
            </HStack>
            <Text fontWeight='semibold'>9999</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Leaderboard;
