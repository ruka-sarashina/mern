import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { CreateBlog, DetailBlog, Home, Login, Register } from '../../pages'


const Routers = () => {
  return (

    // <Router>
    //   <Switch>
    //     <Route path='/login'>
    //       <Login />
    //     </Route>
    //     <Route path='/register'>
    //       <Register />
    //     </Route>
    //     <Route path='/'>
    //       <MainApp />
    //     </Route>
    //   </Switch>
    // </Router>

    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <p>Header</p> */}
      <Route path="/" element={<Home />}>
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="detail-blog" element={<DetailBlog />} />
      </Route>
      {/* <p>Footer</p> */}
    </Routes>
  </Router>
  )
}

export default Routers
