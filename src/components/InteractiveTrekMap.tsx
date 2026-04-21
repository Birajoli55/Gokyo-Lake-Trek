import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, DollarSign, ArrowRight, Mountain, Layers, ZoomIn } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

// Custom pulsing marker icon using DivIcon
const createPulsingIcon = (isActive: boolean) => L.divIcon({
  className: 'custom-pulsing-marker',
  html: `
    <div style="width: 32px; height: 32px;" class="relative flex items-center justify-center">
      <div class="absolute w-8 h-8 bg-emerald-500 rounded-full animate-ping opacity-40"></div>
      <div class="relative w-4 h-4 bg-emerald-600 rounded-full border-2 border-white shadow-xl transform transition-transform duration-300 ${isActive ? 'scale-150' : 'scale-100'}"></div>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

interface MapStop {
  name: string;
  lat: number;
  lng: number;
  day?: number;
  altitude?: string;
  desc?: string;
}

interface InteractiveTrekMapProps {
  duration: string;
  price: string;
  startPoint: string;
  endPoint: string;
  trekName: string;
}

const GOKYO_ROUTE: MapStop[] = [
  { day: 1, name: 'Kathmandu', lat: 27.7172, lng: 85.3240, altitude: '1,400m', desc: 'Himalayan Hub' },
  { day: 1, name: 'Lukla', lat: 27.6864, lng: 86.7314, altitude: '2,860m', desc: 'Gateway to Everest' },
  { day: 1, name: 'Phakding', lat: 27.7423, lng: 86.7111, altitude: '2,610m', desc: 'Riverside settlement' },
  { day: 2, name: 'Namche Bazaar', lat: 27.8069, lng: 86.7140, altitude: '3,440m', desc: 'Sherpa Capital' },
  { day: 4, name: 'Phortse Thanga', lat: 27.8380, lng: 86.7260, altitude: '3,680m', desc: 'Panoramic junction' },
  { day: 5, name: 'Dole', lat: 27.8650, lng: 86.7150, altitude: '4,110m', desc: 'Alpine forest edge' },
  { day: 6, name: 'Machhermo', lat: 27.9150, lng: 86.7000, altitude: '4,470m', desc: 'Yeti legend valley' },
  { day: 7, name: 'Gokyo Village', lat: 27.9540, lng: 86.6940, altitude: '4,750m', desc: 'Turquoise lakeside' },
  { day: 7, name: 'Gokyo Ri', lat: 27.9620, lng: 86.6830, altitude: '5,357m', desc: 'Ultimate viewpoint' }
];

// Enhanced View Controller with FlyTo and FitBounds support
function MapController({ center, zoom, activeStop, points }: { center: L.LatLngExpression, zoom: number, activeStop: any, points: L.LatLngExpression[] }) {
  const map = useMap();
  const [hasFit, setHasFit] = useState(false);
  
  useEffect(() => {
    if (!hasFit && points.length > 0) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 12 });
      setHasFit(true);
    }
  }, [map, points, hasFit]);

  useEffect(() => {
    if (activeStop) {
      map.flyTo([activeStop.lat, activeStop.lng], 14, {
        duration: 2.0,
        easeLinearity: 0.25
      });
    } else if (hasFit && points.length > 0) {
      // Re-fit to all points when "Reset View" is clicked (activeStop becomes null)
      const bounds = L.latLngBounds(points);
      map.flyTo(bounds.getCenter(), zoom, { duration: 1.5 });
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 12, animate: true });
    }
  }, [activeStop, map, points, hasFit, zoom]);

  return null;
}

export default function InteractiveTrekMap({ duration, price, startPoint, endPoint, trekName }: InteractiveTrekMapProps) {
  const { openBooking } = useBooking();
  const [selectedStop, setSelectedStop] = useState<MapStop | null>(null);
  const center: L.LatLngExpression = [27.81, 86.0]; // Center between KTM and Khumbu
  const initialZoom = 9; 
  const polylinePositions: L.LatLngExpression[] = GOKYO_ROUTE.map(stop => [stop.lat, stop.lng]);

  return (
    <div className="relative max-w-6xl mx-auto rounded-[48px] overflow-hidden shadow-2xl border border-stone-200 bg-white group mt-12 mb-12">
      <style>{`
        .leaflet-container { background: #f5f5f4; }
        .animated-path {
          stroke-dasharray: 10;
          animation: dash 20s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 24px;
          padding: 8px;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
        }
        .leaflet-control-layers {
          border-radius: 12px !important;
          border: 1px solid rgba(0,0,0,0.05) !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1) !important;
          margin: 12px !important;
          padding: 8px !important;
        }
        .leaflet-control-layers-list {
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="h-[450px] md:h-[700px] w-full z-0 relative">
        <MapContainer 
          center={center} 
          zoom={initialZoom} 
          scrollWheelZoom={false}
          className="h-full w-full"
          zoomControl={false}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Satellite">
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution='&copy; ESRI'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Terrain">
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.webp"
                attribution='&copy; OpenTopoMap'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Standard">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.webp"
                attribution='&copy; OpenStreetMap'
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          <MapController center={center} zoom={initialZoom} activeStop={selectedStop} points={polylinePositions} />
          
          <Polyline 
            positions={polylinePositions} 
            pathOptions={{ 
              color: '#10b981', 
              weight: 5, 
              opacity: 0.8,
              lineCap: 'round',
              lineJoin: 'round',
              className: 'animated-path'
            }} 
          />

          {GOKYO_ROUTE.map((stop, idx) => (
            <Marker 
              key={idx} 
              position={[stop.lat, stop.lng]}
              icon={createPulsingIcon(selectedStop?.name === stop.name)}
              eventHandlers={{
                click: () => setSelectedStop(stop),
              }}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full">
                      Day {stop.day}
                    </span>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                      Waypoint {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-stone-900 mb-1 tracking-tighter">{stop.name}</h4>
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-sm mb-3">
                    <Mountain className="w-4 h-4" /> {stop.altitude}
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed italic border-l-2 border-emerald-100 pl-3">
                    {stop.desc}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Floating Controls */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-[1000] flex flex-col gap-3 max-w-[calc(100%-100px)]">
          <div className="glass-light p-3 md:p-4 rounded-[24px] md:rounded-[32px] border border-white/50 shadow-2xl">
             <h3 className="text-sm md:text-xl font-black text-stone-900 tracking-tighter truncate">{trekName} Explorer</h3>
             <p className="hidden md:block text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Interactive Route Discovery</p>
          </div>
          
          {selectedStop && (
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={() => setSelectedStop(null)}
              className="bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl border border-stone-200 text-stone-600 text-[10px] md:text-xs font-black uppercase tracking-widest shadow-xl hover:bg-white flex items-center gap-2 w-fit"
            >
              <ZoomIn className="w-3 h-3 md:w-4 md:h-4" /> Reset View
            </motion.button>
          )}
        </div>
      </div>

      {/* Premium Footer Overlay */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 -mt-16 sm:-mt-12 mx-4 sm:mx-6 mb-4 sm:mb-6"
      >
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] border border-stone-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-16 w-full md:w-auto">
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-stone-400">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">Duration</span>
              </div>
              <p className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight">{duration}</p>
            </div>
            <div className="space-y-2 sm:space-y-4 hidden lg:block">
              <div className="flex items-center gap-2 sm:gap-3 text-stone-400">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">Route Bound</span>
              </div>
              <p className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight">{startPoint} - {endPoint}</p>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-stone-400">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">Investment</span>
              </div>
              <p className="text-xl sm:text-3xl font-black text-emerald-600 tracking-tighter leading-none">US {price}</p>
            </div>
          </div>
          
          <button 
            onClick={() => openBooking(trekName)}
            className="w-full md:w-auto px-6 py-4 sm:px-10 sm:py-6 bg-stone-900 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] rounded-[20px] sm:rounded-[24px] flex items-center justify-center gap-3 sm:gap-4 hover:bg-emerald-600 transition-all hover:scale-[1.02] shadow-2xl hover:shadow-emerald-500/20 group"
          >
            Start Adventure <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
