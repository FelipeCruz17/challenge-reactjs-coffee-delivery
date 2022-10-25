import { CoffeeList } from './components/CoffeeList'
import { HeroBanner } from './components/HeroBanner'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <HeroBanner />
      <CoffeeList />
    </HomeContainer>
  )
}
