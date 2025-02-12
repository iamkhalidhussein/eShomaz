import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/root-layout/root-layout';
import { HomePage } from '@/pages/home-page';
import { SecureRoute } from '@/routes/secure-route';
import { UserProfileSkeleton } from '@/components/skeletons/user-profile-skeleton';

const UserProfile = lazy(() => import('@/pages/user-profile'));

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
                element: <Suspense fallback={<UserProfileSkeleton/>}><UserProfile/></Suspense>
            }
        ]
    },
]);