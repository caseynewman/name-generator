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
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }} />
);
