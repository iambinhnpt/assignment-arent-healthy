import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Outlet, Link, BrowserRouter } from 'react-router-dom'

import TopPage from './pages/TopPage'
import Global from './styles/global'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import Record from './pages/Record'
import ColumnPage from './pages/Column'
import Layout from './pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path='record' element={<Record />} />
          <Route path='column' element={<ColumnPage />} />

          <Route path='*' element={<>404</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
