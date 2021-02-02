import React, { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
  const [gif, setGif] = useState("");

  const getRandomGif = async () => {
    const giphyKey = "6M3Cfh9OJVMElDsmqS5LBzWf8g87qo27"; // Should be in a .env file :)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}`;
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
    getRandomGif();
  }, []);

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <button onClick={getRandomGif}>Get Random Gif</button>
    </div>
  );
};

export default Random;
