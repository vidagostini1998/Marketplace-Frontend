import {useState, useEffect} from 'react';
import { Dock } from 'react-dock';
import Product from '../product/list';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './styles.css';

const Sidebar = () =>{
    const navigate = useNavigate();
    const {cart} = useSelector((state) => state.shop);
    const total = cart.reduce((total, product) => {
        return total + product.preco;
    },0)
    const [opened,setOpened] = useState(false);

    useEffect(()=>{
        window.addEventListener('openCart',() =>{
            setOpened(true);
        })
    },[]);

    return (
        <Dock position='right' isVisible={opened} onVisibleChange={(visible) => {
            setOpened(visible)
        }} >
            <div className="container-fluid h-100 pt-4 sidebar">
                <h5>Minha Sacola ({cart.length})</h5>
                <div className="row products">
                    {cart.map(p =><Product product={p} /> )}
                </div>

                <div className="row align-items-end footer">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <b className='d-inline-block'>Total</b>
                        <h3 className='d-inline-block'>R$ {total.toFixed(2)}</h3>
                    </div>
                    <div className='d-grid gap-3 mb-5'>
                        <button onClick={() => navigate('/cadastro')} className='btn btn-lg btn-primary rounded-0'>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </Dock>
    );
}

export default Sidebar;