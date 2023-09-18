import React from 'react';

const LoginForm = () => {
    return (
        <form style={{ display: 'flex', flexDirection: 'column',  width: '50%' , gap: 10 }}>
            <p>Login form </p>
            <input placeholder='Username' />
            <input placeholder='Password' />
        </form>
    );
};

export default LoginForm;