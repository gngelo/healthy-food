import React from 'react'
import { Link } from 'react-router-dom'

import './blog.css'

export default function Blog() {
  return (
    <>
      <div className="blog">
        <div div className="conteudo">
          <h1>The best services ready To serve you</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="btmBlog">
            <Link to={'/blogdetails'}>
              <button>Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
