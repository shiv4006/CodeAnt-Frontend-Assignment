import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layouts/AppLayout';
import { LogIn } from './pages/LogIn'
import { Error } from './components/Error'
import { Repositories } from './pages/Repositories';
import { CodeReview } from './pages/CodeReview';
import { HowToUse } from './pages/HowToUse';
import { CloudSecurity } from './pages/CloudSecurity';
import { Settings } from './pages/Settings';
import { Support } from './pages/Support';
import { Logout } from './pages/Logout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />, // Default to Login Page
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/app",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/app/repositories",
          element: <Repositories />,
        },
        {
          path: "/app/codereview",
          element: <CodeReview />,
        },
        {
          path: "/app/cloudsecurity",
          element: <CloudSecurity />,
        },
        {
          path: "/app/howtouse",
          element: <HowToUse />,
        },
        {
          path: "/app/settings",
          element: <Settings />,
        },
        {
          path: "/app/support",
          element: <Support />,
        },
        {
          path: "/app/logout",
          element: <Logout />,
        },
      ],
    },
  ]);

  return <RouterProvider router = {router} />;
}

export default App
