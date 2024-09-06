import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './pages/gallery';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
            </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
