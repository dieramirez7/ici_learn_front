import React from 'react';
import { useState } from 'react';
import NavBar from './components/layout/NavBar';

const App = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <NavBar />
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Más</button>
    </div>
  );
};

export default App;
