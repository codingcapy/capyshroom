import React from "react";

interface GoogleMapProps {
    mapSrc: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ mapSrc }) => {
    return (
        <div className="flex justify-center items-center w-full py-4">
            <iframe
                src={mapSrc}
                width="800"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full max-w-[800px] h-[350px]"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
