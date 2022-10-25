import { RegularText, TitleText } from '../../components/Typography'
import { SuccessPageContainer, OrderInfoContainer } from './styles'

import motorcycle from '../../assets/motorcycle.svg'
import { TextWithIcon } from '../../components/TextWithIcon'

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PaymentMethodSection'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <SuccessPageContainer className="container">
      <div>
        <TitleText>Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderInfoContainer>
          <TextWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>{' '}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <TextWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <TextWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />{' '}
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderInfoContainer>
        <img src={motorcycle} alt="" />
      </section>
    </SuccessPageContainer>
  )
}
