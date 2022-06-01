import React, {useEffect, useRef} from 'react';
import QRCode from "easyqrcodejs";

const MyQr = () => {

    const qrCodeRef = useRef(null);

    useEffect(() => {
        new QRCode(qrCodeRef.current, {
            text: "09425025593",
            // logo: "../../assets/profile.svg",
            width: 250,
            height: 250
            });
        }, []);

    return ( 
        <div className="text-center" ref={qrCodeRef} style={{marginTop: "20px"}} />
    );
}

export default MyQr;