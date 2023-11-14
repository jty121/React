import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './views/Home';
import News from './views/News';
import Contact from './views/Contact';
import NewsDetails from './views/NewsDetails';


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/news' element={<News />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/newsdetails' element={<NewsDetails />} /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
