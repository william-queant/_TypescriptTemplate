import { JSX } from "react";
import "../App.css";

export const Test = ({
  condition,
  children,
}: {
  condition?: boolean;
  children?: React.ReactNode;
}): JSX.Element | null => {
  if (!condition && !children) {
    return null;
  }

  if (condition === undefined) {
    return <h2>{children}</h2>;
  }

  return (
    <h2 className={condition ? "passed" : "failed"}>
      {children ?? (condition ? "Passed" : "Failed")}
    </h2>
  );
};

export const TimedTest = ({
  func,
  expected,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: () => any;
  expected: string;
}): JSX.Element => {
  const start = performance.now();
  const result = func();
  const end = performance.now();

  const isPassed = result === expected;

  return (
    <p>
      Result is: <b>{result}</b> (
      <span className={isPassed ? "passed" : "failed"}>
        {isPassed ? "Passed" : "Failed"} in {end - start}ms
      </span>
      )
    </p>
  );
};
