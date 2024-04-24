import { useState, useEffect } from "react";
import "./ProgressBar.css"; // Import the CSS file for styles

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setStatus("Complete");
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <span className="progress-text">
        {status} {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;
