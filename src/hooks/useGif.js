import { useState, useEffect } from "react";
import axios from "axios";

// This Key should be in a .env file :)
const giphyKey = "6M3Cfh9OJVMElDsmqS5LBzWf8g87qo27";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    try {
      const {
        data: { data }
      } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imgSrc = data.images.downsized_large.url;
      setGif(imgSrc);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
