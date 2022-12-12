import { Flex, Image, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import NavMenu from './NavMenu';

const MobileNavBar = ({ links }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        py={4}
        align='center'
        justify='space-between'
        display={['flex', 'flex', 'none']}
      >
        {/* <IconButton icon={<HamburgerIcon />} onClick={onOpen} /> */}
        <Link as={ReactLink} to='/'>
          <Image src='../../../../assets/ICI_learn_logo.png' h='30px' />
        </Link>
        <NavMenu />
      </Flex>
      {/* <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader></DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4}>
              {links.map((link) => (
                <VStack key={link.name} spacing={4} w='100%'>
                  <Divider borderWidth='1px' borderColor='gray.400' />
                  <Box onClick={onClose}>
                    <NavBarItem name={link.name} path={link.path} />
                  </Box>
                </VStack>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </>
  );
};

export default MobileNavBar;
