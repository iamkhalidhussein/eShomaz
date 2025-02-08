import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/root-layout/root-layout';
import { UserProfile } from '@/pages/user-profile';
import { HomePage } from '@/pages/home-page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/profile',
                element: <UserProfile/>
            }
        ]
    },
]);