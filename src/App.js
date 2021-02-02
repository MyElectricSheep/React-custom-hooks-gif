import React from "react";
import Random from "./components/Random_v1";
import Tag from "./components/Tag_v1";

// Components using Custom Hooks
import RandomV2 from "./components/Random_v2";
import TagV2 from "./components/Tag_v2";

import "./styles.css";

const App = () => {
  return (
    <div>
      <h1>Random GIF app</h1>
      <div className="main-container">
        {/* <Random />
        <Tag /> */}
        <RandomV2 />
        <TagV2 />
      </div>
    </div>
  );
};

export default App;
