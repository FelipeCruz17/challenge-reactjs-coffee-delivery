import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { InputQuantity } from '../../../../components/InputQuantity'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  CoffeeCardContainer,
  CoffeeCardTags,
  CoffeeCardName,
  CoffeeCardDescription,
  CoffeeCardFooter,
  AddCartButtonWrapper,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'

export interface CoffeeProps {
  id: number
  name: string
  tags: string[]
  description: string
  photo: string
  price: number
}

export interface CoffeeCardProps {
  coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <CoffeeCardTags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </CoffeeCardTags>
      <CoffeeCardName>{coffee.name}</CoffeeCardName>
      <CoffeeCardDescription>{coffee.description}</CoffeeCardDescription>
      <CoffeeCardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <AddCartButtonWrapper>
          <InputQuantity
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartButtonWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
