import styled from 'styled-components';

const buttonColor = "#ff7b44";

const Button = styled.a`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  border-radius: 45px;
  padding: .5em 2.1em;
  color: ${buttonColor};
  border: 2px solid ${buttonColor};
  background-color: #ffffff;
  transition: all .5s ease;
  width: fit-content;
  
  &:hover {
    padding: .5em 2.7em;
    background-color: ${buttonColor};
    color: #ffffff;
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`

export default Button;