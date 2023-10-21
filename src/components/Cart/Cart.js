import React, { useState } from 'react';
import Item from '../Item/Item';
import './Cart.scss'
const Cart = ({ dataList=[] }) => {
    const [valueSearch, setValueSearch] = useState();
    const [isShowProductInStock, setIsShowProductInStock] = useState(false);
    
    function handleChangeCheckBox(e) {
        setIsShowProductInStock(e.target.checked)
    }
    return (
        <div>
            <div className="filter">
                <input className="inputSearch" value={valueSearch} placeholder="Tìm kiếm ..." onChange={(e)=>setValueSearch(e)}/>
                <div className='checkBox'>
                    <input type="checkbox" value={isShowProductInStock} onChange={handleChangeCheckBox} />
                    <span>
                        Chỉ hiện thị các sản phẩm còn trong kho
                    </span>
                </div>
            </div>
            <div className='listProductsContainer'>
                <div className='phonePart'>
                    <span className='text'>Điện thoại Smartphone
                    </span>
                    {dataList?.map((item, index) => (
                        <>
                            { (item?.stocked === isShowProductInStock &&  item?.category === 'Điện thoại Smartphone' )  &&
                                <Item 
                                    key={index}
                                    name={item?.name}
                                    price={item?.price}
                                    preview={item?.preview}
                                    category={item?.category}
                                    stocked={item?.stocked}
                                />  }
                        </>
                    ))}
                </div>
                
                <div className='phonePart'>
                    <span className='text'>Thiết Bị Số
                    </span>
                    {dataList?.map((item, index) => (
                        <>
                            {  (item?.stocked === isShowProductInStock &&  item?.category === 'Thiết Bị Số' )  &&
                                <Item 
                                    key={index}
                                    name={item?.name}
                                    price={item?.price}
                                    preview={item?.preview}
                                    category={item?.category}
                                    stocked={item?.stocked}
                                />
                         }
                        </>
                    ))}
                </div>
                
                <div className='phonePart'>
                    <span className='text'>Thiết bị gia đình
                    </span>
                    {dataList?.map((item, index) => (
                        <>
                            { (item?.stocked === isShowProductInStock &&  item?.category === 'Thiết bị gia đình' )  &&
                                <Item 
                                    key={index}
                                    name={item?.name}
                                    price={item?.price}
                                    preview={item?.preview}
                                    category={item?.category}
                                    stocked={item?.stocked}
                                />   }
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;