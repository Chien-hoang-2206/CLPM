import React, { useEffect, useState } from 'react';
import './CartHeader.scss'
import Cart from '../../assets/image/cart.png'
import { convertStringToNumber } from '../../Utils/Utils';
const CartHeader = ({ listProducts }) => {
    const [totalPrice, setTotalPrice] = useState(0); 

    function calulatorTotalPrice(){
        const total = listProducts.reduce((accumulator, product) => {
        return accumulator + product.price;
        }, 0);
        setTotalPrice(total);
    }
    useEffect(() => {
        calulatorTotalPrice();
    },[listProducts])
    return (
        <div className='CartHeaderContainer'>
            <div className='inForProducts'>
            <span  className='textInfor'>
                <span>
                    {listProducts?.length} đơn vị sản phẩm 
                </span>
                    <span>
                    Tổng tiền: {convertStringToNumber(totalPrice)}
                </span>
            </span>
            <img src={Cart} alt='cart'/>
            </div>
        </div>
    );
};

export default CartHeader;