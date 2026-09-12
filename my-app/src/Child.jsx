import { memo } from "react";

function Child({ handleClick }) {
  console.log("Child rendered");

  return (
    <button onClick={handleClick}>
      Child Button
    </button>
  );
}

export default memo(Child);