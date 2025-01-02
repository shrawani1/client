import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const WeeklyChart: React.FC = () => {
  // Dummy data for demonstration
  const data = [
    { name: 'Mon', sales: 100 },
    { name: 'Tue', sales: 120 },
    { name: 'Wed', sales: 80 },
    { name: 'Thu', sales: 140 },
    { name: 'Fri', sales: 200 },
    { name: 'Sat', sales: 170 },
    { name: 'Sun', sales: 90 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#673ab7"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeeklyChart;
