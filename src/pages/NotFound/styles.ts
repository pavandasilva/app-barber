import styled from 'styled-components'
import { fadein } from '../../styles/animations'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  animation: ${fadein} 0.6s forwards;

`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;

  h1 {
    font-size: 120px !important;
  }

  p {
    font-size: 14px;
  }

  > div {
    a + a {
      margin-left: 15px;
    }

    margin-top: 25px;
  }
`
