import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'
import { SectionFormTitleContainer } from './styles'

interface SectionFormTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionFormTitle({
  title,
  subtitle,
  icon,
}: SectionFormTitleProps) {
  return (
    <SectionFormTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionFormTitleContainer>
  )
}
