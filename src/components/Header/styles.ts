import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;
  width: 100%;
  height: 4rem;
  background: ${props => props.theme.colors.backgroundLight};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  z-index: 2;
`
export const PictureWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.3rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

`

export const Description = styled.div`
  margin-left: 0.3rem;
  width: 100%;
  background: ${props => props.theme.colors.backgroundLight};
`
