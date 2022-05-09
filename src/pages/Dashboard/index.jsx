import React from 'react'

import './style.css'
import { Button } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar'
import image from '../../assets/images/card-img.svg'
import icon from '../../assets/images/icon4.svg'

const Dashboard = () => {
  return (
      <div className='conteiner'>
        <Sidebar />

        <main>
          <h2>Olá <strong>Usuário</strong></h2>
          <hr />

          <div className="card-group">
            <div className="item">
              {/* <Button className='card-button' disabled>
                <img src={icon} />
                2min atrás
              </Button> */}
              <img className='card-img' src={image} alt='Foto de uma mulher em uma paisagem' />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
            <div className="item">
              <img className='card-img' src={image} alt='Foto de uma mulher em uma paisagem' />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
            <div className="item">
              <img className='card-img' src={image} alt='Foto de uma mulher em uma paisagem' />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
            <div className="item">
              <img className='card-img' src={image} alt='Foto de uma mulher em uma paisagem' />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
            <div className="item">
              <img className='card-img' src={image} alt='Foto de uma mulher em uma paisagem' />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
            <div className="item">
              <img className='card-img' src={image} alt='Foto de uma mulher em uma paisagem' />
              <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
          </div>
        </main>

      </div>
  )
}

export default Dashboard