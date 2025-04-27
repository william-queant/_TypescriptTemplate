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
