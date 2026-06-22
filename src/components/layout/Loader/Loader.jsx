import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 20 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => { setFading(true); setTimeout(onComplete, 600); }, 300);
      }
      setProgress(Math.min(p, 100));
    }, 70);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader${fading ? ' loader--out' : ''}`}>
      <div className="loader__inner">
        <div className="loader__monogram">KM</div>
        <div className="loader__bar-wrap">
          <div className="loader__bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader__pct">{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default Loader;
