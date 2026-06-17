import { useState } from "react";

export const TestComponent = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
         <h2> Welcome to react app  </h2>
         <h2>{count}</h2>
         <button onClick={handleClick}>Increment</button>
        
        </>
    )
}
