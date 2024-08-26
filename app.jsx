import  { useState, useEffect } from 'react';

const Candle = () => {
  
  const [height, setHeight] = useState(100);

  useEffect(() => {
    
    const reduceHeight = () => {
      setHeight(prevHeight => {
        if (prevHeight <= 10) {
          return 100; 
        }
        return prevHeight - 10; // Decrease by 10% every 2 seconds
      });
    };

    // Set interval to reduce candle height every 2 seconds
    const intervalId = setInterval(reduceHeight, 2000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="exercise">
      <div className="candleContainer" style={{ height: `${height}%` }}>
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;
