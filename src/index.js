import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Load from './Load';
import App from './Validation/App';
import Dashboard from './Dashboard';
import Login from './Validation/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route,Routes} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Load/>}/>
      <Route path='/sign' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
