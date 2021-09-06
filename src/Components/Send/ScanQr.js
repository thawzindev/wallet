import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const ScanQr = () => {

    const [scanData, setScanData] = useState('');

    const handleScan = (data) => {
        if (data) {
          setScanData(data);
          console.log(data);
        }
      }

    const handleError = (err) => {
        console.log(err);
    }

    return ( 
        <div className="mt-5">
            <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
            />
            <p>{scanData}</p>
        </div>
    );
}

export default ScanQr;