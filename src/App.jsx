import React, { useState } from "react";
import { Route,Routes , BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main  from "./Main";
import Footer  from "./Footer";
import Events from './Events';

export default function App() {


    const [hambState, setHambState] = useState('close');


    return (
    <Router>
        <Navbar setHambState={setHambState} hambState={hambState}  />
      <Routes>
        <Route exact path="/" element={<Main setHambState={setHambState} hambState={hambState} />}/>
        <Route path="/events" element={<Events setHambState={setHambState} hambState={hambState} />}/>
      </Routes>
        <Footer/>
    </Router>


    );
    
};