import React, { createContext, useCallback, useContext, useState } from 'react'

interface SideBarContextState {
  isVisible: boolean
  toogle (): void
  isMobileVisible: boolean
  toogleMobile (): void
  setIsMobileVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBarContext = createContext<SideBarContextState>({} as SideBarContextState)

export const useSideBar = (): SideBarContextState => {
  const context = useContext(SideBarContext)

  if (!context) {
    throw new Error('useSideBar deve ser usado com SideBarContext')
  }

  return context
}

export const SideBarProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileVisible, setIsMobileVisible] = useState(false)

  const toogle = useCallback(() => {
    setIsVisible(state => !state)
  }, [])

  const toogleMobile = useCallback(() => {
    setIsMobileVisible(state => !state)
  }, [])

  return (
    <SideBarContext.Provider value={{ isVisible, toogle, isMobileVisible, toogleMobile, setIsVisible, setIsMobileVisible }} >
      {children}
    </SideBarContext.Provider>
  )
}
