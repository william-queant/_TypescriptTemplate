import "./App.css";
import { ots, Test } from "./components/Utils";

function App() {
  const generateLyrics = (nbSyllables: number): string[] => {
    const lyrics = new Map([
      [1, "gang"],
      [2, "gucci"],
    ]);

    // Recurcive function to add words until the score is reached
    const getLyrics = (
      remainingSyllabes: number,
      wordsList: string
    ): string[] => {
      const result: string[] = [];

      lyrics.forEach((word, syllabeCount) => {
        const score = remainingSyllabes - syllabeCount;
        const newList = `${wordsList} ${word}`;

        // The score is not reached: do a recursive call to build the word list
        if (score > 0) {
          result.push(...getLyrics(score, newList));
        }

        // The score is reached: stop looping and add the final list to results
        if (score === 0) {
          result.push(newList.trim());
          return;
        }
      });

      return result;
    };

    return getLyrics(nbSyllables, "");
  };

  const test1 = generateLyrics(1);
  const test2 = generateLyrics(2);
  const test3 = generateLyrics(3);
  const test4 = generateLyrics(4);

  return (
    <>
      <h1>generateLyrics</h1>
      <Test condition={ots(test1) === ots(["gang"])}>{ots(test1)}</Test>
      <Test condition={ots(test2) === ots(["gang gang", "gucci"])}>
        {ots(test2)}
      </Test>
      <Test
        condition={
          ots(test3) === ots(["gang gang gang", "gang gucci", "gucci gang"])
        }
      >
        {ots(test3)}
      </Test>
      <Test
        condition={
          ots(test4) ===
          ots([
            "gang gang gang gang",
            "gang gang gucci",
            "gang gucci gang",
            "gucci gang gang",
            "gucci gucci",
          ])
        }
      >
        {ots(test4)}
      </Test>
    </>
  );
}

export default App;
