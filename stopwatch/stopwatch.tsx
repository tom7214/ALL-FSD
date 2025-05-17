import React, { useEffect, useRef, useState } from "react";

const DigitalTimer: React.FC = () => {
  const [time, setTime] = useState(0); // in centiseconds
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10); // 10ms = 1 centisecond
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running]);

  const formatTime = (centisec: number) => {
    const cs = centisec % 100;
    const sec = Math.floor(centisec / 100) % 60;
    const min = Math.floor(centisec / 6000) % 60;
    const hr = Math.floor(centisec / 360000);
    return `${hr}:${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}:${cs.toString().padStart(2, "0")}`;
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
      <div className="text-3xl font-bold">Stopwatch</div>
      <div className="text-6xl font-mono">{formatTime(time)}</div>
      <div className="flex space-x-6">
        <button
          className={`px-6 py-2 font-bold rounded ${
            running ? "bg-yellow-500" : "bg-green-500"
          }`}
          onClick={() => setRunning(!running)}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="px-6 py-2 bg-yellow-500 text-white font-bold rounded"
          onClick={handleLap}
        >
          Lap
        </button>
        <button
          className="px-6 py-2 bg-red-600 text-white font-bold rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="w-full max-w-md mt-6">
        {laps.length > 0 && (
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-2">Laps</h2>
            <ul className="space-y-1">
              {laps.map((lap, index) => (
                <li key={index} className="text-lg font-mono">
                  Lap {index + 1}: {formatTime(lap)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalTimer;
