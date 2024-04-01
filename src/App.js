import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayoutComponent = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const data = {
            name: 'Ronit Singh'
        };
        setUser(data.name);

    }, []);
    return (
        <UserContext.Provider value={{loggedInUser: user, setUser}}>
            <div className='app' >
                <Header />
                <Outlet />
            </div >
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayoutComponent />,
        children: [
            {
                path: '/',
                element: <Body />
            }, {
                path: '/about',
                element: <About />
            }, {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />
                </Suspense>
            }, {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);