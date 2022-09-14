import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Profile  from './pages/profile';
import Donate from './pages/donate';
import NewDonation from './pages/newDonation';

export default function SwitchRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login />} />
                <Route path='/register' element={ <Register/> } />
                <Route path='/profile' element={ <Profile/> } />
                <Route path='/donate' element={<Donate/>} />
                <Route path='/donate/new' element={<NewDonation/>} />
            </Routes>
        </BrowserRouter>
    )
}