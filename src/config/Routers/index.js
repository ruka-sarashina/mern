import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CreateBlog, DetailBlog, Home, Login, MainApp, Register } from '../../pages'


const Routers = () => {
  return (

    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainApp />}>
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="detail-blog" element={<DetailBlog />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default Routers
