import styled, { css } from 'styled-components'
import { adjustHue } from 'polished'
import { IconPosition, VariantType } from '.'
import { fadein } from '../../styles/animations'

interface CardStylesProps {
  borderless?: boolean
  iconPosition?: IconPosition
}

export const Container = styled.div<CardStylesProps>`
  background-color: ${props => props.theme.colors.backgroundLight};
  padding: 15px 20px;
  line-height: 1.5;
  width: calc((100% / 4) - 11.25px);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  ${props => props.iconPosition === 'start' && css`
    align-items: flex-start;
  `};


  ${props => !props.borderless && css`
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 5px;
  `}


  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  footer {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    font-size: 10px;

    span {
      color: green;
    }

    p {
      display: block;
      color: ${props => props.theme.colors.primaryText};
      margin-left: 5px;
      font-weight: 200;
    }
  }

  animation: ${fadein} 0.4s ease-in forwards;
`

export const Content = styled.div<CardStylesProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  min-height: 50px;

  ${props => props.iconPosition === 'start' && css`
    margin-left: 7px;
  `}

  h4 {
    display: block;
    color: ${props => props.theme.colors.secondaryText};
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 10px;
  }

  span {
    color: ${props => props.theme.colors.secondaryText};
    font-weight: 400;
    color: ${props => props.theme.colors.primaryText};
    letter-spacing: 1px;
    font-size: 14px;
  }
`

interface IconProps {
  variant: VariantType
}

export const Icon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;

  ${props => {
    let color = ''

    if (props.variant === 'danger') {
      color = props.theme.colors.danger
    } else if (props.variant === 'warning') {
      color = props.theme.colors.warning
    } else if (props.variant === 'normal') {
      color = props.theme.colors.primaryText
    } else if (props.variant === 'info') {
      color = props.theme.colors.info
    } else {
      color = props.theme.colors.sucess
    }

    return css`
      background: linear-gradient(87deg, ${color}, ${adjustHue(42, color)});
    `
  }};

  svg {
    fill: white;
  }
`
