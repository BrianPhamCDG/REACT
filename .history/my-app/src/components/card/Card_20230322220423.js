import React from "react";
import styled, { css } from "styled-components";

const StyleCard = styled.div`
  position: relative;
  /* width: 400px; */
`;
const CardImageWrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  background: white;
  width: calc(100% - 36px);
  overflow: hidden;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 100rem;
`;
const UserName = styled.span`
  font-weight: 300;
  font-style: 16px;
  color: #333;
`;
const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const UserHeart = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 100rem;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;
const CardAmount = styled.span`
  font-style: 18px;
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgba(186, 78, 97, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        90deg,
        rgba(186, 78, 917, 1) 0%,
        rgba(253, 292, 29, 1) 80%,
        rgba(252, 176, 695, 1) 70%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Card = (props) => {
  return (
    <StyleCard>
      <CardImageWrapper>
        <CardImage
          src="https://images.unsplash.com/photo-1679379121012-d75e987c60ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </CardImageWrapper>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt=""
            />
            <UserName>@zndson</UserName>
          </CardUser>
          <CardMeta>
            <UserHeart src="/noun-heart-135904.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardBottom>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary}>$256.99</CardAmount>
        </CardBottom>
      </CardContent>
    </StyleCard>
  );
};

export default Card;
