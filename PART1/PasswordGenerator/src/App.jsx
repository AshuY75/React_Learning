import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvwXxYyZz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()-_+={}[]|:;,.?~";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div>
      <div className="w-full bg-gray-700 max-w-xl mx-auto shadow-md rounded-lg px-4 my-7 text-orange-700">
        <h1 className="text-2xl text-center text-black">Password Generator</h1>

        <div className="flex bg-white w-full mx-auto shadow-md rounded-lg px-4 my-7">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-1"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-3 text-orange-500 items-center">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>

          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
          />
          <label>Characters</label>

          <input
            type="checkbox"
            checked={numAllow}
            onChange={() => setNumAllow((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
