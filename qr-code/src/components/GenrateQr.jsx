import React, { useState, useRef } from "react";
import "./style.css";

import QRCode from "react-qr-code";

const GenrateQr = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const qrRef = useRef(null);

  const handleInput = (e) => {
    console.log("Input changed:", e.target.value);

    setInput(e.target.value);
  };
  const handleQr = () => {
    setQrCode(input);
    setInput("");
  };

  const handleReset = () => {
    setQrCode("");
    setInput("");
  };
  const handleKey = (e) => {
    console.log("Key pressed:", e.key);
    if (e.key === "Enter") {
      handleQr();
    }
  };

  const handleDownload = () => {
    const svgElement = qrRef.current?.querySelector("svg");
    console.log("svg element ->>", svgElement);

    if (!svgElement) {
      console.error("SVG element not found");
      return;
    }

    const svgData = svgElement.outerHTML;
    console.log("svg data ->>", svgData);

    const blob = new Blob([svgData], {
      type: "image/svg+xml",
    });

    const url = URL.createObjectURL(blob);
    console.log("Blob URL:", url);

    const link = document.createElement("a");

    console.log("Link Element:", link);

    link.href = url;
    link.download = "qr-code.svg"; //it just the filename, you can change it to whatever you want

    //does not come from the QR library. It's just the filename you choose for the downloaded file.
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrCode);

      console.log("Copied!");
      alert("Copied!");
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div className="controls">
        <input
          onKeyDown={handleKey}
          onChange={handleInput}
          type="text"
          value={input}
          placeholder="Enter text to generate QR code"
        />

        <button onClick={handleQr} disabled={input.trim().length === 0}>
          Generate QR Code
        </button>

        <button onClick={handleReset}>clear</button>

        <button onClick={handleDownload} disabled={!qrCode}>
          Download QR Code
        </button>
        <button onClick={handleCopy} disabled={!qrCode}>
          Copy QR Code
        </button>
      </div>

      <div className="qr-container" ref={qrRef}>
        {qrCode && (
          <QRCode id="qrCode" value={qrCode} size={250} bgColor="#ffffff" />
        )}
      </div>
    </div>
  );
};

export default GenrateQr;
