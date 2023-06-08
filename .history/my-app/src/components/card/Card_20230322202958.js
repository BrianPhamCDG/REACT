import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  position: relative;
  width: 400px;
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
  width: 100%;
  overflow: hidden;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
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
const UserName = styled.span``;

const Card = () => {
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
          <div className="card-likes">
            <span>256</span>
          </div>
        </CardTop>
        <div className="card-bottom">
          <h3 className="card-desc">Cosmic Perspective</h3>
          <span className="pricing">$256.99</span>
        </div>
      </CardContent>
    </StyleCard>
  );
};

export default Card;
