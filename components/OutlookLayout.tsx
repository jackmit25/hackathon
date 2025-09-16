import React, { useState } from 'react';
import { 
  Mail, 
  Calendar, 
  Users, 
  CheckSquare, 
  Search, 
  Bell, 
  Settings, 
  Menu,
  ChevronDown,
  Star,
  Archive,
  Trash2,
  Send,
  FileText,
  Plus,
  MoreHorizontal,
  Reply,
  Forward,
  Filter,
  SortAsc,
  Grid3X3,
} from 'lucide-react';

interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  time: string;
  isRead: boolean;
  isSelected: boolean;
  isImportant: boolean;
}

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  date: string;
}

const mockEmails: Email[] = [
  {
    id: '1',
    from: 'Jack Mitchell',
    subject: 'Tester',
    preview: 'Tester, tester',
    time: '13:14',
    isRead: false,
    isSelected: true,
    isImportant: false
  },
  {
    id: '2',
    from: 'Outlook Team',
    subject: 'Welcome to your new Outlook...',
    preview: 'Hi Welcome to your Outlook! We\'re ...',
    time: '10:44',
    isRead: true,
    isSelected: false,
    isImportant: false
  }
];

const mockCalendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    time: '2:00 PM',
    date: '16'
  },
  {
    id: '2',
    title: 'Project Review',
    time: '4:30 PM',
    date: '18'
  }
];

