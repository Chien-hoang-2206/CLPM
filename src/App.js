import './App.css';
import Home from './components/Home/Home';
import User from './components/User/User';
import DemoIcon from './components/icon/DemoIcon';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:id" element={<User />} />
          <Route path="*" element={<p>Sorry, nothing here</p>} />

          {/* <div className="App">
      <h1> Welcome  to My app</h1>

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

    </div> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
