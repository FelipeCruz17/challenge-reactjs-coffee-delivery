import { InputQuantity } from '../../../../components/InputQuantity'
import { RegularText } from '../../../../components/Typography'
import {
  SelectedCoffeeCardContainer,
  ButtonsCoffeeCard,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface SelectedCoffeeCardProps {
  coffee: CartItem
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
  const { changeQuantityCartItems, removeCartItem } = useCart()

  function handleIncrease() {
    changeQuantityCartItems(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeQuantityCartItems(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
  }

  const totalCoffee = coffee.quantity * coffee.price
  const formattedPrice = formatMoney(totalCoffee)

  return (
    <SelectedCoffeeCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ButtonsCoffeeCard>
            <InputQuantity
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ButtonsCoffeeCard>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </SelectedCoffeeCardContainer>
  )
}
