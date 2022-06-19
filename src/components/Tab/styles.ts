import styled, { css } from 'styled-components'
import { mode } from '.'

interface ContainerProps {
  selected: boolean,
  mode?: mode
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 35px;
  max-width: 210px;
  min-width: 100px;
  width: auto;
  padding: 15px;
  border: 1px solid ${props => props.theme.colors.border};
  border-bottom-color: ${props => props.theme.colors.backgroundLight};
  transition: background-color 0.4s ease;

  ${props => {
    const mode = props.mode
    let backgroundColor = props.theme.colors.borderLight
    let color = props.theme.colors.secondaryText

    if (mode === 'danger') {
      backgroundColor = props.theme.colors.danger
      color = props.theme.colors.backgroundLight
    } else {
      backgroundColor = props.theme.colors.borderLight
      color = props.theme.colors.primaryText
    }

    if (props.selected) {
      backgroundColor = props.theme.colors.backgroundLight
      color = props.theme.colors.primaryText
    }

    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `
  }};

  cursor: pointer;
  margin-right: 4px;
  letter-spacing: 0.075em;
  user-select: none;

  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }

  &:first-of-type {
    width: 170px;
    margin-left: 0px;

  }
`
export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  top: 2px;
  height: 18px;
  width: 18px;
  transition: all 0.4s;

  > svg {
    width: 16px;
    height: 16px;
    fill: red !important;
  }

  &:hover {
    background-color: ${props => props.theme.colors.borderLight};
    border-radius: 50%;
  }
`
