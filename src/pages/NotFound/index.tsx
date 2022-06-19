import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

export const NotFound = () => {
  return (
    <Container>
      <Content>
        <h1>404</h1>
        <p>A página que você está procurando não existe. Por favor, acesse alguma das páginas abaixo.</p>

        <div>
          <Link to={'/'}>DashBoard</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      </Content>

    </Container>
  )
}
