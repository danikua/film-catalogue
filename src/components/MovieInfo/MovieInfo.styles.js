import { styled } from "styled-components";

import {BACKDROP_SIZE, IMAGE_BASE_URL} from '../../config';

export const Wrapper = styled.div`
  background: ${({backdrop}) => {
    return backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
  }};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animationMovieInfo 1s;

  @keyframes animationMovieInfo {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 0 1 50%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px){
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  display: flex;
  flex: 0 1 50%;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  justify-content: start;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #fff;
  color: #000;
  font-weight: 800;
  border-radius: 50%;
  margin:  none;
`;

export const Directors = styled.div`
  margin: 0 0 0 40px;

  p {
    margin: none;
  }

  h1 {
    @media screen and (max-width: 768px){
      font-size: var(--fontXL);
    }
  }
`;
