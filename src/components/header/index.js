import Logo from '../../assets/Logo_blank.png';
import './style.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
const Header = ({hideCart}) => {

    const {cart} = useSelector((state) => state.shop);

    const openDrawer = () =>{
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }

    return(
        <div className="col-12">
            <header className='text-center'>
                <Link to="/">
                    <img src={Logo} alt="Logo" className='img-fluid logo'/>
                </Link>
            </header>
            {!hideCart && 
            (<button onClick={() => openDrawer()} className="btn btn-secondary cart-button">
                <span className='mdi mdi-cart'></span> {cart.length} Itens
            </button>)
            }
            
        </div>
    )
}

export default Header;