import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import { Cricket } from './components/Cricket';
import Trending from './components/Trending';
import SignIn from './components/login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const getLayout = ()=>{
  return <>
    <Sidebar/>
    <Outlet/>
  </>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: getLayout(),
    errorElement: <div>Error</div>,
    children: [
      
      {
        path: "/",
        element: <SignIn/>
      },
      {
        path: "/login",
        element: <SignIn/>
      },
      {
        path: "/trending",
        element: <Trending/>
      },
      {
        path: "/cricket",
        element: <Cricket />,
       
      }
    ],
  },
  
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
