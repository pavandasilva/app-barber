import styled from 'styled-components'
import { shade } from 'polished'

interface ContainerProps {
  typeButton?: 'danger' | 'primary' | 'secondary' | 'sucess' | 'normal'
}

export const Container = styled.button<ContainerProps>`
  user-select: none;
  border: none;
  border-radius: 4px;
  background-color: ${props => {
    let color
    if (props.typeButton === 'primary') {
      color = props.theme.colors.primary
    } else if (props.typeButton === 'danger') {
      color = props.theme.colors.danger
    } else if (props.typeButton === 'secondary') {
      color = props.theme.colors.secondary
    } else if (props.typeButton === 'sucess') {
      color = props.theme.colors.sucess
    } else if (props.typeButton === 'normal') {
      color = props.theme.colors.secondaryText
    }

    return color
  }};

  min-width: 50px;
  padding: 4px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: 12px;

  & + button {
    margin-left: 5px;
  }

  > svg {
    display: none;
  }

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0px;
    min-width: 10px;
    width: 26px;
    height: 26px;
    padding: 0px;

    > p {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      margin: 0 auto;
      display: block;
    }
  }

  &:hover {
    background-color: ${props => {
    let color = ''
    if (props.typeButton === 'primary') {
      color = props.theme.colors.primary
    } else if (props.typeButton === 'danger') {
      color = props.theme.colors.danger
    } else if (props.typeButton === 'secondary') {
      color = props.theme.colors.secondary
    } else if (props.typeButton === 'sucess') {
      color = props.theme.colors.sucess
    } else if (props.typeButton === 'normal') {
      color = props.theme.colors.secondaryText
    }

    return shade(0.2, color)
  }};
  }


`
