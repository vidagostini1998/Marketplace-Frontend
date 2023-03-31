import Header from '../../components/header';
import Product from '../../components/product/card';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestPetshop} from '../../store/modules/shop/actions';
import {useParams} from 'react-router-dom';
import './styles.css';
const Petshop = () =>{

    const {id} = useParams();
    const dispatch = useDispatch();
    const {petshop} = useSelector(state => state.shop);
    useEffect(() => {
        dispatch(requestPetshop(id));
    },[dispatch, id])

    return(
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className='img-fluid petshop-image' src={petshop.logo} alt="" />
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
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <hr />
                        <div className="row">
                           {petshop.products?.map((p) => (
                            <Product product={p} />
                           ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Petshop;