import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import GameStart from './pages/GameStart/index.jsx';
import Story from './pages/Story/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <React.StrictMode>
        <App />
    </React.StrictMode>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <GameStart />,
      },
      {
        path: '/story',
        element: <Story />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
