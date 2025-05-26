
import { useState } from "react";


const Timer=()=> {

  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const startTimer = () => {
    setTimeInterval(setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000));
  }

   const pauseTimer = () => {
    clearInterval(timeInterval);
  }

   const resetTimer = () => {
   
    setTimer(0);
    clearInterval(timeInterval);
  }

   return (
    <div className="App">
      <h2 className="text-2xl font-bold mb-4">⏱ Timer:{timer}</h2>
      {/* <h3> {timer}</h3> */}
      <div className="btn-wrapper">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
export default Timer











// import React, { useEffect, useRef, useState } from "react";

// const Timer: React.FC = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // Start the timer
//   const startTimer = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//     }
//   };

//   // Pause the timer
//   const pauseTimer = () => {
//     setIsRunning(false);
//   };

//   // Effect to start interval when running, and clean it up
//   useEffect(() => {
//     if (isRunning) {
//       intervalRef.current = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//     };
//   }, [isRunning]);

//   return (
//     <div className="p-6 max-w-sm mx-auto text-center bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">⏱ Timer</h2>
//       <p className="text-4xl font-mono mb-4">{seconds}s</p>
//       <div className="flex justify-center gap-4">
//         <button
//           onClick={startTimer}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Start
//         </button>
//         <button
//           onClick={pauseTimer}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//         >
//           Pause
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;
