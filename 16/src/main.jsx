import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupStore } from './store/index'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </StrictMode>,
)
