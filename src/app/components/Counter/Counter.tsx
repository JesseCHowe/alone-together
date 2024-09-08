"use client";

// components/Counter.tsx
import React, { useState } from 'react';

interface CounterProps {
  count: number;
  onCountChange: (newCount: number) => void;
}


const Counter: React.FC<CounterProps> = ({ count, onCountChange }) => {
  const increase = () => {
    console.log("increasing...", count)
    onCountChange(count + 1)
  };
  const decrease = () => onCountChange(count - 1);

  return (
    <div className="counter">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
