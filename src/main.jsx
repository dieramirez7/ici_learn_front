import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { PlacementTestProvider } from './context/PlacementTestContext';
import { LevelProvider } from './context/LevelContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <PlacementTestProvider>
          <LevelProvider>
            <App />
          </LevelProvider>
        </PlacementTestProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
