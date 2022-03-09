import React from 'react'
import './healthy.css'
import foto1 from '../../img/comida_1.svg'
import foto2 from '../../img/comida_2.svg'
import foto3 from '../../img/comida_3.svg'
import foto4 from '../../img/comida_4.svg'

export default function Healthy() {
  return (
    <>
      <div className="healthy">
        <h1>Our Best Recipes</h1>
        <div className="text">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="foods">
          <div className="card">
            <div className="photo">
              <img src={foto1} className="foto" alt="bla" />
            </div>
            <div className="description">
              <p>Broccoli Salad with Bacon</p>
              <button>See Recipe</button>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={foto2} className="foto" alt="bla" />
            </div>
            <div className="description">
              <p>Classic Beef Burgers</p>
              <button>See Recipe</button>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={foto3} className="foto" alt="bla" />
            </div>
            <div className="description">
              <p>Classic Potato Salad</p>
              <button>See Recipe</button>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={foto4} className="foto" alt="bla" />
            </div>
            <div className="description">
              <p>Cherry Cobbler on the Grill</p>
              <button>See Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
