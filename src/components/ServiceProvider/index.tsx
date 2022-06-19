import React from 'react'
import { Stars } from '..'
import Michael from '../../assets/imgs/michael.jpg'
import { Description } from '../Header/styles'

import { Container, Picture, Card } from './styles'

export const ServiceProvider = () => {
  return (
    <Container>
      <Card>
        <Picture>
          <img src={Michael} alt='michael-foto' />
        </Picture>
        <Description>
          <h2>Michael Ferreira</h2>
          <Stars />
        </Description>
      </Card>
    </Container>
  )
}
