import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { PlacementTestProvider } from './context/PlacementTestContext';
import { LevelProvider } from './context/LevelContext';
import { TeacherProvider } from './context/TeacherContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <TeacherProvider>
          <PlacementTestProvider>
            <LevelProvider>
              <App />
            </LevelProvider>
          </PlacementTestProvider>
        </TeacherProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
