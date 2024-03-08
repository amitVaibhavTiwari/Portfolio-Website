import { useEffect, useState } from "react";
import "./Open.scss";
const Open = () => {
  const [isDelay, setIsDelay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsDelay(false);
    }, 1000);
  }, []);
  return (
    <div className="parent-page">
      {!isDelay && (
        <div className="morphing">
          <div className="word">Hola!</div>
          <div className="word">Hello</div>
          <div className="word">नमस्ते</div>
          <div className="word">آپ پر سلامتی ہو</div>
          <div className="word">ਸਾਸਰੀਆਕਾਲ</div>
          <div className="word">ನಮಸ್ಕಾರ</div>
          <div className="word">வணக்கம்</div>
        </div>
      )}
    </div>
  );
};

export default Open;
