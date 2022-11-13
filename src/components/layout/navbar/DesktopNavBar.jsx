import { Flex, HStack, Image, Link } from '@chakra-ui/react';
import NavBarItem from './NavBarItem';
import { Link as ReactLink } from 'react-router-dom';
import NavMenu from './NavMenu';

const DesktopNavBar = ({ links }) => {
  return (
    <Flex
      py={4}
      align='center'
      justify='space-between'
      display={['none', 'none', 'flex']}
    >
      <HStack spacing={6}>
        <Link as={ReactLink} to='/'>
          <Image src='../../../assets/ICI_learn_logo.png' h='30px' />
        </Link>
        {links.map((link) => (
          <NavBarItem key={link.name} name={link.name} path={link.path} />
        ))}
      </HStack>
      <NavMenu />
    </Flex>
  );
};

export default DesktopNavBar;

// prog-gsedca
