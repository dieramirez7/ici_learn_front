import { Link } from '@chakra-ui/react';

const NavBarItem = ({ name, path }) => {
  return (
    <Link
      fontWeight='bold'
      // color={router.pathname === path ? 'teal' : 'black'}
      _hover={{ color: 'teal' }}
    >
      {name}
    </Link>
  );
};

export default NavBarItem;
