import React, { useState } from "react";

const Quantity = () => {

    const [count, setCount] = useState(0);

    return (
        <div id="quantity">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Quantity;