import React from 'react'
import { IconType } from 'react-icons'
import { Container, Content, Icon } from './styles'

export type VariantType = 'danger' | 'success' | 'warning' | 'normal' | 'info'
export type IconPosition = 'start' | 'end'

interface CardProps {
  title: string
  text: string
  icon: IconType
  footerPercent: number
  footerText: string
  variant: VariantType
  borderless?: boolean
  iconPosition?: IconPosition
}

export const Card = ({
  title,
  text,
  icon: CardIcon,
  footerPercent,
  footerText,
  variant,
  borderless = false,
  iconPosition = 'end'
}: CardProps) => {
  return (
    <Container borderless={borderless} iconPosition={iconPosition}>
      <div>
        { iconPosition === 'start' && (
          <Icon variant={variant}>
            <CardIcon size={20}/>
          </Icon>
        )}

        <Content iconPosition={iconPosition}>
          <h4>{title}</h4>
          <span>{text}</span>
        </Content>

        { iconPosition === 'end' && (
          <Icon variant={variant}>
            <CardIcon size={20}/>
          </Icon>
        )}

      </div>

      <footer>
        <span>{footerPercent}%</span>
        <p>{footerText.toLowerCase()}</p>
      </footer>
    </Container>
  )
}
