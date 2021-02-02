import React from "react";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <button onClick={() => fetchGif()}>Get Random Gif</button>
    </div>
  );
};

export default Random;
