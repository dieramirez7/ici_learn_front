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
        <Image src='../../../assets/ICI_learn_logo.png' h='30px' />
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
