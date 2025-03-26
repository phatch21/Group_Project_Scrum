import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Goal = {
  id: string;
  name: string;
  category: string;
  dueDate: string;
  completed: boolean;
};

const mockGoals: Goal[] = [
  { id: '1', name: 'Read scriptures', category: 'Spiritual', dueDate: '2025-03-25', completed: false },
  { id: '2', name: 'Workout', category: 'Physical', dueDate: '2025-03-26', completed: true },
  { id: '3', name: 'Finish report', category: 'Work', dueDate: '2025-03-26', completed: false },
];

const GoalsThisWeek: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (value: Date | Date[]) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    }
  };

  const goalsForDate = mockGoals.filter(goal =>
    new Date(goal.dueDate).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="p-6 bg-gray-900 min-h-[100vh]">
      <h3 className="text-xl font-bold mb-4 text-white">📅 Goals This Week</h3>

      <Calendar onChange={handleDateChange} value={selectedDate} />

      <div className="mt-4 text-white">
        <h4 className="text-lg font-semibold">Goals for {selectedDate.toDateString()}</h4>
        {goalsForDate.length > 0 ? (
          <ul className="list-disc list-inside">
            {goalsForDate.map(goal => (
              <li key={goal.id}>{goal.name} ({goal.category})</li>
            ))}
          </ul>
        ) : (
          <p>No goals for this day.</p>
        )}
      </div>
    </div>
  );
};

export default GoalsThisWeek;


