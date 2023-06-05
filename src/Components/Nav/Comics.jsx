// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Comics = () => {
//   const [comics, setComics] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://gateway.marvel.com:443/v1/public/comics?limit=20&apikey=77375a8933eaea208069fddf7b5de5b4"
//         );
//         setComics(response.data.data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="comic" key={id}>
//       <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
//       <div className="comic-info">
//         <h5>Title: {title}</h5>
//       </div>
//     </div>
//   );
// };

// export default Comics;
