import React, { ReactNode } from 'react'

import { Container } from './styles'

interface ToolTipProps {
  children: ReactNode
}

export const ToolTip = ({ children }: ToolTipProps) => {
  return <Container>{children}</Container>
}