export default function OutlookLayout() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(mockEmails[0]);
  const [activeTab, setActiveTab] = useState<'focused' | 'other'>('focused');
  const [activeView, setActiveView] = useState<'calendar' | 'todo'>('calendar');

  return (
    <div className="outlook-container">
      {/* Top Header Bar */}
      <div className="outlook-header">
        <div className="outlook-header-left">
          <div className="outlook-logo">Outlook</div>
          <div className="outlook-search">
            <Search className="outlook-search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        
        <div className="outlook-header-right">
          <button className="outlook-header-button">
            Meet Now
          </button>
          <button className="outlook-header-button">
            <Calendar size={16} />
          </button>
          <button className="outlook-header-button">
            <CheckSquare size={16} />
          </button>
          <button className="outlook-header-button">
            <Bell size={16} />
          </button>
          <button className="outlook-header-button">
            <Settings size={16} />
          </button>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0078d4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600' }}>
            JM
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="outlook-main">
        {/* Left Navigation Sidebar */}
        <div className="outlook-nav-sidebar">
          <button className="outlook-nav-button">
            <Menu size={20} />
          </button>
          <button className="outlook-nav-button active">
            <Mail size={20} />
          </button>
          <button className="outlook-nav-button">
            <Calendar size={20} />
          </button>
          <button className="outlook-nav-button">
            <Users size={20} />
          </button>
          <button className="outlook-nav-button">
            <CheckSquare size={20} />
          </button>
          <button className="outlook-nav-button">
            <FileText size={20} />
          </button>
          <button className="outlook-nav-button">
            <FileText size={20} />
          </button>
          <button className="outlook-nav-button">
            <FileText size={20} />
          </button>
          <button className="outlook-nav-button">
            <Grid3X3 size={20} />
          </button>
        </div>

        {/* Left Panel - Folders and Accounts */}
        <div className="outlook-left-panel">
          {/* Help Section */}
          <div className="outlook-help-section">
            <div className="outlook-tabs">
              <button className="outlook-tab">Home</button>
              <button className="outlook-tab">View</button>
              <button className="outlook-tab active">Help</button>
            </div>
            <div className="outlook-help-buttons">
              <button className="outlook-help-button">
                <span>?</span> Help
              </button>
              <button className="outlook-help-button">
                Tips
              </button>
              <button className="outlook-help-button">
                Feedback
              </button>
              <button className="outlook-help-button">
                Outlook mobile
              </button>
            </div>
          </div>

          {/* Favourites Section */}
          <div className="outlook-favourites-section">
            <div className="outlook-section-header">
              Favourites
              <ChevronDown size={16} />
            </div>
            <div className="outlook-folder-list">
              <button className="outlook-folder-button">Inbox</button>
              <button className="outlook-folder-button">Drafts</button>
              <button className="outlook-folder-button">Archive</button>
            </div>
          </div>

          {/* Email Account Section */}
          <div className="outlook-account-section">
            <div className="outlook-account-header">
              jack.mit.25@outlo...
              <ChevronDown size={16} />
            </div>
            <div className="outlook-folder-list">
              <button className="outlook-folder-button active">Inbox</button>
              <button className="outlook-folder-button">Junk Email</button>
              <button className="outlook-folder-button">Drafts</button>
              <button className="outlook-folder-button">Sent Items</button>
              <button className="outlook-folder-button">Deleted Items</button>
              <button className="outlook-folder-button">Archive</button>
              <button className="outlook-folder-button">Conversation Histo...</button>
              <button className="outlook-folder-button">Notes</button>
              <button className="outlook-folder-button" style={{ color: '#0078d4' }}>Go to Groups</button>
            </div>
          </div>

          {/* Mobile App Section */}
          <div className="outlook-mobile-section">
            <div className="outlook-mobile-text">Get Outlook mobile. Stay connected on the go!</div>
          </div>
        </div>

        {/* Center Panel - Email List */}
        <div className="outlook-center-panel">
          {/* Email List Header */}
          <div className="outlook-email-header">
            <div className="outlook-email-tabs">
              <button 
                className={`outlook-email-tab ${activeTab === 'focused' ? 'active' : ''}`}
                onClick={() => setActiveTab('focused')}
              >
                Focused
              </button>
              <button 
                className={`outlook-email-tab ${activeTab === 'other' ? 'active' : ''}`}
                onClick={() => setActiveTab('other')}
              >
                Other
              </button>
            </div>
            <div className="outlook-email-controls">
              <button className="outlook-email-control-button">
                <SortAsc size={16} />
              </button>
              <button className="outlook-email-control-button">
                <Filter size={16} />
              </button>
            </div>
          </div>

          {/* Email List */}
          <div className="outlook-email-list">
            {mockEmails.map((email) => (
              <div
                key={email.id}
                className={`outlook-email-item ${email.isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedEmail(email)}
              >
                <div className={`outlook-email-avatar ${email.from === 'Genie' ? 'purple' : 'blue'}`}>
                  {email.from.charAt(0)}
                </div>
                <div className="outlook-email-content">
                  <div className="outlook-email-header-row">
                    <span className="outlook-email-sender">{email.from}</span>
                    <span className="outlook-email-time">{email.time}</span>
                    {email.isImportant && <Star className="outlook-email-important" size={16} />}
                  </div>
                  <div className="outlook-email-subject">{email.subject}</div>
                  <div className="outlook-email-preview">{email.preview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Email Content */}
        <div className="outlook-right-panel">
          {selectedEmail && (
            <>
              {/* Email Header */}
              <div className="outlook-email-view-header">
                <div className="outlook-email-view-title">
                  Acme SaaS contract auto-renews soon — send notice or renegotiate
                </div>
                <div className="outlook-email-view-meta">
                  <div className="outlook-email-view-avatar">G</div>
                  <div className="outlook-email-view-details">
                    <div className="outlook-email-view-sender">Genie</div>
                    <div className="outlook-email-view-to">To: You</div>
                    <div className="outlook-email-view-date">Tue 16/09/2025 13:14</div>
                  </div>
                  <div className="outlook-email-view-actions">
                    <button className="outlook-email-view-action">
                      <Reply size={16} />
                    </button>
                    <button className="outlook-email-view-action">
                      <Forward size={16} />
                    </button>
                    <button className="outlook-email-view-action">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="outlook-email-view-body">
                <div className="outlook-email-view-content">
                  <p>Acme SaaS Order Form will auto-renew on 01 Oct 2025 unless notice is sent by 21 Sep.</p>
                  <p>Value at stake: £180k ARR</p>
                  <p>Send renewal-intent email (with pricing + terms update) or send non-renewal notice.</p>
                  <p>[Open in Genie] Review Clause 11.2, see draft text, and ask Genie for fallback options.</p>
                </div>
                
                <div className="outlook-email-view-buttons">
                  <button className="outlook-email-view-button primary">Reply</button>
                  <button className="outlook-email-view-button secondary">Forward</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Far Right Panel - Calendar and To Do */}
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
      </div>
    </div>
  );
}
