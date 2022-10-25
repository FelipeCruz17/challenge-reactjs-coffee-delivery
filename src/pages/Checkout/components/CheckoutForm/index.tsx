import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { CheckoutAddressForm } from '../CheckoutAddressForm'
import { PaymentMethodSection } from '../PaymentMethodSection'
import { SectionFormTitle } from '../SectionFormTitle'
import { CheckoutFormContainer, FormSectionContainer } from './styles'

export function CheckoutForm() {
  const { colors } = useTheme()
  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionFormTitle
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <CheckoutAddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionFormTitle
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethodSection />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
