/* eslint-disable react/display-name */
import { InputMethodPaymentContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type InputMethodPaymentProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const InputMethodPayment = forwardRef<
  HTMLInputElement,
  InputMethodPaymentProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <InputMethodPaymentContainer>
      <input id={id} type="radio" name="paymentMethod" {...props} ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </InputMethodPaymentContainer>
  )
})
