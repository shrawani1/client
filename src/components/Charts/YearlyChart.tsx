import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const YearlyChart: React.FC = () => {
  // Dummy data for demonstration
  const data = [
    { month: 'Jan', revenue: 3000 },
    { month: 'Feb', revenue: 2000 },
    { month: 'Mar', revenue: 2500 },
    { month: 'Apr', revenue: 4000 },
    { month: 'May', revenue: 3500 },
    { month: 'Jun', revenue: 3000 },
    { month: 'Jul', revenue: 4200 },
    { month: 'Aug', revenue: 3800 },
    { month: 'Sep', revenue: 2500 },
    { month: 'Oct', revenue: 4000 },
    { month: 'Nov', revenue: 3800 },
    { month: 'Dec', revenue: 4500 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#673ab7" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YearlyChart;
