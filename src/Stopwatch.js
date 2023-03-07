import React, { Component } from 'react';
import "./Stopwatch.css"

function Stopwatch() {
  return (
    <div className="stopwatch">
      <h1>0</h1>
      <div className="controls">
        <button>Reset</button>
        <button>Start</button>
        <button>Pause</button>
      </div>
    </div>
  );
}

export default Stopwatch;
