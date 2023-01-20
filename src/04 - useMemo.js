import { useMemo, useState } from "react";

export const UseMemo = () => {
  const [number, setNumber] = useState(5);

  const square = useMemo(() => number * number, [number]);

  return (
    <>
      <input value={number} onChange={e => setNumber(Number(e.target.value))} />
      <p>Number: {number}</p>
      <p>Square: {square}</p>
    </>
  );
};
