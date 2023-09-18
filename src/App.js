import logo from './logo.svg';
import './App.css';
import Mybutton from './components/button/Mybutton';
import DemoIcon from './components/icon/DemoIcon';
import Loader from './components/loader/Loader';
import Profile from './components/profile/Profile';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import ListProduct from './components/Products/ListProduct';
import ShoppingList from './components/Products/ListProduct';

function App() {
  const [islogin, setLogin] = useState(false);
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  const handleClickLogin = () => {
    setLogin(!islogin);
  }

  const handleClickClear = () => {
    setCount(0);
  }

  const demoIcons = Array.from({ length: count }, (_, index) => (
    <DemoIcon key={index} />
  ));

  return (
    <div className="App">

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='container' >
          {islogin ? (<Profile />) : (<LoginForm />)}
        </div>
      </div>
      <ShoppingList />

      <div style={{ display: 'flex', justifyContent: 'center', minHeight: 300, flexWrap: 'wrap' }}>
        {demoIcons}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
        <button onClick={handleClick}>
          Clicked {count} times
        </button>

        <button onClick={handleClickClear}>
          Clear
        </button>
      </div>

      <h1> Welcome  to My app</h1>
      <Mybutton onclick={handleClickLogin} />

      {/* <Loader /> */}
      {/* <DemoIcon />
        <DemoIcon />
        <DemoIcon />
        <DemoIcon /> */}

    </div>
  );
}

export default App;
