import './App.css';

import { useState } from 'react';

import logo from './logo.svg';
import Counter from '~/components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <Counter count={count} />
    </div>
  );
}

export default App;
