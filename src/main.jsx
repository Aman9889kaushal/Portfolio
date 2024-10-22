import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
