import React from 'react';

const totalGoals = 10;
const completedGoals = 7;
const percentage = Math.round((completedGoals / totalGoals) * 100);

const GoalsAccomplished: React.FC = () => {
  return (
    <div className="p-6 bg-gray-800 min-h-[100vh] text-white flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold mb-4">✅ Goals Accomplished</h3>
      <div className="w-40 h-40 rounded-full border-8 border-green-400 flex items-center justify-center text-2xl font-bold">
        {percentage}%
      </div>
      <p className="mt-4">{completedGoals} of {totalGoals} goals completed</p>
    </div>
  );
};

export default GoalsAccomplished;

