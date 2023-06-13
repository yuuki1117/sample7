import React from "react";
import { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const fn = (number) => {
    return number * 2;
  };
  const result = fn(2);
  console.log(result);

  return (
    <>
      <p>テスト</p>
    </>
  );
};

export default Practice;
