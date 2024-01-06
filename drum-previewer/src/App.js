import "./App.css";
import { react, useState, useEffect } from "react";
import { drumPads } from "./data";

function App() {
  function playSound(selector) {
    const audio = document.getElementById(selector);
    // Check if the audio is already playing
    if (!audio.paused) {
      // If playing, reset the playback position to the beginning
      audio.currentTime = 0;
    }
    audio.play();
    setActiveKey(selector);
  }

  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  }, []);

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          {activeKey}
          <div className="drum-pads">
            {drumPads.map((drumPad) => (
              <div
                key={drumPad.text}
                onClick={() => {
                  playSound(drumPad.text);
                }}
                className="drum-pad"
                id={drumPad.src}
              >
                {drumPad.text}
                <audio
                  className="clip"
                  id={drumPad.text}
                  src={drumPad.src}
                ></audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
