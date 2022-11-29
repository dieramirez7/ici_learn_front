import {
  Accordion,
  Avatar,
  Box,
  Center,
  HStack,
  Text,
  VStack,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  CircularProgress,
  CircularProgressLabel,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Box bgColor={['gray.100', 'gray.100']} height='100vh'>
      <Box w={['full', 'lgs']} p={[8, 10]} mx='auto'>
        <Center mb={10} fontSize='30px' fontWeight='bold'>
          Bienvenido a tu aprendizaje
        </Center>
        <Box fontSize='20px' fontWeight='bold'>
          Unidad 1
          <Accordion bgColor='white' mt={4} allowToggle>
            <AccordionItem
              border={['none', 'none']}
              borderRadius='lg'
              borderColor={['', 'gray.300']}
              shadow='md'
            >
              <h2>
                <AccordionButton>
                  <Avatar
                    mr={4}
                    src='https://cdn.icon-icons.com/icons2/1483/PNG/512/codingbrowser_102152.png'
                  ></Avatar>
                  <Box flex='1' textAlign='left'>
                    <VStack align='left'>
                      <Box fontWeight='semibold'>Leccion 1</Box>
                      <Box fontWeight='semibold' textColor='gray.400'>
                        Descripcion de Leccion 1
                      </Box>
                    </VStack>
                  </Box>
                  <CircularProgress value={40} color='green.400'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button>Ir a la leccion</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion bgColor='white' mt={4} allowToggle>
            <AccordionItem
              border={['none', 'none']}
              borderRadius='lg'
              borderColor={['', 'gray.300']}
              shadow='md'
            >
              <h2>
                <AccordionButton>
                  <Avatar
                    mr={4}
                    src='https://cdn.icon-icons.com/icons2/1483/PNG/512/codingbrowser_102152.png'
                  ></Avatar>
                  <Box flex='1' textAlign='left'>
                    <VStack align='left'>
                      <Box fontWeight='semibold'>Leccion 1</Box>
                      <Box fontWeight='semibold' textColor='gray.400'>
                        Descripcion de Leccion 1
                      </Box>
                    </VStack>
                  </Box>
                  <CircularProgress value={40} color='green.400'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button>Ir a la leccion</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion bgColor='white' mt={4} allowToggle>
            <AccordionItem
              border={['none', 'none']}
              borderRadius='lg'
              borderColor={['', 'gray.300']}
              shadow='md'
            >
              <h2>
                <AccordionButton>
                  <Avatar
                    mr={4}
                    src='https://cdn.icon-icons.com/icons2/1483/PNG/512/codingbrowser_102152.png'
                  ></Avatar>
                  <Box flex='1' textAlign='left'>
                    <VStack align='left'>
                      <Box fontWeight='semibold'>Leccion 1</Box>
                      <Box fontWeight='semibold' textColor='gray.400'>
                        Descripcion de Leccion 1
                      </Box>
                    </VStack>
                  </Box>
                  <CircularProgress value={40} color='green.400'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button>Ir a la leccion</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion bgColor='white' mt={4} allowToggle>
            <AccordionItem
              border={['none', 'none']}
              borderRadius='lg'
              borderColor={['', 'gray.300']}
              shadow='md'
            >
              <h2>
                <AccordionButton>
                  <Avatar
                    mr={4}
                    src='https://cdn.icon-icons.com/icons2/1483/PNG/512/codingbrowser_102152.png'
                  ></Avatar>
                  <Box flex='1' textAlign='left'>
                    <VStack align='left'>
                      <Box fontWeight='semibold'>Leccion 1</Box>
                      <Box fontWeight='semibold' textColor='gray.400'>
                        Descripcion de Leccion 1
                      </Box>
                    </VStack>
                  </Box>
                  <CircularProgress value={40} color='green.400'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button>Ir a la leccion</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
