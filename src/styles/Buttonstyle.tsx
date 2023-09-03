import styled from "styled-components"
export const Buttonstyle = styled.button`
  padding: 1.3rem 1.2rem;
  border-radius: .6rem;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
  @media screen and (min-width:400px){
    padding-block: 1.2rem;
  }
`

export const InputbtnStyle = styled(Buttonstyle)`
  background-color: var(--backgroundColor);
  color: var(--textColor);
  box-shadow: var(--btnShadow);
  &:hover{
    box-shadow: var(--btnHoverShadow);
  }
`
export const OperationbtnStyle = styled(Buttonstyle)`
  /* background-color:  #52d6fc; */
  background-color:  #396ae6;
  /* color: rgb(22, 122, 194); */
  color: #ffffff;
  box-shadow: -3px -3px 3px #305ac4,3px 3px 3px #427aff;
  &:hover{
    box-shadow: inset -3px -3px 7px #427aff, inset 3px 3px 5px #305ac4;
  }
`
