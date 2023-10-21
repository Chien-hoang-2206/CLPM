import React from 'react';
import './Item.scss'
import { convertStringToNumber } from '../../Utils/Utils';
const Item = ({preview,stocked='false',price,name}) => {
    return (
        <div className='itemContainer'>
            <img src={preview} />
            <div className='contentItem'>
                <span>
                    {name}
                </span>
                <div className='btnAddPrice'>
                    <div  className='priceAndStock' >
                        <span className='textPrice' >
                            {convertStringToNumber(price)}
                        </span>
                        {!stocked &&   <span className='textStockout'>   Tạm hết hàng   </span> }
                    </div>

                    {stocked &&
                     <button className=''>
                        Thêm vào giỏ hàng
                    </button>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Item;