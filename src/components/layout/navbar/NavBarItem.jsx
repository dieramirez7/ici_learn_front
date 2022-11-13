import { Link } from '@chakra-ui/react';
import { Link as ReactLink, useLocation } from 'react-router-dom';

const NavBarItem = ({ name, path }) => {
  return (
    <Link
      as={ReactLink}
      to={`/${path}`}
      fontWeight='bold'
      color={useLocation().pathname === `/${path}` ? 'blue.600' : 'gray.500'}
      _hover={{
        color: 'blue.600',
      }}
    >
      {name}
    </Link>
  );
};

export default NavBarItem;
