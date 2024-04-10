import { styled } from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: none;
  font-size: var(--XL);
  margin: 20px auto;
  transition: all .3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;
