import './styles.css';
import { setShopMapSelected, setMapCenter } from '../../store/modules/shop/actions';
import {useDispatch, useSelector} from 'react-redux';

const Petshop = ({petshop}) =>{

    const dispatch = useDispatch()
    const {petshopMapSelected} = useSelector((state) => state.shop);
    const setSelectedPetshop = () =>{
        dispatch(setShopMapSelected(petshop._id));
        dispatch(setMapCenter(petshop.location));
    };
    return(
        <li className={`petshop d-inline-block ${petshopMapSelected===petshop._id ? 'active':''}`} onClick={() => setSelectedPetshop()}>
            <div className="d-inline-block">
                <img className='img-fluid' src={petshop.logo} alt="" />
            </div>
            <div className="d-inline-block ps-3 align-bottom">
                <b>{petshop.nome}</b>
                <div className="petshop-infos">
                    <span className="mdi mdi-star"></span>
                    <text>
                        <b>{petshop.destaque}</b>
                    </text>
                    <span className="mdi mdi-cash"></span>
                    <text>
                        <b>{petshop.categoria}</b>
                    </text>
                    <span className="mdi mdi-crosshairs-gps"></span>
                    <text>
                        <b>2,9KM</b>
                    </text>
                </div>
                <label className='badge bg-primary'>Frete Grátis</label>
            </div>
        </li>
    );
}

export default Petshop;