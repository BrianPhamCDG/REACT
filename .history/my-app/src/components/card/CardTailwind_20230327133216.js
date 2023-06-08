import React from "react";

const CardTailwind = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <div className="h-full w-full object-cover">
          <img
            src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
            alt=""
            className="block h-400 w-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute bg-white w-full bottom-0 w-[calc(100%-36px)] left-1/2 -translate-x-1/2 translate-y-1/2 rounded-[20px] z-10 p-[20px]">
          <div className="flex justify-between items-center mb-[30px]">
            <div className="flex items-center gap-[12px]">
              <img
                className="w-[30px] h-[30px] object-cover rounded-full"
                src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
                alt=""
              />
              <span className="font-light text-base">@zndrson</span>
            </div>
            <div className="">
              <img
                src="/icon-heart.svg"
                alt="heart"
                className="w-[20px] h-[20px] object-cover rounded-full"
              />
              <span>256</span>
            </div>
          </div>
          <div className="flex items-center gap-[6px]">
            <h3 className="">Cosmic Perspective</h3>
            <span className="">12,000 PSL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
