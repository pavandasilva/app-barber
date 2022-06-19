import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'react-icons'

import { Container } from './styles'

interface ButtonTableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType
  children?: ReactNode
  typeButton: 'danger' | 'primary' | 'secondary' | 'sucess' | 'normal'
}

export const ButtonTable = ({ icon: Icon, children, typeButton, color, ...rest }: ButtonTableProps) => {
  return (
    <Container {...rest} typeButton={typeButton}>{Icon && <Icon />}<p>{children && children}</p></Container>
  )
}
