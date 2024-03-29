import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';

import HomePage from './routes/home.page';
import ProfilePage from './routes/profile.page';
import FriendsPage from './routes/friends.page';
import LoginSuccess from './routes/login-success';
import ErrorPage from './utils/error-page';
import './index.css';

axios.defaults.withCredentials = true;

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: 'login-success',
    element: <LoginSuccess />,
  },
  {
    path: '/profile/:userID',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/friends/:userID',
    element: <FriendsPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
