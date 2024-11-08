import { useState } from "react";
import index from "./index.scss";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <div className="text-3xl">Count: {count}</div>
        <button
            className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count + 1)}
        >
            Increment
        </button>
        </div>
    );
    };

export default Counter;
