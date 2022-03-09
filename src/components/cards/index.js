import React from 'react'

import recipes1 from '../../img/bloco_image_1.svg'
import recipes2 from '../../img/bloco_image_2.svg'
import recipes3 from '../../img/bloco_image_3.svg'
import recipes4 from '../../img/bloco_image_4.svg'

import './card.css'

export default function Card() {
  return (
    <>
      <div className="card-recipes">
        <div className="phot">
          <img src={recipes1} alt="recipes1" />
        </div>
        <div className="descript">
          <p>Quick-start guide to nuts and seeds</p>
          <button>See Recipe</button>
        </div>
      </div>
      <div className="card-recipes">
        <div className="phot">
          <img src={recipes2} alt="recipes2" />
        </div>
        <div className="descript">
          <p>Nutrition: Tips for Improving Your Health</p>
          <button>See Recipe</button>
        </div>
      </div>
      <div className="card-recipes">
        <div className="phot">
          <img src={recipes3} alt="recipes3" />
        </div>
        <div className="descript">
          <p>The top 10 benefits of eating healthy</p>
          <button>See Recipe</button>
        </div>
      </div>
      <div className="card-recipes">
        <div className="phot">
          <img src={recipes4} alt="recipes4" />
        </div>
        <div className="descript">
          <p>What M Health</p>
          <button>See Recipe</button>
        </div>
      </div>
    </>
  )
}
