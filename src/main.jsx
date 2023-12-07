import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Navbar />
</React.StrictMode>
  // <BrowserRouter>
  // <Route>
  //   <Link to="/">Home</Link>
  //   <Link to="/about">About</Link>
  //   <Link to="/contact">Contact</Link>
  // </Route>
  // </BrowserRouter>
)
