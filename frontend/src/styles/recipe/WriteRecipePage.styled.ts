import styled from 'styled-components'
import {
  breakpoints,
  palette,
  typography,
  weight,
} from '../../constants/Styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 10rem;
`

export const WrapIngredient = styled.div`
  width: 70%;
`

export const WrapQuitation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const QuotationButton = styled.button`
  font-size: ${typography.mobile.desc};
  margin: 2rem 2rem 2rem 0.2rem;

  ${breakpoints.large} {
    font-size: ${typography.web.desc};
  }
`

export const WrapForm = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 2rem;
`
export const Title = styled.span`
  font-size: ${typography.mobile.subTitle};
  font-weight: ${weight.subTitle};
  margin-bottom: 1.5rem;

  ${breakpoints.large} {
    font-size: ${typography.web.subTitle};
  }
`

export const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
`

export const Input = styled.input<{
  $width?: number
  $marginRi?: number
  $marginLf?: number
}>`
  width: ${props => props.$width || 100}%;
  border: 1px solid ${palette.divider};
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: ${typography.mobile.content};
  color: ${palette.textPrimary};
  margin-right: ${props => props.$marginRi || 0}rem;
  margin-left: ${props => props.$marginLf || 0}rem;

  &::placeholder {
    font-size: ${typography.mobile.content};
    color: ${palette.textDisablePlace};
  }

  ${breakpoints.large} {
    font-size: ${typography.web.content};

    &::placeholder {
      font-size: ${typography.web.content};
    }
  }
`

export const WrapItemInput = styled.div`
  width: 100%;
  display: flex;
`

export const DeleteItem = styled.button`
  margin-left: 1rem;
  font-size: ${typography.mobile.content};
  background-color: ${palette.dim};
  color: ${palette.white};
  padding: 1rem;
  border-radius: 1rem;

  ${breakpoints.large} {
    font-size: ${typography.web.content};
  }
`

export const ItemInput = styled.input<{ $width: number; $radius: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$width}%;
  border: 1px solid ${palette.divider};
  border-radius: ${props => props.$radius};
  font-size: ${typography.mobile.content};
  color: ${palette.textPrimary};
  padding: 1rem;

  ${breakpoints.large} {
    font-size: ${typography.web.content};
  }
`

export const AddButton = styled.button<{ $width: number }>`
  width: ${props => props.$width}%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.mobile.desc};
  padding: 0.4rem 1.2rem;
  border: 1px solid ${palette.divider};
  border-radius: 0.8rem;
  background-color: #f3f3f3;
  color: ${palette.textSecondary};

  ${breakpoints.large} {
    font-size: ${typography.web.desc};
  }
`

export const WrapDifficultyButton = styled.div`
  display: flex;
`

export const Difficulty = styled.button<{ $isActive?: boolean }>`
  font-size: ${typography.mobile.content};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  background-color: ${props => (props.$isActive ? palette.main : 'white')};
  color: ${props => (props.$isActive ? 'white' : palette.textPrimary)};
  font-weight: ${props => (props.$isActive ? 600 : 400)};
  border: 1px solid
    ${props => (props.$isActive ? palette.main : palette.divider)};

  ${breakpoints.large} {
    font-size: ${typography.web.content};
  }
`

export const WrapTime = styled.div`
  display: flex;
  align-items: center;
  font-size: ${typography.mobile.content};
  ${breakpoints.large} {
    font-size: ${typography.web.content};
  }
`

export const WrapOrder = styled.div`
  width: 90%;
  display: flex;
`

export const RequestButton = styled.button`
  width: 80%;
  background-color: ${palette.main};
  color: ${palette.white};
  font-size: ${typography.mobile.desc};
  font-weight: 800;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 2rem 0;

  ${breakpoints.large} {
    font-size: ${typography.web.desc};
  }
`

export const ErrorText = styled.span`
  font-size: ${typography.mobile.desc};
  color: ${palette.main};
  margin-top: 1rem;

  ${breakpoints.large} {
    font-size: ${typography.web.desc};
  }
`
