import React from 'react'
import { SideBarProvider } from '.'

export const Providers: React.FC = ({ children }) => {
  return (
    <SideBarProvider>
      {children}
    </SideBarProvider>
  )
}
