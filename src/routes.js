import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Healthy from './pages/healthy'
import Blog from './pages/blog'
import Join from './pages/join'
import Register from './pages/register'
import BlogDetails from './pages/blogDetails'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/healthy" element={<Healthy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/join" element={<Join />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blogDetails" element={<BlogDetails />} />
    </Routes>
  )
}
