import React, { useContext } from 'react'
import { TopLayer } from '../../../context/TopLayer';
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./index.css";
const Item = ({ item }) => {
    const { removeFromCart, handleCounter, setCartItem } = useContext(TopLayer);
    const { id,
        title,
        currency,
        price,
        rating,
        image,
        count
    } = item || {};


    return (
        <div className="item">

            <img src={image} alt="" />

            <div className="item__info">
                <div className="item__infoTitle">{title}</div>
                <div className="item__infoPrice">
                    <small>{currency}</small>
                    <strong>{price}</strong>
                </div>
                <div className="item__infoRating">
                    {Array(5).fill(1).map((_, index) =>
                        index < rating ? <GradeIcon sx={{ color: '#fbad00' }} fontSize='small' /> : <StarBorderIcon fontSize='small' />
                    )}
                </div>
                <div className='item__footerButton'>
                    <button className="item__buttonText">
                        <div
                            onClick={() => removeFromCart(id, setCartItem)}
                        >Remove</div>
                    </button>
                    <div className="counter">
                        <button
                            className="item__counterButton item__dec"
                        onClick={() => handleCounter(id, 'dec', setCartItem)}
                        >-</button>
                        <div className="item__count ">{count || 0}</div>
                        <button
                            className="item__counterButton"
                             onClick={() => handleCounter(id,'inc', setCartItem)}
                        >+</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Item;