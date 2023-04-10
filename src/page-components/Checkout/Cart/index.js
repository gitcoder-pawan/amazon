import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { TopLayer } from '../../../context/TopLayer';
import Item from './Item';
import "./index.css";
const Cart = ({setStep}) => {
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
    const handlePlaceOrder=()=>{
        setStep((p)=>p+1);
    }
    useEffect(() => {
        if(totalItemCount===0){
            navigate('/');
        }
    }, []);

    return (
        <div className='checkout__cart'>
            <div className="checkout__cartLeft">
                <h3>Your Basket</h3>
                <div className="checkout__cartBasket">
                    {(Object.keys(cartItem)).map(_id =>
                        <Item
                            item = {cartItem[_id]}
                        />
                    )}
                </div>
            </div>
            <div className="checkout__cartRight">
                <div className="checkout__cartTotal">
                    subtotal ({totalItemCount} items) : ₹ {totalAmount}
                </div>
                <div className="checkout__containGift">
                    <input type= 'checkbox' checked={giftSelected} onChange={()=>setGiftSelected((p)=>!p)}/>
                    <p>this item contain gift</p>
                </div>
                <button className='checkout__cartProceedButton' onClick={handlePlaceOrder} disabled={!totalItemCount}>Place Your Order</button>
                {!totalItemCount && <p className="checkout__cartCheckoutError">Please add some items to cart.</p>}
            </div>
        </div>
    )
}

export default Cart;