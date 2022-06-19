import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from 'styled-components'
import michael from '../../assets/imgs/michael.jpg';
import { Container, PictureWrapper, Description } from './styles'

export const Header = () => {
  const { colors } = useTheme()
  const history = useHistory()

  return (
    <Container>
      <PictureWrapper>
        <img src={michael} alt='corte-cabelo' />
      </PictureWrapper>
      <Description>
        <h2>Agendamento</h2>
        <p>Corte e Barba</p>
      </Description>
    </Container>
  )
}
