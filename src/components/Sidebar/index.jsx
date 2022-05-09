import React from 'react'

import './style.css'
import { Button } from 'react-bootstrap'
import logo from '../../assets/images/logo.svg'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className="sidebar-logo" src={logo} alt='Logo da companhia' />
      <ul>
        <li>
          <Button className='btn-sidebar btn-disable' disabled>
            <img className='sidebar-icon' src={icon1} alt='icone de um gráfico de barras' />
            Início
          </Button>
        </li>
        <li>
          <Button className='btn-sidebar'>
            <img className='sidebar-icon' src={icon2} alt='icone de uma planilha' />
            Contatos
          </Button>
        </li>
        <li>
          <Button className='btn-sidebar'>
            <img className='sidebar-icon' src={icon3} alt='icone de um gráfico de linha' />
            Relatórios
          </Button>
        </li>
        <li>
          <Button className='btn-sidebar'>
            <img className='sidebar-icon' src={icon2} alt='icone de uma planilha' />
            Contatos
          </Button>
        </li>
        <li>
          <Button className='btn-sidebar'>
            <img className='sidebar-icon' src={icon2} alt='icone de uma planilha' />
            Contatos
          </Button>
        </li>
        <li>
          <Button className='btn-sidebar'>
            <img className='sidebar-icon' src={icon2} alt='icone de uma planilha' />
            Contatos
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar