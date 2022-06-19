import React, { HTMLAttributes, useCallback } from 'react'
import { FiX } from 'react-icons/fi'
import { Container, Close } from './styles'

export type mode = 'normal' | 'danger' | 'spotlight'
interface TabProps extends HTMLAttributes<HTMLDivElement>{
  selected?: boolean
  showCloseButton?: boolean
  onClose?: () => void
  title?: string
  mode?: mode
}

export const Tab = ({ selected = false, title, showCloseButton = false, onClose, mode = 'normal', ...rest }: TabProps) => {
  const handleOnClose = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClose && onClose()
  }, [onClose])

  return (
    <Container {...rest} selected={selected} mode={mode} >
      {title && <p>{title}</p>}
      {showCloseButton && (
        <Close onClick={handleOnClose}>
          <FiX />
        </Close>)
      }
    </Container>
  )
}
