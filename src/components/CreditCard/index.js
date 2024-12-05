// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreaditCardContainer,
  CreaditCardDetails,
  MainHeading,
  HorizontalRule,
  CardImage,
  CardNumber,
  CardHolderNameText,
  Name,
  DetailsCard,
  PaymentMethodHeading,
  CardDetailsInputElement,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNum(event.target.value)
  }

  const onChangeCardHolderName = event => {
    setCardName(event.target.value)
  }

  return (
    <MainContainer>
      <CreaditCardContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <HorizontalRule />
        <CardImage data-testid="creditCard">
          <CardNumber>{cardNum}</CardNumber>
          <CardHolderNameText>CARDHOLDER NAME</CardHolderNameText>
          <Name>{cardName.toUpperCase()}</Name>
        </CardImage>
      </CreaditCardContainer>
      <CreaditCardDetails>
        <DetailsCard>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <CardDetailsInputElement
            placeholder="Card Number"
            value={cardNum}
            onChange={onChangeCardNumber}
          />
          <CardDetailsInputElement
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeCardHolderName}
          />
        </DetailsCard>
      </CreaditCardDetails>
    </MainContainer>
  )
}

export default CreditCard
