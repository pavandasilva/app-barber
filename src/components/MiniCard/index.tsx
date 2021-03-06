import React from 'react'
import { IconType } from 'react-icons'

import { Container } from './styles'

interface MiniCardProps {
  icon?: IconType
  title: string
  text: string
  mode: 'warning' | 'danger' | 'normal' | 'success' | 'info'
}

export const MiniCard = ({ icon: Icon, title, text, mode }: MiniCardProps) => {
  return (
    <Container mode={mode}>
      { Icon && <Icon />}
      <strong>{title}</strong>
      <p>{text}</p>
    </Container>)
}
