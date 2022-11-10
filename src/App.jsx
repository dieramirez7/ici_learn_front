import React from 'react';
import { useState } from 'react';
import NavBar from './components/layout/NavBar';
import Login from './pages/auth/Login';

const App = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      {/* <NavBar />
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Más</button> */}
      <Login />
    </div>
  );
};

export default App;
