import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

interface Content {
  isVisible?: boolean
}

export const Content = styled.div<Content>`
  display: block;
  width:100%;
  height: (100vh - 50px);
  /* transition: all 500ms; */


  > div {
    transition: all 300ms;
    padding: ${props => props.isVisible ? '15px 15px 15px 90px' : '15px 15px 15px 50px'};

  }

  @media screen and (max-width: 720px) {
    margin-left: 0;
    > div {
      padding: 10px;
    }
  }

`

export const Body = styled.div`
  padding: 20px;

`
