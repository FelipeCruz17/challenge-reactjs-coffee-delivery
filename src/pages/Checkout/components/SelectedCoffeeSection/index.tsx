import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { SelectedCoffeeCard } from '../SelectedCoffeeCard'
import { SelectedCoffeeConfirmationSection } from '../SelectedCoffeeConfirmationSection'
import { SelectedCoffeeSectionContainer, OrderDetailsContainer } from './styles'

export function SelectedCoffeeSection() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeeSectionContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <OrderDetailsContainer>
        {cartItems.map((item) => (
          <SelectedCoffeeCard key={item.id} coffee={item} />
        ))}
        <SelectedCoffeeConfirmationSection />
      </OrderDetailsContainer>
    </SelectedCoffeeSectionContainer>
  )
}
