import './styles.css';
import MarkerIcon from '../../assets/location-pin.png';
import {Link} from 'react-router-dom';
const Marker = ({petshop}) =>{
    return(
        <Link to={`/petshop/${petshop._id}`}>
            <img src={MarkerIcon} alt="" width="40px" height="40px" />
            <img className='img-marker' src={petshop.logo} alt="" />
        </Link>
    );
}

export default Marker;