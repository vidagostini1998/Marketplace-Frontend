import './styles.css';
import {toggleCartProduct} from '../../../store/modules/shop/actions';
import {useDispatch} from 'react-redux';

const Product = ({product}) =>{

    const dispatch = useDispatch();

    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={product.capa} alt="ração" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className='badge bg-primary'>R$ {product.preco.toFixed(2)}</label>
                    </h6>
                    <small>
                        <b>{product.nome}</b>
                    </small>
                </div>
                <div className="col-3">
                    <button onClick={() => dispatch(toggleCartProduct(product))} className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>  
    );
}

export default Product;