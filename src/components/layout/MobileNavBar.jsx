import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  VStack,
  useDisclosure,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import NavBarItem from './NavBarItem';

const LINK_ITEMS = [
  { name: 'Servicios', path: '/services' },
  { name: 'Precios', path: '/pricing' },
  { name: '¿Por qué Manak?', path: '/why-manak' },
  { name: 'Contacto', path: '/contact' },
];

const MobileNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        py={4}
        align='center'
        justify='space-between'
        display={['flex', 'flex', 'none']}
      >
        <IconButton icon={<HamburgerIcon />} onClick={onOpen} />
        LOGO
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
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader></DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4}>
              <Divider borderWidth='1px' borderColor='gray.400' />
              <NavBarItem name={'Aprende'} path={''} />
              <Divider borderWidth='1px' borderColor='gray.400' />
              <NavBarItem name={'Leaderboard'} path={''} />
              <Divider borderWidth='1px' borderColor='gray.400' />
              <NavBarItem name={'Retos'} path={''} />
              <Divider borderWidth='1px' borderColor='gray.400' />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavBar;
