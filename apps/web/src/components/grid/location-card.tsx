'use client';

import { Map as MapboxMap, Marker } from 'react-map-gl/mapbox';
import { TiltCard } from '@/components/tilt-card';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LocationCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function LocationCard({ colSpan = 1, rowSpan = 2 }: LocationCardProps) {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  return (
    <TiltCard
      className="flex h-full flex-col overflow-hidden p-0"
      colSpan={colSpan}
      rowSpan={rowSpan}
      tiltMaxAngleX={0}
      tiltMaxAngleY={0}
    >
      <div className="relative h-full w-full">
        <MapboxMap
          attributionControl={false}
          doubleClickZoom={true}
          dragPan={true}
          dragRotate={true}
          initialViewState={{
            longitude: 10.4036,
            latitude: 63.4305,
            zoom: 10,
          }}
          interactive={true}
          keyboard={true}
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/dark-v11"
          scrollZoom={true}
          style={{ width: '100%', height: '100%' }}
          touchZoomRotate={true}
        >
          <Marker anchor="bottom" latitude={63.4305} longitude={10.4036}>
            <div className="animate-pulse text-2xl">📍</div>
          </Marker>
        </MapboxMap>

        <div className="absolute right-4 bottom-4 text-right">
          <h3 className="mb-2 font-semibold text-sm text-white/70">Location</h3>
          <h2 className="mb-1 font-bold text-lg text-white">Trondheim</h2>
          <p className="text-sm text-white/60">Norway</p>
        </div>
      </div>
    </TiltCard>
  );
}
