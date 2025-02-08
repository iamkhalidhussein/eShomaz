import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/root-layout/root-layout';
import { UserProfile } from '@/pages/user-profile';
import { HomePage } from '@/pages/home-page';
import { SecureRoute } from '@/routes/secure-route';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SecureRoute><RootLayout/></SecureRoute>,
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