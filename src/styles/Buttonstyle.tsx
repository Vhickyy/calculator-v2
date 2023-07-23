import styled from "styled-components"
export const Buttonstyle = styled.button`
  padding: 1.5rem 1.2rem;
  /* margin-top: 1rem; */
  border-radius: .6rem;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
  @media screen and (min-width:400px){
    padding-block: .8rem;
  }
`

export const InputbtnStyle = styled(Buttonstyle)`
  background-color: #dde1e7;
  color: rgb(58, 54, 54);
  box-shadow: -3px -3px 7px #ffffff70, 3px 3px 5px rgba(94, 104, 121, .288);
  &:hover{
    box-shadow: inset -3px -3px 7px #ffffff70, inset 3px 3px 5px rgba(94, 104, 121, .288);
  }
`
export const OperationbtnStyle = styled(Buttonstyle)`
  background-color:  #52d6fc;
  color: rgb(22, 122, 194);
  box-shadow: -3px -3px 7px #62ffff99,3px 3px 5px #42adcc;
  &:hover{
    box-shadow: inset -3px -3px 7px #62ffff, inset 3px 3px 5px #42adcc;
  }
`
