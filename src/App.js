import './App.css';
import DemoIcon from './components/icon/DemoIcon';
import Profile from './components/profile/Profile';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { Requirements } from 'cs-erp-theme'

function App() {
  const [islogin, setLogin] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  const handleClickClear = () => {
    setCount(0);
  }
  const demoIcons = Array.from({ length: count }, (_, index) => (
    <DemoIcon key={index} />
  ));

  return (
    <div className="App">
      <h1> Welcome  to My app</h1>
      <Requirements/>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 10 , minHeight: 150}}>
        <div className='container' >
          {islogin ? (<Profile islogin={islogin} onLogout={(e) => setLogin(false) }/>) : (<LoginForm login={islogin} onchangeLogin={(e) => setLogin(e)} />)}
        </div>
      </div>

      <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center', minHeight: 300, flexWrap: 'wrap' }}>
        {demoIcons}
      </div>

      <div style={{ width: 200, margin: 'auto', padding: 'auto'}}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
          <button onClick={handleClick}>
            Clicked {count} times
          </button>

          <button onClick={handleClickClear}>
            Clear
          </button>
        </div>
      </div>



      {/* <Loader /> */}
      {/* <DemoIcon />
        <DemoIcon />
        <DemoIcon />
        <DemoIcon /> */}

    </div>
  );
}

export default App;
