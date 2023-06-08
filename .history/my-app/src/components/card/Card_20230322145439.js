import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1679379121012-d75e987c60ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div className="card-info">
        <div className="card-top">
          <div className="card-profile"></div>
          <img
            src="https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt=""
          />
          <span className="card-heading">@zndson</span>
        </div>
        <div className="card-bottom"></div>
      </div>
    </div>
  );
};

export default Card;
