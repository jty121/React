import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './views/Home';
import News from './views/News';
import Contact from './views/Contact';
import NewsDetails from './views/NewsDetails';
import PageNotFound from './views/PageNotFound';


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/news' element={<News />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/newsdetails' element={<NewsDetails />} /> 
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
