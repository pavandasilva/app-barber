import styled from 'styled-components'
import { fadein } from '../../styles/animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  width: 100%;
  animation: ${fadein} 0.6s forwards;

 > section:nth-of-type(1) {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;

    > div + div {
      margin-left: 15px;
    }

    @media screen and (max-width: 720px) {
      > div + div {
        margin-left: 0px;
      }
    }
  }

  > section:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: calc(100% - 5px);
  }
`
