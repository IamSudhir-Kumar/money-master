import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Header/Navbar'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css'
import Home from './components/Pages/Home'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Navbar />
<Home />
<Footer />
</React.StrictMode>
  // <BrowserRouter>
  // <Route>
  //   <Link to="/">Home</Link>
  //   <Link to="/about">About</Link>
  //   <Link to="/contact">Contact</Link>
  // </Route>
  // </BrowserRouter>
)
