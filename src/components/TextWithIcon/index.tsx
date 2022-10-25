import { ReactNode } from 'react'
import { Container, IconContainer } from './styles'

interface TextWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function TextWithIcon({ icon, iconBg, text }: TextWithIconProps) {
  return (
    <Container>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </Container>
  )
}
