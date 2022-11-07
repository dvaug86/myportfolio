import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPage from './views/AdminPage';
import AdminPageDetails from './views/AdminPageDetails';
import AdminPageResume from './views/AdminPageResume';
import ComposePage from './views/ComposePage';
import ContactPage from './views/ContactPage';
import DetailsPage from './views/DetailsPage';
import HomePage from './views/HomePage';
import PortfolioPage from './views/PortfolioPage';
import ResumePage from './views/ResumePage';

const App: React.FC<AppProps> = (props) => { //learn strongtyping props and come up with an opinion
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/details/:detailid' element={<DetailsPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/resume' element={<ResumePage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/compose' element={<ComposePage />} />
                <Route path='/admin/:detailid' element={<AdminPageDetails />} />
                <Route path='/admin/resume' element={<AdminPageResume />} />
            </Routes>
        </BrowserRouter>
    );
};

interface AppProps { }


export default App;