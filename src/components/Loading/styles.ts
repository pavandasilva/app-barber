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
  animation: ${fadein} 0.5s forwards;
`
