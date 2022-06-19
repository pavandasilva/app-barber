import styled from 'styled-components'
import { lighten, darken } from 'polished'

interface ContainerProps {
  isVisible?: boolean
  isMobileVisible?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: ${props => props.isVisible ? '0px' : '-70px'};
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  width: 70px;
  transition: all 300ms;
  user-select: none;
  z-index: 1000;

  @media screen and (max-width: 720px) {
    opacity: ${props => props.isMobileVisible ? 1 : 0};
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.50);
  }

`

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  >a{
    img {
      margin: 5px 0px 0px;
      width: 45px;
      height: auto;
    }
  }
  &:hover {
    background: ${props => darken(0.08, props.theme.colors.primary)};
  }

  &.selected{
    background-color: ${props => darken(0.08, props.theme.colors.primary)};
  }
`

export const Nav = styled.ul`
  list-style: none;
  padding: 0px;
  width: 100%;
`

export const ItemNav = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  height: 70px;

  &:hover {
    background: ${props => darken(0.08, props.theme.colors.primary)};
  }

  svg {
    fill: ${props => lighten(0.3, props.theme.colors.primary)};
  }

  span {
    margin-top: 7px;
    color: ${props => lighten(0.3, props.theme.colors.primary)};
    font-size: 10px;
    letter-spacing: 0.075em;
  }

  &.selected{
    background-color: ${props => darken(0.08, props.theme.colors.primary)};
  }
`
