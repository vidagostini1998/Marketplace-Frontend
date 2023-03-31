import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Home from './pages/home';
import Sidebar from './components/sidebar';
import './styles/global.css';

const Rt = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/petshop/:id' exact element={<Petshop />} />
                    <Route path='/checkout' exact element={<Checkout />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                </Routes>
                <Sidebar />
            </BrowserRouter>
            
        </>
    );
}

export default Rt;