import {
  Menu,
  MenuButton,
  Image,
  HStack,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';

const NavMenu = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.logout();
    navigate('/login', { replace: true });
  };

  return (
    <Menu>
      <MenuButton>
        <HStack>
          <Text
            display={['none', 'none', 'flex']}
          >{`${authContext.teacher.nombre} ${authContext.teacher.apellidos}`}</Text>
          <Image
            src={`https://api.multiavatar.com/${authContext.teacher.email}${authContext.teacher.apellidos}.png`}
            alt={`${authContext.teacher.nombre} ${authContext.teacher.apellidos}`}
            height='40px'
            borderRadius='full'
          />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            navigate('/settings');
          }}
        >
          Ajustes
        </MenuItem>
        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
