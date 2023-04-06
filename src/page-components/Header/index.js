import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { TopLayer } from '../../context/TopLayer';
import {signOut} from "firebase/auth";
import { auth } from '../../firebase';
import logo from "../../assets/amazon-logo-white.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './index.css';
const Header = () => {
    const navigate = useNavigate();
    const { cartItem, authUser, setAuthUser } = useContext(TopLayer);
    let totalCartCount = 0;
    Object.keys(cartItem).forEach((_id) => {
        totalCartCount += cartItem[_id].count;
    })

    const handleLoginSignOut =()=>{
        if(authUser){
            signOut(auth).then(()=>{
                setAuthUser(null);
                })
                .catch(err=>{
                    console.log(err);
                })
        }else{
            navigate('/login');
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt="amazon-logo" />
            </Link>
            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' fontSize='medium' />
            </div>
            <div className="header__nav">
                
                <div className="header__option" onClick={handleLoginSignOut}>
                    <div className="header__optionLineOne">Hello</div>
                    <div className="header__optionLineTwo">{authUser? authUser?.email?.split('@')[0] : 'Signin'}</div>
                    {authUser && <div className="header__optionLineTwo">signout</div>}
                </div>

                <div className="header__option">
                    <div className="header__optionLineOne">Returns</div>
                    <div className="header__optionLineTwo">& Orders</div>
                </div>
                <div className="header__option">
                    <div className="header__optionLineOne">Your</div>
                    <div className="header__optionLineTwo">Prime</div>
                </div>
                <Link to='/checkout'>
                    <div className="header_basket ">
                        <ShoppingBasketIcon className='header__option' />
                        <span className="header__basketCounter ">{totalCartCount}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header