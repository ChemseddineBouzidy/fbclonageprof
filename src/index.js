import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lsiderbar from './components/Lsiderbar/Lsiderbar'
import Navbar from './components/Navbar/Navbar';
import Rsidebar from './components/Rsidebar/Rsidebar';
import Content from './components/Content/Content';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="wrapper">
    <Lsiderbar />
    <Content />
    <Rsidebar />
    </div>
    
   
    


    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
