import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { TopLayer } from '../../context/TopLayer';
import Item from './Item';
import "./index.css";
const Cart = () => {
    const {cartItem} = useContext(TopLayer);
    const [giftSelected, setGiftSelected] = useState(false);

    const navigate = useNavigate();

    let totalAmount = 0;
    let totalItemCount = 0;
    Object.keys(cartItem).forEach((_id)=>{
        const itm = cartItem[_id];
        totalAmount += (itm.count * itm.price);
        totalItemCount += itm.count;
    });
    const handleCheckout = ()=>{
        if(totalItemCount){
            navigate('/checkout');
        }
    }


    return (
        <div className='cart'>
            <div className="cart__left">
                <img className='cart__leftAdsImage' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/1058_AB_EOYS_AMZin_1500x200_B_2.gif" alt="ads auvailable" />
                <h3>Your cart Basket</h3>
                <div className="cart__basket">
                    {(Object.keys(cartItem)).map(_id =>
                        <Item
                            item = {cartItem[_id]}
                        />
                    )}
                </div>
            </div>
            <div className="cart__right">
                <div className="cart__total">
                    subtotal ({totalItemCount} items) : ₹ {totalAmount}
                </div>
                <div className="contain__gift">
                    <input type= 'checkbox' checked={giftSelected} onChange={()=>setGiftSelected((p)=>!p)}/>
                    <p>this item contain gift</p>
                </div>
                <button className='cart__proceedButton' onClick={handleCheckout} disabled={!totalItemCount}>Proceed to checkout</button>
                {!totalItemCount && <p className="cart__checkoutError">Please add some items to cart.</p>}
            </div>
        </div>
    )
}

export default Cart;