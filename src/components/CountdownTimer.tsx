import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
  size?: 'small' | 'large';
  className?: string;
}

export default function CountdownTimer({ initialMinutes = 15, size = 'small', className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('timerEndTime');
    if (saved) {
      const endTime = parseInt(saved);
      const now = Date.now();
      if (now < endTime) {
        return Math.floor((endTime - now) / 1000);
      }
    }
    const newEndTime = Date.now() + (initialMinutes * 60 * 1000);
    localStorage.setItem('timerEndTime', newEndTime.toString());
    return initialMinutes * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const newEndTime = Date.now() + (initialMinutes * 60 * 1000);
          localStorage.setItem('timerEndTime', newEndTime.toString());
          return initialMinutes * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialMinutes]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (size === 'large') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px]">
          <div className="text-3xl md:text-5xl font-bold tabular-nums">
            {String(minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider font-semibold opacity-90 mt-1">Min</div>
        </div>
        <div className="text-3xl md:text-5xl font-bold">:</div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px]">
          <div className="text-3xl md:text-5xl font-bold tabular-nums">
            {String(seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider font-semibold opacity-90 mt-1">Seg</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1.5 min-w-[50px]">
        <div className="text-lg md:text-xl font-bold tabular-nums">
          {String(minutes).padStart(2, '0')}
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold opacity-90">Min</div>
      </div>
      <div className="text-lg md:text-xl font-bold">:</div>
      <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1.5 min-w-[50px]">
        <div className="text-lg md:text-xl font-bold tabular-nums">
          {String(seconds).padStart(2, '0')}
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold opacity-90">Seg</div>
      </div>
    </div>
  );
}
