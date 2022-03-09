import React from 'react'
import './join.css'

export default function Join() {
  return (
    <>
      <div className="join">
        <div className="ready">
          <h1>Join our membership to get special offer</h1>
          <div className="email">
            <input type="email" placeholder="Enter your email address" />
            <button type="button">Join</button>
          </div>
        </div>
      </div>
    </>
  )
}
