import { useContext, useState } from 'react'
import './App.css'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error';
import LandingPage from './pages/landing';
import AdminPage from './pages/admin';
import ActivatePage from './pages/activate';
import ShowPage from './pages/show';
import LoginPage from './pages/login';
import { AdminContext } from './context'
const ProtectedRoute = ({ auth }) => {
  return !!auth ? (
    <Outlet />
  ) : (
    <Navigate
      to={`../auth/login?current=${encodeURIComponent(window.location.pathname)}`}
    />
  );
};


function App() {
  const { state: { auth } } = useContext(AdminContext);
  return (
    <>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element: <Outlet />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <Navigate to="app" />
              },
              {
                path: 'app',
                children: [
                  {
                    index: true,
                    element: <LandingPage />,
                  },
                  {
                    path: "activate/:id",
                    element: <ActivatePage />,
                  },
                  {
                    path: "show/:id",
                    element: <ShowPage />,
                  },
                ]
              },
            ],
          },
          {
            path: "/mf0da2skn4nd82fmfpcrsa",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <Navigate to="dashboard" />
              },
              {
                path: 'dashboard',
                element: <ProtectedRoute auth={auth.authed} />,
                children: [
                  {
                    index: true,
                    element: <AdminPage />
                  }
                ]
              },
              {
                path: "auth/login",
                element: <LoginPage />
              }
            ]
          },
        ])
      } />
    </>
  )
}

export default App
