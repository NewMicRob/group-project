"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icon for Leaflet marker
const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function FindUsMap() {
    const [mapError, setMapError] = useState(false);
    const [isMapLoading, setIsMapLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        try {
            setIsMapLoading(false);
        } catch (error) {
            setMapError(true);
            setIsMapLoading(false);
        }
    }, []);

    // Coordinates for the map
    const position = [43.6532, -79.3832];

    if (!mounted) return null;

    if (mapError) {
        return (
            <div className="flex justify-center items-center w-full my-8">
                <div className="w-full max-w-[40vw] bg-gray-100 rounded-xl p-8 text-center border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Map Temporarily Unavailable
                    </h3>
                    <p className="text-gray-600 mb-4">
                        We're having trouble loading the map right now.
                    </p>
                    <div className="text-sm text-gray-700 bg-white p-4 rounded border">
                        <strong>Visit us at:</strong><br/>
                        Bay Street, Toronto, ON M5G 1Z3<br/>
                        Phone: (416) 123-4567
                    </div>
                    <button 
                        onClick={() => {setMapError(false); setIsMapLoading(true);}}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        // Main container for the map
        <div className="flex justify-center items-center w-full my-8"> 
            <div className="w-full max-w-[40vw] rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
                <MapContainer
                    center={position} // Center of the map
                    zoom={13} // Initial zoom
                    style={{ height: "400px", width: "100%" }} // Map Size
                    className="rounded-xl"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={defaultIcon}>
                        <Popup>
                            <span className="font-semibold text-blue-700">We are located here!</span>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}