import React from "react";

function CounterExample() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>
        {count}
      </h1>
      <h1>
        <button onClick={() => setCount(count + 1)}>
            +</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </h1>
    </div>
  );
}

export default CounterExample;