import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId='82736dd7883b4f88bf8638e5b76f5bc7'
      domain='https://eshomaz.kinde.com'
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
    >
      <RouterProvider router={router}/>
    </KindeProvider>
  </StrictMode>,
)
