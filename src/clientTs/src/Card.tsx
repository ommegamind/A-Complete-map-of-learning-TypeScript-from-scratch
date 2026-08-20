import { useState } from "react";

export interface CardElementType {
  prodName: string;
  prodPrice: number;
  isSpecial?: boolean;
}

export const CardElement = ({
  prodName,
  prodPrice,
  isSpecial = false,
}: CardElementType) => {
  return (
    <>
      <h2>Name: {prodName}</h2>
      <h2>Price: {prodPrice}</h2>
      <h2>Special: {isSpecial ? "yes" : "no"}</h2>
      <Counter />
    </>
  );
};

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
