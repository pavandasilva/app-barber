import React, { useCallback, useEffect, useState } from 'react'
import { FaBoxes } from 'react-icons/fa'
import { MdStore, MdLocalGroceryStore, MdForum, MdWeb } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/imgs/logo_brasao.png'
import { useSideBar } from '../../contexts'
import { Container, Nav, ItemNav, DivLogo } from './styles'

export const SideMenu = () => {
  const { push, location } = useHistory()
  const [itemSelected, setItemSelected] = useState('')

  const handleOnClickMenuItem = useCallback((item) => {
    /* push('/' + item) */
    push('/')
  }, [push])

  const { isVisible, isMobileVisible } = useSideBar()

  useEffect(() => {
    if (location.pathname === '/') {
      setItemSelected('home')
    } else if (location.pathname === '/compras') {
      setItemSelected('compras')
    } else if (location.pathname === '/estoque') {
      setItemSelected('estoque')
    } else if (location.pathname === '/vendas') {
      setItemSelected('vendas')
    } else if (location.pathname === '/forum') {
      setItemSelected('forum')
    } else if (location.pathname === '/site') {
      setItemSelected('site')
    }
  }, [location])

  return (
    <Container isVisible={isVisible} isMobileVisible={isMobileVisible}>
      <DivLogo className={itemSelected === 'home' ? 'selected' : ''}>
        <Link to={'/'}><img src={Logo} alt="route66" /></Link>
      </DivLogo>
      <Nav>
        <ItemNav
          tabIndex={0}
          className={itemSelected === 'compras' ? 'selected' : ''}
          onClick={() => handleOnClickMenuItem('compras')}>
          <MdStore size={27} />
          <span>Compras</span>
        </ItemNav>
        <ItemNav
          tabIndex={1}
          className={itemSelected === 'estoque' ? 'selected' : ''}
          onClick={() => handleOnClickMenuItem('estoque')}>
          <FaBoxes size={27} />
          <span>Estoque</span>
        </ItemNav>
        <ItemNav
          tabIndex={2}
          className={itemSelected === 'vendas' ? 'selected' : ''}
          onClick={() => handleOnClickMenuItem('vendas')}>
          <MdLocalGroceryStore size={27} />
          <span>Vendas</span>
        </ItemNav>
        <ItemNav
          tabIndex={3}
          className={itemSelected === 'forum' ? 'selected' : ''}
          onClick={() => handleOnClickMenuItem('forum')}>
          <MdForum size={27} />
          <span>Forum</span>
        </ItemNav>
        <ItemNav
          tabIndex={3}
          className={itemSelected === 'site' ? 'selected' : ''}
          onClick={() => handleOnClickMenuItem('site')}>
          <MdWeb size={27} />
          <span>Site</span>
        </ItemNav>
      </Nav>
    </Container >
  )
}
