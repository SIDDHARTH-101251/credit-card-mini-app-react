// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CreaditCardContainer = styled.div`
  background-color: #3b4b69;
  width: 100%;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
  padding: 8%;
`

export const CreaditCardDetails = styled.div`
  background-color: #fff;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4%;
`
export const MainHeading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  color: #fff;
  text-align: center;
`

export const HorizontalRule = styled.hr`
  width: 40%;
  border-width: 2px;
  border-color: #ffd773;
`
export const CardImage = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 250px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  border: 0 solid;
  border-radius: 12px;
`

export const CardNumber = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #fff;
`

export const CardHolderNameText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #c3cad9;
  margin-top: 30px;
`

export const Name = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #fff;
  margin-top: 2px;
`

export const DetailsCard = styled.div`
  width: 90%;
  height: 250px;
  border: 0 solid;
  border-radius: 12px;
  box-shadow: 0px 4px 16px 0 #d3d9e0;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentMethodHeading = styled.h1`
  font-family: Roboto;
  font-size: 28px;
  color: #344e7a;
`

export const CardDetailsInputElement = styled.input`
  width: 90%;
  height: 36px;
  border: 1px solid #475569;
  padding: 6px;
  font-family: Roboto;
  font-size: 16px;
  margin-top: 10px;
  outline: none;
`
