import {
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import {} from '../../../assets/ICI_learn_logo.png';

import NavBarItem from './NavBarItem';

const DesktopNavBar = () => {
  return (
    <Flex
      py={4}
      align='center'
      justify='space-between'
      display={['none', 'none', 'flex']}
    >
      <HStack spacing={6}>
        <Image src='../../../assets/ICI_learn_logo.png' h='30px' />
        <NavBarItem name={'Aprende'} path={'hola'} />
        <NavBarItem name={'Leaderboard'} path={'hola'} />
        <NavBarItem name={'Retos'} path={'hola'} />
      </HStack>
      <Menu>
        <MenuButton>
          <HStack>
            <Image
              src='https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg'
              alt='Casandra Martínez'
              height='30px'
              borderRadius='full'
            />
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Ajustes</MenuItem>
          <MenuItem>Cerrar sesión</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DesktopNavBar;

// prog-gsedca
