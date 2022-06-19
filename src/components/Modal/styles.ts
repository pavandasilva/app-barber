import styled from 'styled-components'
import { fadein } from '../../styles/animations'

export const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(0,0,0,.4);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadein} 0.3s forwards;
`
interface BoxModalProps {
  mode?: 'fullscreen' | 'normal'
}

export const BoxModal = styled.div<BoxModalProps>`
  border-radius: 4px;
  width: ${props => props.mode === 'fullscreen' ? '70%' : '720px'} ;
  height: ${props => props.mode === 'fullscreen' ? '95%' : 'fit-content'} ;
  max-height:100%;
  position: relative;
  background-color: ${props => props.theme.colors.backgroundLight};
  position: relative;
  padding: 0px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > div:nth-of-type(3) {
    overflow: hidden;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`

export const Header = styled.div`
  z-index: 999;
  top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height:10%;
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  padding-bottom: 15px;
  >h1 {
    font-size: 18px;
  }
  >button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    >svg {
      width: 24px;
      height: auto;
      color: ${props => props.theme.colors.secondaryText};
    }
    :hover{
      >svg {
        color: ${props => props.theme.colors.primaryText};
      }
    }
  }
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  padding: 15px 7px 15px 0px;
  background: ${props => props.theme.colors.backgroundLight};
  >div:nth-of-type(2){
    height:100%;
  overflow: auto;
  }
  /* img{
    max-height: 250px;
  } */
`
export const ContainerFooter = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  height: 10%;
  padding: 10px 0px 0px;
  display: flex;
  margin-top: 5px;
  border-top: 1px solid ${props => props.theme.colors.borderLight};
  width: 100%;

  > button + button {
    margin-left: 10px;

  }
`
