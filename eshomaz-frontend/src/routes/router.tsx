import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Profile } from '@/components/profile/profile';
import { userData } from '@/data/mock-data';
import { RootLayout } from '@/root-layout/root-layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
                path: '/profile',
                element: <Profile user={userData} onEditClick={() => true}/>
            }
        ]
    },
]);