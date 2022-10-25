import { useTheme } from 'styled-components'
import { TextWithIcon } from '../../../../components/TextWithIcon'
import { RegularText } from '../../../../components/Typography'
import {
  HeroBannerContainer,
  HeroBannerContent,
  HeroBannerItems,
  HeroBannerTitle,
} from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import coffeeHeroBanner from '../../../../assets/coffee-banner.png'

export function HeroBanner() {
  const { colors } = useTheme()

  return (
    <HeroBannerContainer>
      <HeroBannerContent className="container">
        <div>
          <section>
            <HeroBannerTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </HeroBannerTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <HeroBannerItems>
            <p>
              <TextWithIcon
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
                iconBg={colors['brand-yellow-dark']}
              />
            </p>
            <p>
              <TextWithIcon
                icon={<Package weight="fill" />}
                text="Embalagem mantém o café intacto"
                iconBg={colors['base-text']}
              />
            </p>
            <p>
              <TextWithIcon
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
                iconBg={colors['brand-yellow']}
              />
            </p>
            <p>
              <TextWithIcon
                icon={<Coffee weight="fill" />}
                text="O café chega fresquinho até você"
                iconBg={colors['brand-purple']}
              />
            </p>
          </HeroBannerItems>
        </div>
        <img src={coffeeHeroBanner} alt="" />
      </HeroBannerContent>
    </HeroBannerContainer>
  )
}
