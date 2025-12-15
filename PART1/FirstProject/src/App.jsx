import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-2xl bg-green-50 gap-3 px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-4 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-4 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: color }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-4 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-4 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-4 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
