import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { UserInfoProvider } from '@/provider/user-info-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId='82736dd7883b4f88bf8638e5b76f5bc7'
      domain='https://eshomaz.kinde.com'
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
    >
      <UserInfoProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
      </UserInfoProvider>
    </KindeProvider>
  </StrictMode>,
)
