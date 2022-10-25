import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { CoffeeConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function SelectedCoffeeConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <CoffeeConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {cartQuantity <= 0 ? <span>0,00</span> : formattedCartTotal}
        </RegularText>
      </div>
      <Button
        text="Confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </CoffeeConfirmationSectionContainer>
  )
}
