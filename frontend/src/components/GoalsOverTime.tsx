import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mar 21', completed: 1 },
  { date: 'Mar 22', completed: 2 },
  { date: 'Mar 23', completed: 3 },
  { date: 'Mar 24', completed: 4 },
  { date: 'Mar 25', completed: 5 },
];

const GoalsOverTime: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-[100vh] text-white">
      <h3 className="text-xl font-bold mb-4">📈 Goals Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="completed" stroke="#00ffcc" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalsOverTime;

