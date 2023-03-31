import {useState} from 'react';
import {useDispatch} from 'react-redux'
import {setCustomer as setStoreCustomer} from '../../store/modules/shop/actions';
import Header from '../../components/header';
import Logo2 from '../../assets/Logo.png';
import {Link} from 'react-router-dom';

const Cadastro = () =>{

    const dispatch = useDispatch();

    const [customer, setCustomer] = useState({
        external_id: new Date().getTime().toString(),
        name:'' ,
        type:'individual' ,
        contry:'br' ,
        email:'' ,
        documents: [
            {
                type:'cpf',
                number:'' ,
            },
        ],
        phone_numbers : [''],
        birthday:'',
    });

    const goToCheckout = () => {
        dispatch(setStoreCustomer(customer));
    }

    return (
        <div className="container-fluid h-100 bg-primary">
            <Header hideCart />
            <div className='row'>
                <div className="col-6 text-center my-auto">
                    <img src={Logo2} alt="Logo" className='img-fluid' width="500px" height="200px" />
                </div>      
                <div className="col-6">
                    <div className='box col-8'>
                        <h2 className='text-center'>Marketplace NP</h2>
                        <br />
                        <br />
                        <input 
                            type="text" 
                            className='form-control form-control-lg mb-3' 
                            placeholder='Nome Completo' 
                            onChange={(e) => {
                                setCustomer({ ...customer, name: e.target.value});
                            }}
                        />

                        <input 
                            type="text" 
                            className='form-control form-control-lg mb-3' 
                            placeholder='E-Mail' 
                            onChange={(e) => {
                                setCustomer({ ...customer, email: e.target.value});
                            }}
                        />

                        <input 
                            type="text" 
                            className='form-control form-control-lg mb-3' 
                            placeholder='Telefone' 
                            onChange={(e) => {
                                setCustomer({ ...customer, phone_numbers: [e.target.value]});
                            }}
                        />

                        <input 
                            type="text" 
                            className='form-control form-control-lg mb-3' 
                            placeholder='CPF' 
                            onChange={(e) => {
                                setCustomer({ ...customer, documents: [
                                    {
                                        type:'cpf',
                                        number:e.target.value,
                                    },
                                ],
                            });
                            }}
                        />

                        <input 
                            type="date" 
                            className='form-control form-control-lg mb-3' 
                            placeholder='Data de Nascimento' 
                            onChange={(e) => {
                                setCustomer({ ...customer, birthday: e.target.value});
                            }}
                        />
                        <div className='d-grid gap-2'>
                            <Link to="/checkout" onClick={() => goToCheckout()} className='btn btn-lg  btn-secondary'>Finalizar Pedido</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;