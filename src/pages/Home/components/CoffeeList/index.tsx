import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListGrid } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeListGrid>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListGrid>
    </CoffeeListContainer>
  )
}
