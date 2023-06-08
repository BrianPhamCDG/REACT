import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  position: relative;
`;
const CardImageWrapper = styled.div`
  height: 400px;
  width: 400px;
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
  width: 400px;
  overflow: hidden;
  left: 50%;
  transform: translateX(-100%);
`;

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
        <div className="card-top">
          <div className="card-profile">
            <img
              src="https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt=""
            />
            <span className="card-heading">@zndson</span>
          </div>
          <div className="card-likes">
            <span>256</span>
          </div>
        </div>
        <div className="card-bottom">
          <h3 className="card-desc">Cosmic Perspective</h3>
          <span className="pricing">$256.99</span>
        </div>
      </CardContent>
    </StyleCard>
  );
};

export default Card;
