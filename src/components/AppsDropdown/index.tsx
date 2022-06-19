import React from 'react'
import { FaBoxes } from 'react-icons/fa'
import { MdStore, MdLocalGroceryStore, MdForum, MdWeb } from 'react-icons/md'
import { Container, DivIcon } from './styles'

const AppsDropdown = () => {
  return (
    <Container>
      <DivIcon>
        <MdStore size='40px' />
        <span>Compras</span>
      </DivIcon>
      <DivIcon>
        <FaBoxes size='40px' />
        <span>Estoque</span>
      </DivIcon>
      <DivIcon>
        <MdLocalGroceryStore size='40px' />
        <span>Vendas</span>
      </DivIcon>
      <DivIcon>
        <MdForum size='40px' />
        <span>Forum</span>
      </DivIcon>
      <DivIcon>
        <MdWeb size='40px' />
        <span>Site</span>
      </DivIcon>
    </Container>
  )
}

export default AppsDropdown
