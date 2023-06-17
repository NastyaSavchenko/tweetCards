import styled, { keyframes } from "styled-components";

import bg from "../../Img/bg_img.png";

const anim = keyframes`
  0% {
    opacity: 0;
    filter: blur(30px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

export const MainSlyels = styled.main`
  min-height: calc(100vh - 64px);
  padding: 40px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  animation: ${anim} 1.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 140px;
  }

  > h1 {
    font-size: 35px;
    text-transform: uppercase;
    color: #211738;
    max-width: 200px;

    @media (min-width: 768px) {
      font-size: 55px;
      text-transform: uppercase;
      color: #211738;
      max-width: 400px;
    }
  }
`;
