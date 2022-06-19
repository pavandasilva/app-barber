import React, { ReactNode } from 'react'
import { Header } from '../../components'
import { Container, Content, Body } from './styles'

interface MainLayoutProps {
  title: string
  children: ReactNode
}

export const MainLayout = ({ title, children }: MainLayoutProps) => {
  return (
    <Container>
      <Content>
        <Header />
        <Body>
          {children}
        </Body>
      </Content>
    </Container>
  )
}
