import { Box } from '@chakra-ui/react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
  const LINKS = [
    { name: 'Aprende', path: 'learn' },
    { name: 'Leaderboard', path: 'leaderboard' },
    { name: 'Retos', path: 'challenges' },
  ];

  return (
    <Box bgColor='white' shadow='base' px={4}>
      <DesktopNavBar links={LINKS} />
      <MobileNavBar links={LINKS} />
    </Box>
  );
};

export default NavBar;
