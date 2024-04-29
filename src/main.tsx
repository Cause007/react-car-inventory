import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <Auth0Provider
  domain='dev-7zthi23fgyod5f3p.us.auth0.com'
  clientId='83VZv6RPzVFm5ngbFqdMB4q7GxQvYGDH'
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </Auth0Provider>
)