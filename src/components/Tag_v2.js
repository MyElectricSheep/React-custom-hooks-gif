import React, { useState } from "react";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("cat");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Get {tag} Gif</button>
    </div>
  );
};

export default Tag;
