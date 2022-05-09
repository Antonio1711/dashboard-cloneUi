import React from 'react'
import img1 from '../../assets/images/login-img.svg'
import logo from '../../assets/images/logo.svg'
import { Button, Form } from 'react-bootstrap'

import './style.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/dashboard')
    }


    return (
        <div className='login-conteiner'>
            <div className="card">
                <div className="right-side">
                    <img src={logo} className='logo' alt='Logo da Tropa Digital' />
                    <Form>
                        <h2 className='login-title'>Bem Vindo ao <strong className='login-strong'>painel</strong></h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='login-input' type="email" placeholder="Digite seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='login-input' type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        <Button className='btn-login' onClick={onSubmit}>
                            Acessar
                        </Button>
                    </Form>
                </div>
                <div className="left-side">
                    <img src={img1} className='pc-img' alt='Imagem de uma pessoa mexendo em um notebook' />
                </div>
            </div>
        </div>
    )
}

export default Login