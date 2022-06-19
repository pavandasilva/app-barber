import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 8;
  display: box;
  max-width: 100%;
  padding: 7px 10px;
  margin-top: 5px;
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme.colors.backgroundLight};
  background-color: ${props => props.theme.colors.danger};
  border-radius: 4px;
`
