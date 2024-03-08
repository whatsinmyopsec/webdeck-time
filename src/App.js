import React from 'react';

export const onPress = (params) => {
  const d = new Date();
  alert(`${d.toLocaleTimeString()}`);
  console.log("on press pressed", {params});
}

const App = (props) => {
  console.log("App render", {props});
  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      <div>hello from webdeck-time</div>
    </div>
  )
};

export default App;
