import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

interface InputContainerProps {
  isActive: boolean;
  error?: string;
  hasStartIcon?: boolean;
  disabled?: boolean;
  hasf2?: boolean;
}

interface WrapperProps {
  width?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex: ${props => props.width ? props.width : 1};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px;
`

export const Label = styled.span<InputContainerProps>`
  display: flex;
  align-self: flex-start;
  opacity: ${props => (props.isActive ? '1' : 0)};
  color: ${props => props.theme.colors.primaryText} !important;
  transition: opacity 0.4s;
  margin: 5px 0px;
`

export const Container = styled.div<InputContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 36px;
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 4px;

  svg:first-of-type {
    fill: ${props => props.theme.colors.primaryText};
    width: 14px;
    height: 14px;
    transition: fill 0.4s;
  }

  input {
    display: flex;
    flex: 1;
    height: 100%;
    border: none;
    background: ${props => {
      let backgroundColor = 'transparent'

      if (props.disabled) {
        backgroundColor = transparentize(0.8, props.theme.colors.borderLight)
      } else if (props.hasf2) {
        backgroundColor = transparentize(0.97, 'yellow')
      }
      return backgroundColor
    }};

    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0px 26px 0px 20px;
    z-index: 5;
    width: 100%;

    ${props => {
      let color
      let borderColor = 'transparent'

      if (props.error) {
        color = props.theme.colors.danger
        borderColor = transparentize(0.9, props.theme.colors.danger)
      } else if (props.isActive) {
        color = props.theme.colors.info
        borderColor = transparentize(0.7, props.theme.colors.info)
      } else {
        color = props.theme.colors.border
      }

      return css`
        border: 1px solid ${color};
        box-shadow: 0px 0px 0px 3px ${borderColor};
      `
    }};

    border-left: ${props => props.hasStartIcon && 'none'} ;

    color: ${props =>
      props.isActive ? props.theme.colors.secondary
      : props.theme.colors.secondaryText
    };

    ${props => !props.hasStartIcon && css`
        border-radius: 4px;
    `}
  }
`

interface InputIconPasswordProps {
  showPassword?: boolean;
}

export const IconPassword = styled.div<InputIconPasswordProps>`
  cursor: pointer;
  position: absolute;
  right: 15px;
  z-index: 8;

  > svg {
    fill: ${props =>
      props.showPassword
        ? props.theme.colors.secondaryText
        : props.theme.colors.background} !important;
  }
`
interface IconError {
  error?: string
}

export const IconError = styled.div<IconError>`
  position: absolute;
  display: flex;
  right: 7px;
  z-index: 8;
  width: 20px !important;

  > svg {
    fill: ${props => props.theme.colors.danger} !important;
  }
`
export const Icon = styled.div<InputContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border: solid 1px ${props => props.theme.colors.border};

  ${props => {
    let color = props.theme.colors.border

    if (props.error) {
      color = props.theme.colors.danger
    } else if (props.isActive) {
      color = props.theme.colors.info
    }

    return css`
      border-right: solid 1px ${color};
    `
  }};
`
