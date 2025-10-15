import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [startTimestamp] = useState(1650846300000);
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = now - startTimestamp;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const milliseconds = diff % 1000;

      setElapsed({ days, hours, minutes, seconds, milliseconds });
    }, 10);

    return () => clearInterval(interval);
  }, [startTimestamp]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="app">
      <div className="timer-container">
        <h1 className="timer-title">♥</h1>
        <div className="timer-grid">
          <div className="timer-unit">
            <div className="timer-value">{elapsed.days}</div>
            <div className="timer-label">Días</div>
          </div>
          <div className="timer-unit">
            <div className="timer-value">{formatNumber(elapsed.hours)}</div>
            <div className="timer-label">Horas</div>
          </div>
          <div className="timer-unit">
            <div className="timer-value">{formatNumber(elapsed.minutes)}</div>
            <div className="timer-label">Minutos</div>
          </div>
          <div className="timer-unit">
            <div className="timer-value">{formatNumber(elapsed.seconds)}</div>
            <div className="timer-label">Segundos</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;