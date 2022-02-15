import { useEffect, useRef, useState } from "react";

export default function InputArea({sendCurrentDigit}) {
  const inputRef = useRef();
  const [digit, setDigit] = useState(5);
  const decreaseDigit = () => {
    if (digit - 1 < 1) {
      setDigit(1);
    } else {
      setDigit((prev) => prev - 1);
    }
  };
  const increaseDigit = () => {
    setDigit((prev) => prev + 1);
  };
  const validateChange = (ev) => {
    const validOutput = Number(ev.target.value.match(/[0-9]+/));
    if (isNaN(validOutput)) {
      setDigit(1);
    } else {
      setDigit(validOutput);
    }
  };

  const generate = () => {
    sendCurrentDigit(digit);
  }

  useEffect(() => {
      inputRef.current.value = digit;
  }, [digit]);

  return (
    <div className="input-area">
      <div className="input-text">Enter number of digits:</div>
      <div className="input-field-area">
        <div className="input-minus">
          <button onClick={decreaseDigit}>-</button>
        </div>
        <input
          className="input-field"
          defaultValue={digit}
          ref={inputRef}
          onChange={validateChange}
        />
        <div className="input-add">
          <button onClick={increaseDigit}>+</button>
        </div>
      </div>
      <button className="input-submit-btn" title="Generate" onClick={generate}>
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32.5" cy="32.5" r="32.5" fill="#784BD8" />
          <path
            d="M22.4704 19.3503C22.4436 17.8109 24.0932 16.8197 25.4398 17.5661L48.264 30.2178C49.6106 30.9643 49.6442 32.8885 48.3245 33.6814L25.9557 47.122C24.636 47.9149 22.9528 46.9819 22.9259 45.4425L22.4704 19.3503Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
