import React from 'react';
import { useState } from 'react';
import Mybutton from '../button/Mybutton';

const account = {
    username: '123',
    password: '123',
}

const LoginForm = ({ login, onchangeLogin }) => {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClickLogin = () => {
        if (UserName === account.username && Password === account.password) {
            onchangeLogin(true);
        }
        else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng')
        }
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', width: '50%', gap: 10, padding: 20 }}>
            <p>Login form </p>
            <input placeholder='Username' value={UserName} onChange={(e) => setUserName(e.target.value)} />
            <input placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
            <Mybutton onclick={handleClickLogin} />
            {error && (<p>{error}</p>)}
          
        </form>
    );
};

export default LoginForm;