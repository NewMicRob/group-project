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
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Coordinates for the map
    const position = [43.6532, -79.3832];

    if (!mounted) return null;

    return (
        // Main container for the map
        <div className="flex justify-center items-center w-full my-8"> 
            <div className="w-full max-w-xl rounded-xl shadow-lg overflow-hidden border border-gray-200 bg-white">
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