import {
  Menu,
  MenuButton,
  Image,
  HStack,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

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
