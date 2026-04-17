import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList,
} from 'recharts';
import { useState } from 'react';

export interface AltitudeDataPoint {
  day: number;
  title: string;
  altitude: number;
}

interface AltitudeGraphProps {
  data: AltitudeDataPoint[];
  color?: string; // Hex color for the theme
}

export default function AltitudeGraph({ data, color = "#4ade80" }: AltitudeGraphProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Find min and max for scaling
  const minAltitude = Math.min(...data.map(d => d.altitude));
  const maxAltitude = Math.max(...data.map(d => d.altitude));

  // Custom Tick for the X Axis to match the boxed active state
  const CustomXAxisTick = (props: any) => {
    const { x, y, payload, index } = props;
    const isActive = index === activeIndex;

    return (
      <g transform={`translate(${x},${y})`}>
        {isActive && (
          <rect x={-14} y={-4} width={28} height={28} fill="#f8fafc" stroke="#cbd5e1" rx={3} />
        )}
        <text x={0} y={15} textAnchor="middle" fill={isActive ? '#0f172a' : '#64748b'} fontSize={13} fontWeight={500}>
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full bg-white mb-12 font-sans relative">
      <div className="absolute top-0 left-0 bg-[#0f2942] text-white px-3 py-1 z-10 shadow-sm">
        <h3 className="text-xl font-bold tracking-wide">
          Altitude Graph
        </h3>
      </div>
      
      <div className="h-[400px] w-full pt-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 30, bottom: 30 }}
            onMouseMove={(state: any) => {
              if (state.isTooltipActive) setActiveIndex(state.activeTooltipIndex ?? null);
              else setActiveIndex(null);
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <defs>
              <linearGradient id="colorAltitude" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            
            <XAxis 
              dataKey="day" 
              axisLine={{ stroke: '#f1f5f9', strokeWidth: 2 }} 
              tickLine={false} 
              tick={<CustomXAxisTick />}
              dy={10}
            />
            {/* Hidden Y-Axis just for scaling */}
            <YAxis 
              hide={true} 
              domain={[minAltitude > 500 ? minAltitude - 500 : 0, maxAltitude + 500]} 
            />
            
            <Tooltip 
              cursor={{ stroke: '#9ca3af', strokeWidth: 1, strokeDasharray: "4 4" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload as AltitudeDataPoint;
                  return (
                    <div className="bg-white border border-stone-200 p-4 rounded-xl shadow-xl text-left min-w-[160px]">
                      <p className="font-bold text-stone-900 text-sm mb-1">Day {item.day}: {item.title}</p>
                      <p className="text-stone-600 text-sm">Elevation: {item.altitude}m</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            
            <Area 
              type="linear" 
              dataKey="altitude" 
              stroke={color} 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorAltitude)" 
              animationDuration={1500}
              activeDot={{ r: 6, fill: "white", stroke: color, strokeWidth: 2 }}
              dot={{ r: 5, fill: "white", stroke: color, strokeWidth: 2 }}
            >
              <LabelList 
                dataKey="altitude" 
                position="top" 
                offset={12}
                formatter={(val: number) => `${val}m`}
                style={{ fontSize: '12px', fontWeight: 'bold', fill: '#0f172a' }}
              />
            </Area>
            
            {/* Adds the "DAYS" text at the very bottom center. */}
            <text x="50%" y="100%" textAnchor="middle" className="text-sm font-black fill-stone-800 tracking-widest" style={{ transform: 'translateY(-5px)' }}>
              DAYS
            </text>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
