import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';

import Header from './components/Header';

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Filme/:id' element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
