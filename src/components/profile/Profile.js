import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import './style.css'
import ShoppingList from '../Products/ListProduct';
import Mybutton from '../button/Mybutton';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


export default function Profile({ islogin , onLogout }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <ShoppingList />
            {islogin === true ? (<>
                <Mybutton onclick={onLogout} label='Đăng xuất' />
            </>) : (<></>)}
            
        </div>
    );
}