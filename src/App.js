import { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import InputArea from "./components/InputArea";
import ResultArea from "./components/ResultArea";

export default function App() {
  const [digit, setDigit] = useState(5);
  const [values, setValues] = useState([]);
  const getCurrentDigit = (digit) => {
    setDigit(digit);
  };
  const copyToClipboard = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(values.join(""))
        .then((res) => {
          console.log(res);
          window.alert(`First ${digit} digits of π is copied to the clipboard`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const ans = [];
    const BASE = 7;
    var NUM = 22;

    for (let i = 0; i < digit; i++) {
      ans.push(Math.floor(NUM / BASE));
      NUM = (NUM % BASE) * 10;
    }

    setValues(ans);
  }, [digit]);

  return (
    <div className="app">
      <Appbar />
      <InputArea sendCurrentDigit={getCurrentDigit} />
      <ResultArea
        numberOfDigits={digit}
        values={values}
        copyToClipboard={copyToClipboard}
      />
    </div>
  );
}
