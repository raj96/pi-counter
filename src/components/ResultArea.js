export default function ResultArea({
  values,
  numberOfDigits,
  copyToClipboard,
}) {
  if (
    values === undefined ||
    values.length === undefined ||
    values.length === 0
  ) {
    return (
      <div className="result-area">
        <div className="result-container">
          <div className="result-default-text">
            {isNaN(numberOfDigits)
              ? "Enter a valid number"
              : `Press play button to see first ${numberOfDigits} digits of π`}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="after-result-area">
        <div className="after-result-container">
          {values.map((value) => (
            <div className="digit">{value}</div>
          ))}

          <button
            className="copy-btn"
            title="Copy to clipboard"
            onClick={copyToClipboard}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5L21 11V21C21 22.1 20.1 23 19 23H7.99C6.89 23 6 22.1 6 21L6.01 7C6.01 5.9 6.9 5 8 5H15ZM14 12H19.5L14 6.5V12Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
