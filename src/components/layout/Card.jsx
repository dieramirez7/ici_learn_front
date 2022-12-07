import { Center, Flex, Grid } from '@chakra-ui/react';

const Card = ({ children, autoHeight }) => {
  return (
    <Grid h={autoHeight ? 'auto' : '100vh'} pt='100px' pb='50px'>
      <Center>
        <Flex
          flexDirection='column'
          gap={8}
          p={10}
          borderRadius={15}
          bgColor={['gray.200', 'white', 'white']}
          maxW={['100%', '90%', '50%']}
          justify='start'
          position='relative'
        >
          {children}
        </Flex>
      </Center>
    </Grid>
  );
};

export default Card;
