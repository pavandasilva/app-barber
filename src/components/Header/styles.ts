import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.backgroundLight};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  z-index: 2;
`
export const LeftContainer = styled.div`
  display:flex;
  align-items: center;
`
export const RightContainer = styled.div`
  display:flex;
  align-items: center;
  width: 15%;
`

interface DivLogoProps {
  isVisible: boolean
}

export const DivLogo = styled.div<DivLogoProps>`
  position: absolute;
  left: ${props => props.isVisible ? '-70px' : '20px'};
  transition: all 300ms;
  >a{
    >img{
      width: 45px;
      height: auto;
    }
  }
`

interface HamburgerStylesProps {
  mobileSideBarIsVisible?: boolean,
  sideBarIsVisible: boolean
}

export const Hamburger = styled.div<HamburgerStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 300ms;
  margin-left: 80px;

  &:hover {
    background-color: ${props => props.theme.colors.borderLight};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.secondaryText}
  }
`

export const DivApps = styled.div`
  display: flex;
  align-items:center;
  >div:first-of-type{
    cursor: pointer;
  }
`

interface AppDropProps {
  showDrop?: boolean
}

export const AppsDrop = styled.div<AppDropProps>`
  display: ${props => props.showDrop ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  right: 0;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.backgroundLight};
  z-index: 1;
  width: 30%;
  height: 300px;
  overflow:hidden;
`

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  align-items: flex-end;
  padding: 0px 5px;
  font-size: 15px;
  >div:first-of-type{
    cursor: pointer;
    >span{
      margin-right: 10px;
    }
    :hover{
      color: ${props => props.theme.colors.primary};
      >span{
        text-decoration: underline;
      }
    }
    .UserAvatar{
      border: none;
      border-radius: 50%;
    }
  }
`

interface AvatarDropProps {
  showDrop?: boolean
}

export const AvatarDrop = styled.div<AvatarDropProps>`
  display: ${props => props.showDrop ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  right: 0;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.backgroundLight};
  z-index: 1;
  width: 15%;
  overflow:hidden;
  >ul{
    list-style: none;
    >li{
      display:flex;
      justify-content: right;
      padding: 10px 15px;
      border-bottom: 1px solid ${props => props.theme.colors.borderLight};
      font-size: 15px;
      :hover{
        background-color: ${props => props.theme.colors.primary};
        color: white;
        text-decoration: underline;
      }
    }
  }
`
