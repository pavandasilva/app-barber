import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { Spinner } from '..'
import { Container } from './styles'

export type ModeButton = 'primary' | 'secondary' | 'confirm' | 'cancel' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: IconType;
  children?: ReactNode;
  mode: ModeButton;
  active?: boolean
  showSpinner?: boolean
  iconOnly?: boolean
}

export const Button = ({ startIcon: Icon, children, mode, active, showSpinner, disabled, iconOnly = false, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} iconOnly startIcon= {!!Icon} mode={mode} active={active} disabled={showSpinner || disabled} showSpinner={showSpinner}>
      {showSpinner ? <Spinner/> : (Icon && <Icon/>)}{!showSpinner && <span>{children}</span>}
    </Container>)
}
