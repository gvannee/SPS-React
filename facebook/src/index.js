import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Newsfeed from './views/Newsfeed/Newsfeed';
import Home from './views/Hompage/Home';
import { DataLengthProvider } from './context/DataLength';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//     path: '/newsfeed',
//     element: <Newsfeed />,
//   },
//   {
//     path: '/',
//     element: <Home />
//   }
// ])
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
        <App />
    

    </BrowserRouter>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

