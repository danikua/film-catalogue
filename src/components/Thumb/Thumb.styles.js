import { styled } from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.4s ease;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  @media screen and (min-width: 720px){
      &:hover {
      opacity: .8;
      scale: 1.05;
    }
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;