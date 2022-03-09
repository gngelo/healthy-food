import React from 'react'
import './home.css'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="ready">
          <h1>Ready for Trying a new recipe?</h1>
          <div className="search">
            <input type="text" placeholder="Search healthy recipes" />
            <button type="button"></button>
          </div>
        </div>
      </div>
    </>
  )
}
