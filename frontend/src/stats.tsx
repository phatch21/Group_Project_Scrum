import React, { useRef } from 'react';

// Image imports
import GoalsWeekIcon from '../assets/goals-this-week.png';
import CategoryIcon from '../assets/goals-by-category.png';
import TimeIcon from '../assets/goals-over-time.png';
import AccomplishedIcon from '../assets/goals-accomplished.png';

// Component imports
import GoalsThisWeek from './components/GoalsThisWeek';
import GoalsByCategory from './components/GoalsByCategory';
import GoalsOverTime from './components/GoalsOverTime';
import GoalsAccomplished from './components/GoalsAccomplished';

const StatsPage: React.FC = () => {
  const weekRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef<HTMLDivElement | null>(null);
  const accomplishedRef = useRef<HTMLDivElement | null>(null);


  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Sticky Header */}
      <div className="bg-white text-black p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-center">My Stats</h2>
      </div>

      {/* Stat Buttons */}
      <div className="flex flex-col items-center gap-4 px-4 py-6">
        <StatButton label="Goals This Week" icon={GoalsWeekIcon} onClick={() => scrollToSection(weekRef)} />
        <StatButton label="Goals By Category" icon={CategoryIcon} onClick={() => scrollToSection(categoryRef)} />
        <StatButton label="Goals Over Time" icon={TimeIcon} onClick={() => scrollToSection(timeRef)} />
        <StatButton label="Goals Accomplished / Goals Set" icon={AccomplishedIcon} onClick={() => scrollToSection(accomplishedRef)} />
      </div>

      {/* Stat Sections */}
      <div ref={weekRef}><GoalsThisWeek /></div>
      <div ref={categoryRef}><GoalsByCategory /></div>
      <div ref={timeRef}><GoalsOverTime /></div>
      <div ref={accomplishedRef}><GoalsAccomplished /></div>
    </div>
  );
};

interface StatButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
}

const StatButton: React.FC<StatButtonProps> = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full max-w-xs flex items-center gap-4 bg-white text-black p-4 rounded-xl shadow-md hover:shadow-xl transition"
  >
    <img src={icon} alt={label} className="w-10 h-10" />
    <span className="text-lg font-medium">{label}</span>
  </button>
);

export default StatsPage;



