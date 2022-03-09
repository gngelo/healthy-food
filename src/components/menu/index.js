import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

export default function Menu() {
  return (
    <nav>
      <div className="title">
        <Link to={'/'}>
          <h2>Healthy Food</h2>
        </Link>
      </div>
      <div className="links">
        <div>
          <Link to={'/healthy'}>HEALTHY RECIPES</Link>
        </div>

        <div>
          <Link to={'/blog'}>BLOG</Link>
        </div>

        <div>
          <Link to={'/join'}>JOIN</Link>
        </div>
        <div>
          <Link to={'/register'}>
            <button className="button" type="submit">
              REGISTER
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
