import { Box, Flex } from '@chakra-ui/react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
  const LINKS = [
    { name: 'Aprende', path: 'aprende' },
    { name: 'Leaderboard', path: 'leaderboard' },
    { name: 'Retos', path: 'retos' },
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

export default NavBar;
