import styled from "styled-components";

export const TweetsListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > li {
    width: 100%;

    @media (min-width: 768px) {
      width: calc((100% - 80px) / 3);
      min-width: 380px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px;
  }
`;
