// Cursor.jsx
import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const [trails, setTrails] = useState([]);
  const lastMoveTimeRef = useRef(Date.now());
  const inactivityTimerRef = useRef(null);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile) return;

    document.body.classList.add('custom-cursor');
    let mx = 0, my = 0, rx = 0, ry = 0, raf;
    let trailCounter = 0;

    // Create a new trail particle
    const addTrail = (x, y) => {
      const id = Date.now() + Math.random() + trailCounter++;
      const newTrail = {
        id,
        x,
        y,
        createdAt: Date.now(),
      };
      setTrails(prev => [...prev.slice(-15), newTrail]); // Keep max 15 trails
    };

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;

      // Update last move time
      lastMoveTimeRef.current = Date.now();

      // Clear inactivity timer if exists
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = null;
      }

      // Add trail particle on movement
      addTrail(e.clientX, e.clientY);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }

      // Set inactivity timer to clear trails after 2 seconds of no movement
      inactivityTimerRef.current = setTimeout(() => {
        setTrails([]);
      }, 2000);
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }

      // Remove old trails (older than 500ms)
      setTrails(prev => prev.filter(trail => Date.now() - trail.createdAt < 500));

      raf = requestAnimationFrame(animate);
    };

    const onDown = () => {
      dotRef.current?.classList.add('dot--click');
      ringRef.current?.classList.add('ring--click');
    };

    const onUp = () => {
      dotRef.current?.classList.remove('dot--click');
      ringRef.current?.classList.remove('ring--click');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
          }}
        />
      ))}
    </>
  );
};

export default Cursor;