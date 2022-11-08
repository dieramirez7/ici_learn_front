import {
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

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
        <Text href='/'>LOGO</Text>
        <NavBarItem name={'Aprende'} path={'hola'} />
        <NavBarItem name={'Leaderboard'} path={'hola'} />
        <NavBarItem name={'Retos'} path={'hola'} />
      </HStack>
      <Menu>
        <MenuButton>
          <HStack>
            <Image
              src='https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png'
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
