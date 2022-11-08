import { Box } from '@chakra-ui/react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
  return (
    <Box bgColor='white' shadow='base' px={4}>
      <DesktopNavBar />
      <MobileNavBar />
    </Box>
  );
};

export default NavBar;
