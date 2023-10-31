// eslint-disable-next-line no-unused-vars
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import './index.css'

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
