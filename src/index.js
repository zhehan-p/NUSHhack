import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.js';
import Auth from './pages/auth.js';
import StudentsDB from './pages/StudentsDB.js';
import TeachersDB from './pages/TeachersDB.js';

const router = createBrowserRouter([
  {
    path: "/NUSHhack",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Auth",
    element: <Auth/>
  },
  {
    path: "/Students/Dashboard",
    element: <StudentsDB/>
  },
  {
    path: "/Teachers/Dashboard",
    element: <TeachersDB/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
