import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Component/Signup';
import Login from './Component/Login';
import { Route, Routes } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    <Signup/>
    <Login/>
    </>
  </React.StrictMode>
);
<browserRouter>
<Routes>
  <Route>
    
  </Route>
</Routes>
</browserRouter>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
