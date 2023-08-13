import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Meseges from './pages/Meseges';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/za1rbekov_Bekbolot123456789qwertyuiop" element = {<Meseges />}></Route>

    </Routes>
  </BrowserRouter>
);

