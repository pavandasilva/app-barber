import FocusTrap from 'focus-trap-react'
import React, { ReactNode, useCallback, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { Button } from '..'
import { BoxModal, Container, Header, ContainerFooter, Content } from './styles'

export type ModalMode = 'fullscreen' | 'normal'

interface ModalProps {
  title?: string
  children?: ReactNode
  buttonSaveText?: string
  buttonCancelText?: string
  showButtonSave?: boolean
  mode?: ModalMode
  close: () => void
  onSave?: () => void
}

export const Modal = ({ title, children, buttonSaveText, buttonCancelText, showButtonSave, mode = 'normal', close, onSave }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => { document.body.style.overflow = 'unset' }
  }, [])

  const handleSaveButtonClick = useCallback(() => {
    onSave && onSave()
    close()
  }, [close, onSave])

  const handleOnKeyDown = useCallback(async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

  return (
    <FocusTrap>
      <Container onKeyDown={handleOnKeyDown}>
        <BoxModal mode={mode}>
          <Content>
            <Header>
              <h1>{title && title}</h1>
              <button onClick={close}><FiX tabIndex={12} /></button>
            </Header>
            <div>
              {children}
            </div>
            <ContainerFooter>
              <Button tabIndex={10} mode="cancel" onClick={close}>{buttonCancelText || 'Cancelar'}</Button>
              {showButtonSave && <Button tabIndex={11} mode="confirm" onClick={handleSaveButtonClick}>{buttonSaveText || 'Salvar'}</Button>}
            </ContainerFooter>
          </Content>
        </BoxModal>
      </Container>
    </FocusTrap>

  )
}
