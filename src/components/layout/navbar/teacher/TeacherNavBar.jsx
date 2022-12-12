import { Box, Flex } from '@chakra-ui/react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const TeacherNavBar = () => {
  const LINKS = [
    { name: 'Alumnos', path: 'alumnos' },
    // { name: 'Leaderboard', path: 'leaderboard' },
    // { name: 'Retos', path: 'retos' },
  ];

  return (
    <Flex position='fixed' w='100%' zIndex={10}>
      <Box bgColor='white' shadow='base' px={4} w='100%'>
        <DesktopNavBar links={LINKS} />
        <MobileNavBar links={LINKS} />
      </Box>
    </Flex>
  );
};

export default TeacherNavBar;
