import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './views/AdminPage';
import AdminPageDetails from './views/AdminPageDetails';
import BadPage from './views/BadPage';
import ComposePage from './views/ComposePage';
import ContactPage from './views/ContactPage';
import DetailsPage from './views/DetailsPage';
import HomePage from './views/HomePage';
// import LoginPage from './views/LoginPage';
import PortfolioPage from './views/PortfolioPage';
// import RegisterPage from './views/RegisterPage';
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
                {/* <Route path='/register' element={<RegisterPage />} />                 */}
                {/* <Route path='/login' element={<LoginPage />} /> */}
                <Route path='/admin' element={<PrivateRoute><AdminPage /></PrivateRoute>} />
                <Route path='/compose' element={<PrivateRoute><ComposePage /></PrivateRoute>} />
                <Route path='/admin/:detailid' element={<PrivateRoute><AdminPageDetails /></PrivateRoute>} />
                <Route path='*' element={<BadPage />} />
            </Routes>
        </BrowserRouter>
    );
};

interface AppProps { }


export default App;