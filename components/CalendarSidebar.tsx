import React, { useState } from 'react';
import { 
  Plus
} from 'lucide-react';


interface CalendarSidebarProps {
  onDateSelect?: (date: number) => void;
}

export default function CalendarSidebar({ onDateSelect }: CalendarSidebarProps) {
  const [activeView, setActiveView] = useState<'calendar' | 'todo'>('calendar');

  return (
    <div className="outlook-calendar-panel">
      {/* Calendar/To Do Tabs */}
      <div className="outlook-calendar-tabs">
        <button 
          className={`outlook-calendar-tab ${activeView === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveView('calendar')}
        >
          Calendar
        </button>
        <button 
          className={`outlook-calendar-tab ${activeView === 'todo' ? 'active' : ''}`}
          onClick={() => setActiveView('todo')}
        >
          To Do
        </button>
      </div>

      {activeView === 'calendar' && (
        <div className="outlook-calendar-content">
          {/* Calendar Header */}
          <div className="outlook-calendar-header">
            <span className="outlook-calendar-month">September</span>
            <span className="outlook-calendar-year">2025</span>
          </div>

          {/* Calendar Grid */}
          <div className="outlook-calendar-grid">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="outlook-calendar-day-header">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`outlook-calendar-day ${day === 16 ? 'today' : ''}`}
                onClick={() => onDateSelect?.(day)}
                style={{ cursor: 'pointer' }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Events */}
          <div className="outlook-calendar-events">
            <div className="outlook-calendar-event-text">
              Nothing planned from September 16, 2025 to November 16, 2025
            </div>
            <div className="outlook-calendar-event-text">
              Enjoy!
            </div>
          </div>

          <button className="outlook-calendar-new-button">
            <Plus size={16} />
            New event
          </button>
        </div>
      )}

      {activeView === 'todo' && (
        <div className="outlook-todo-content">
          <div className="outlook-todo-header">To Do</div>
          <div className="outlook-todo-empty">No tasks yet</div>
          <button className="outlook-todo-new-button">
            <Plus size={16} />
            New task
          </button>
        </div>
      )}
    </div>
  );
}
