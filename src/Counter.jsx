import { useState, useEffect, useRef } from "react";
import React from "react";
export default function Counter({ end }) {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    
  
    useEffect(() => {
      // Start the interval when the component mounts
      intervalRef.current = setInterval(() => {
        setCount(prevCount => {
          if (prevCount >= end - 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return prevCount + 1;
        });
      }, 5);
  
      // Cleanup on unmount
      return () => {
        clearInterval(intervalRef.current);
      };
    }, []); // Empty dependency array means this runs only once when the component mounts
  
    return (
      <div>
        <h1>Counter: {count > 999 ? (count / 1000).toFixed(1) + 'k' : count}</h1>
      </div>
    );
}
