import React, { useCallback, useState } from 'react'
import Swal from 'sweetalert2'
import { upperCaseFirstLetter } from '../../helpers'
import { Link, useHistory } from 'react-router-dom'
import Avatar from 'react-avatar'
import { useTheme } from 'styled-components'
import useOnClickOutside from 'react-cool-onclickoutside'
import { useSideBar } from '../../contexts'
import Logo from '../../assets/imgs/logo_brasao.png'
import { BsGrid3X3Gap } from 'react-icons/bs'
import {
  Container,
  Hamburger,
  AvatarDiv,
  AvatarDrop,
  DivLogo,
  LeftContainer,
  RightContainer,
  DivApps,
  AppsDrop
} from './styles'
import AppsDropdown from '../AppsDropdown'

export const Header = () => {
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false)
  const [openAppDropdown, setOpenAppDropdown] = useState(false)
  const ref = useOnClickOutside(() => { setOpenAvatarDropdown(false) })
  const { colors } = useTheme()
  const history = useHistory()
  const {
    toogle,
    isVisible: sideBarIsVisible,
    isMobileVisible: mobileSideBarIsVisible,
    toogleMobile
  } = useSideBar()

  const handleClickAvatar = () => {
    setOpenAvatarDropdown(state => !state)
  }

  const handleClickApps = () => {
    setOpenAppDropdown(state => !state)
  }

  const logout = () => {
    Swal.fire({
      title: 'Deseja sair da aplicação?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colors.primary,
      cancelButtonColor: colors.danger,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Loged Out!',
          'Você foi desconectado da aplicação.',
          'success'
        )
        /* Cookies.remove('Forum66Token') */
        history.push('./login')
      }
    })
  }

  const handleClickLogout = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    logout()
  }

  const handleHamburgerOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    toogle()
    toogleMobile()
  }, [toogle, toogleMobile])

  return (
    <Container>
      <LeftContainer>
        <DivLogo isVisible={sideBarIsVisible}><Link to={'/'}><img src={Logo} alt="route66" /></Link></DivLogo>
        <Hamburger
          onClick={handleHamburgerOnClick}
          mobileSideBarIsVisible={mobileSideBarIsVisible}
          sideBarIsVisible={sideBarIsVisible}
        >
          <svg viewBox="0 0 100 80">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </Hamburger>
      </LeftContainer>
      <RightContainer>
        <DivApps onClick={handleClickApps}>
          <div>
            <BsGrid3X3Gap size='35px' />
          </div>
          <AppsDrop showDrop={openAppDropdown}>
            <AppsDropdown />
          </AppsDrop>
        </DivApps>
        <AvatarDiv ref={ref}>
          <div onClick={handleClickAvatar}>
            <span>{upperCaseFirstLetter('usuario')}</span>
            <Avatar name={'Usuario'} className='UserAvatar' size='45px' maxInitials={2} />
          </div>
          <AvatarDrop showDrop={openAvatarDropdown}>
            <ul>
              <li onClick={handleClickLogout}>Logout</li>
            </ul>
          </AvatarDrop>
        </AvatarDiv>
      </RightContainer>
    </Container>
  )
}
