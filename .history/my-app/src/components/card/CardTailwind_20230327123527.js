import React from "react";

const CardTailwind = () => {
  return (
    <div>
      <div className="relative w*400">
        <div className="h-400 w-full">
          <img
            src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
            alt=""
            className="h-400 w-full object-cover"
          />
        </div>
        <div className="">
          <div className="">
            <div className="">
              <img
                className=""
                src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
                alt=""
              />
              <span className="text-lg">@zndrson</span>
            </div>
            <div className="">
              <img src="/icon-heart.svg" alt="heart" />
              <span>256</span>
            </div>
          </div>
          <div className="">
            <h3 className="">Cosmic Perspective</h3>
            <span className="">12,000 PSL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
