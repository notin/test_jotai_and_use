import  {atom, useAtom} from "jotai";
import React from "react";
import {countAtom} from "../App";

import { experimental_use as use, Suspense, useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useAtom(countAtom);
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={()=> setCount((c) => c - 1)}>Decrement</button>
        </div>
    );
};
export default Counter;
