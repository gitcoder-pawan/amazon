import React, { useContext } from 'react'
import { TopLayer } from '../../../context/TopLayer';
import GradeIcon from '@mui/icons-material/Grade';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./index.css";
const Product = ({ id, title, currency, price, rating, image }) => {
    const item = { id, title, currency, price, rating, image };
    const { addToCart, setCartItem, cartItem } = useContext(TopLayer)
    console.log("cartItem[id]", cartItem[id]? 1: 0);
    return (
        <div className="product">
            <div className="product__info">
                <div className="product__infoTitle">{title}</div>
                <div className="product__infoPrice">
                    <small>{currency}</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__infoRating">
                    {Array(5).fill(1).map((_, index) =>
                        index < rating ? <GradeIcon sx={{ color: '#fbad00' }} fontSize='small' /> : <StarBorderIcon fontSize='small' />
                    )}
                </div>
            </div>
            <img src={image} alt="" />
            {
                cartItem[id] ? (<button className='product__added'>
                <div className="product__buttonText product__addedButton">Added to cart <FileDownloadDoneIcon fontSize="small" color='#fff'/></div>
            </button>) : (<button className='product__notAdded'>
                    <div className="product__buttonText" onClick={() => addToCart(item, setCartItem)}>Add to cart</div>
                </button>)
            }
        </div >
    )
}

export default Product