import React from "react";

export { manifest } from "./manifest";

export const onPress = (/** @type {any} */ params) => {
  const d = new Date();
  alert(`${d.toLocaleTimeString()}`);
  console.log("on press pressed", { params });
};

const App = (/** @type {any} */ props) => {
  console.log("App render", { props });
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "red",
        color: "white",
      }}
    >

      <div>hello from webdeck-time</div>
    </div>
  );
};

export default App;
