import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [ {basket}, dispatch] = useStateValue();
    // const handleAuthenticaton = () => {
    //     if (user) {
    //         auth.signOut();
    //     }
    // };

    return (
        <div className='header__wrapper'>
            <Link to ='/'>
                <img className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* <Link to="./orders" className="header__clearlink"> */}
                    <div className="header__option">
                        <span className="header__optionLineOne"></span>
                        <span className="header__optionLineTwo"></span>
                    </div>
                {/* </Link> */}
                {/* <Link to="./orders" className="header__clearlink"> */}
                    <div className="header__option">
                        <span className="header__optionLineOne"></span>
                        <span className="header__optionLineTwo"></span>
                    </div>
                {/* </Link> */}
                <Link to="./login" className="header__clearlink">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* <Link to="./orders" className="header__clearlink"> */}
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                {/* </Link> */}
                {/* <Link to="./orders" className="header__clearlink"> */}
                    <div className="header__option">
                        <span className="header__optionLineOne">Yours</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                {/* </Link> */}
                <Link to="/checkout" className="header__clearlink">
                    <div className="header__optionBasket">
                        <ShoppingCartCheckoutIcon />
                        <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>  
                    </div>
                </Link>
                {/* <Link to="./orders" className="header__clearlink"> */}
                    <div className="header__option">
                        <span className="header__optionLineOne"></span>
                        <span className="header__optionLineTwo"></span>
                    </div>
                {/* </Link> */}
            </div>
        
        </div>
    )
}

export default Header
