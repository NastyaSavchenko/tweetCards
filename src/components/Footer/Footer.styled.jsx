import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  padding: 30px;
  width: 100%;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  color: #6a45a7;
  box-shadow: 0 0 13px 3px #5736a3;

  > div {
    align-items: center;
    display: flex;
    gap: 10px;
  }
`;

export const Icon = styled(BsGithub)`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  fill: #6a45a7;
  transition: fill 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 0 3px 1px #5736a3;
  }
`;
