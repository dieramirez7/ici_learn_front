import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { PlacementTestProvider } from './context/PlacementTestContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <PlacementTestProvider>
          <App />
        </PlacementTestProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
