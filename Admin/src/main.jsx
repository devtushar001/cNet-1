import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TShakyaContextProvider from './Context/TShakyContext.jsx';

createRoot(document.getElementById('root')).render(
  <TShakyaContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TShakyaContextProvider>

)
