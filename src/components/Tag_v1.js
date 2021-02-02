import React, { useState, useEffect } from "react";
import axios from "axios";

const Tag = () => {
  const [tag, setTag] = useState("cat");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const giphyKey = "6M3Cfh9OJVMElDsmqS5LBzWf8g87qo27"; // Should be in a .env file :)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${tag}`;
    try {
      const {
        data: { data }
      } = await axios.get(url);
      const imgSrc = data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Get Gif</button>
    </div>
  );
};

export default Tag;
