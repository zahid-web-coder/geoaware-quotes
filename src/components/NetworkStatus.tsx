import { useEffect, useState } from 'react';
import React from 'react';
export default function NetworkStatus() {
  const [status, setStatus] = useState('Checking network...');

  useEffect(() => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      setStatus(`Connection: ${connection.effectiveType}, Downlink: ${connection.downlink} Mbps`);
    } else {
      setStatus('Network Information API not supported');
    }
  }, []);

  return <p className="text-lg">🌐 <strong>Network:</strong> {status}</p>;
}
