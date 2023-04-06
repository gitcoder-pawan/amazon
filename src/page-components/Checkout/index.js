import React, {useState, useContext} from 'react';
import { TopLayer } from '../../context/TopLayer';
import Item from './Item';
import "./index.css";
const Checkout = () => {
    const {cartItem} = useContext(TopLayer);
    const [giftSelected, setGiftSelected] = useState(false);

    let totalAmount = 0;
    let totalItemCount = 0;
    Object.keys(cartItem).forEach((_id)=>{
        const itm = cartItem[_id];
        totalAmount += (itm.count * itm.price);
        totalItemCount += itm.count;
    });


    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__leftAdsImage' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/1058_AB_EOYS_AMZin_1500x200_B_2.gif" alt="ads auvailable" />
                <h3>Your Checkout Basket</h3>
                <div className="checkout__basket">
                    {(Object.keys(cartItem)).map(_id =>
                        <Item
                            item = {cartItem[_id]}
                        />
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <div className="checkout__total">
                    subtotal ({totalItemCount} items) : ₹ {totalAmount}
                </div>
                <div className="contain__gift">
                    <input type= 'checkbox' checked={giftSelected} onChange={()=>setGiftSelected((p)=>!p)}/>
                    <p>this item contain gift</p>
                </div>
                <button className='checkout__proceedButton'>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Checkout