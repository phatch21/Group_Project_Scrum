import React, { useRef } from 'react';
import '../styles/stats.css';

// Image imports
import GoalsWeekIcon from '../assets/stats-calendarlogo.png';
import CategoryIcon from '../assets/stats-categorylogo.png';
import TimeIcon from '../assets/stats-timelogo.png';
import AccomplishedIcon from '../assets/stats-accomplishedgoals.png';

// Component imports
import GoalsThisWeek from '../components/GoalsThisWeek';
import GoalsByCategory from '../components/GoalsByCategory';
import GoalsOverTime from '../components/GoalsOverTime';
import GoalsAccomplished from '../components/GoalsAccomplished';

const StatsPage: React.FC = () => {
  // Refs to scroll into view
  const weekRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef<HTMLDivElement | null>(null);
  const accomplishedRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // centers horizontally
        alignItems: 'flex-start', // align to top so scrolling works
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '375px', // phone-like width
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '16px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
        className="stats-container"
      >
        {/* Sticky Header */}
        <header className="stats-header">
          <h2>My Stats</h2>
        </header>

        {/* Stat Buttons */}
        <div className="stats-buttons">
          <StatButton
            label="Goals This Week"
            icon={GoalsWeekIcon}
            onClick={() => scrollToSection(weekRef)}
          />
          <StatButton
            label="Goals By Category"
            icon={CategoryIcon}
            onClick={() => scrollToSection(categoryRef)}
          />
          <StatButton
            label="Goals Over Time"
            icon={TimeIcon}
            onClick={() => scrollToSection(timeRef)}
          />
          <StatButton
            label="Goals Accomplished / Goals Set"
            icon={AccomplishedIcon}
            onClick={() => scrollToSection(accomplishedRef)}
          />
        </div>

        {/* Stat Sections */}
        <div ref={weekRef} className="stat-section">
          <GoalsThisWeek />
        </div>
        <div ref={categoryRef} className="stat-section">
          <GoalsByCategory />
        </div>
        <div ref={timeRef} className="stat-section">
          <GoalsOverTime />
        </div>
        <div ref={accomplishedRef} className="stat-section">
          <GoalsAccomplished />
        </div>
      </div>
    </div>
  );
};

interface StatButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
}

const StatButton: React.FC<StatButtonProps> = ({ label, icon, onClick }) => (
  <div
    className="stat-button"
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      marginBottom: '1rem',
    }}
  >
    <img src={icon} alt={label} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
    <span style={{ fontSize: '1rem', fontWeight: 500 }}>{label}</span>
  </div>
);

export default StatsPage;








