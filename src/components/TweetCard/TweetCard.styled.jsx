import styled from "styled-components";

import bg from "../../Img/card_img.png";

export const Card = styled.div`
  position: relative;
  max-width: 380px;
  width: 100%;
  padding: 28px 0px 36px;
  margin: 0 auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardBg = styled.div`
  max-width: 308px;
  width: 100%;
  height: 168px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
  background-image: url(${bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  > img {
    position: absolute;
    left: 20px;
    top: 20px;
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  height: 8px;
  margin-bottom: 62px;
  background: #ebd8ff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.06), inset 0px -2px 3px #ae7be3,
    inset 0px 3px 3px #fbf8ff;

  > div {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    background: #ebd8ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
    border-radius: 50px;

    > img {
      width: 62px;
      height: 62px;
      background: linear-gradient(
        114.99deg,
        #471ca9 -0.99%,
        #5736a3 54.28%,
        #4b2a99 78.99%
      );
      border-radius: 50px;
    }
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.ul`
  margin-bottom: 26px;
  text-align: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;

  > li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FollowChangeBtn = styled.button`
  padding: 14px 28px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background: ${(props) => (props.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
