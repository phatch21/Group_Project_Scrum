import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'Spiritual', goals: 4 },
  { category: 'Physical', goals: 2 },
  { category: 'Work', goals: 3 },
  { category: 'Social', goals: 1 },
];

const GoalsByCategory: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 min-h-[100vh] text-white">
      <h3 className="text-xl font-bold mb-4">📊 Goals By Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="goals" fill="#00d1b2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalsByCategory;

