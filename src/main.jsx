import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#9d494a] min-h-[100vh] flex justify-center items-center font-system-ui'>
    <App />
    </div>
  </React.StrictMode>,
)
