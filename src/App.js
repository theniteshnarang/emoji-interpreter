import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  let emojiDict = {
    "😁": "Smiling Teeth",
    "😅": "Confused Face",
    "😂": "Laughing Face",
    "😋": "Yumm Face",
    "😏": "Smirking Face",
    "☹️": "Sad Face",
    "😉": "Aankh Marein Face",
    "😌": "Satisfied Smile",
    "😍": "Loving Face",
    "🥰": "Smiling in love",
    "😘": "Kissing to React",
    "😗": "Give a Kiss to React",
    "😙": "Talking with lips out",
    "😚": "Talking with eyes closed",
    "😛": "Chill face",
    "😝": "To laugh at someone",
    "😜": "Masti karna face",
    "🤪": "Tilt me Masti karna",
    "🤨": "Ek Ankh badi krke dekhna"
  };
  // function changeHandlers(event) {
  //   let inputValue = event.target.value;
  //   let flag = 0;
  //   for (let key in emojiDict) {
  //     if (key == inputValue) {
  //       setCount(emojiDict[key]);
  //       flag = 1;
  //     }
  //   }
  //   if (flag === 0 && inputValue !== "") setCount("Sorry, Not in Database!");
  //   return true;
  // }
  // function changeHandlers(event) {
  //   let inputValue = event.target.value;
  //   if (inputValue in emojiDict) {
  //     setCount(emojiDict[inputValue]);
  //   } else setCount("Not in our Database");
  // }
  let emojiArrays = Object.keys(emojiDict);
  // console.log(emojiArrays);

  function changeHandlers(event) {
    let inputValue = event.target.value;
    let meaning = emojiDict[inputValue];
    if (meaning === undefined && inputValue !== "")
      meaning = "Sorry! Not in our Database";

    setState(meaning);
  }
  function clickHandler(emoji) {
    let meaning = emojiDict[emoji];
    setState(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Meaning Finder </h1>
      <input onChange={changeHandlers} placeholder="Enter Emoji" />
      <br />
      <br />
      <label style={{ color: "grey" }}>Meaning : </label>
      <h3 style={{ color: "green" }}>{state}</h3>
      <h3>Or Click the Emoji's:</h3>
      <div className="emojiBox">
        {emojiArrays.map((emoji) => (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ padding: "0.2rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
