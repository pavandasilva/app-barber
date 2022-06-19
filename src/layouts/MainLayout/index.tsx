import React, { ReactNode } from 'react'
import { SideMenu, Header } from '../../components'
import { useSideBar } from '../../contexts'
import { Container, Content, Body } from './styles'

interface MainLayoutProps {
  title: string
  children: ReactNode
}

export const MainLayout = ({ title, children }: MainLayoutProps) => {
  const { isVisible, isMobileVisible, setIsMobileVisible, setIsVisible } = useSideBar()

  const handleClickOutside = () => {
    if (isMobileVisible) {
      setIsVisible(state => !state)
      setIsMobileVisible(state => !state)
    }
  }

  return (
    <Container onClick={handleClickOutside}>
      <SideMenu />
      <Content isVisible={isVisible}>
        <Header />
        <Body>
          {children}
        </Body>
      </Content>
    </Container>
  )
}
