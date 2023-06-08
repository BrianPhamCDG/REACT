import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Photo = () => {
  return <div></div>;
};

export default Photo;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const getRandomPhotos = (page) => {
//   return axios
//     .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const Photo = () => {
//   const [randomPhotos, setRandomPhotos] = useState([]);

//   const handleLoadMorePhotos = () => {
//     getRandomPhotos(nextPage).then((images) => {
//       setRandomPhotos(images);
//       setNextPage(nextPage + 1);
//     });
//   };

//   const [nextPage, setNextPage] = useState(1);

//   useEffect(() => {
//     handleLoadMorePhotos();
//   }, []);

//   // console.log(Array.isArray(randomPhotos))

//   return (
//     <div className="">
//       <div className="grid grid-cols-4 gap-5 p-5">
//         {randomPhotos.length > 1 &&
//           randomPhotos.map((item, index) => (
//             <div
//               key={item.id}
//               className="p-3 bg-slate-400 shadow-md rounded-lg h-[200px]"
//             >
//               <img
//                 src={item.download_url}
//                 alt={item.author}
//                 className="object-cover rounded-md w-full h-full"
//               />
//             </div>
//           ))}
//       </div>
//       <div className="text-center pt-6">
//         <button
//           onClick={handleLoadMorePhotos}
//           className="rounded-md px-8 py-4 bg-blue-600 text-white font-semibold inline-block"
//         >
//           Load more
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Photo;
