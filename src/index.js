import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,Routes , BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.css';
import 'animate.css';
import Navbar from './Navbar';
import Main  from "./Main";
import Footer  from "./Footer";
import Events from './Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/events" element={<Events />}/>
      </Routes>
      <Footer/>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
