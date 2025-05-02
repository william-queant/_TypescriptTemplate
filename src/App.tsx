import { useState } from "react";
import "./App.css";
import { ots, Test } from "./components/Utils";

function App() {
  const [count, setCount] = useState(0);

  const generateLyrics = (n: number): string[] => {
    const lyrics = new Map([
      [1, "gang"],
      [2, "gucci"],
    ]);

    let currentList: string[] = [];

    // Recurcively return result matching remaining syl number.
    const getLyrics = (rN: number, list: string[]) => {
      lyrics.forEach((lyr, syl) => {
        const remainingSyl = rN - syl;
        const newList = [...list, lyr];

        if (remainingSyl > 0) {
          return getLyrics(remainingSyl, newList);
        }
        return newList;
      });
    };

    currentList = getLyrics(n, currentList);

    return currentList;
  };

  const test1 = generateLyrics(1);
  const test2 = generateLyrics(3);

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <Test condition={ots(test1) === ots(["gang"])}>{ots(test1)}</Test>
      <Test
        condition={
          ots(test2) === ots(["gang gang gang", "gucci gang", "gang gucci"])
        }
      >
        {ots(test2)}
      </Test>
    </>
  );
}

export default App;
