import React from 'react';
import { 
  Send, 
  ChevronDown, 
  Trash2, 
  Maximize2
} from 'lucide-react';

interface ComposeEmailProps {
  onClose: () => void;
  selectedDate?: number;
}

export default function ComposeEmail({ onClose, selectedDate }: ComposeEmailProps) {
  return (
    <div className="outlook-compose-panel">
      {/* Compose Header */}
      <div className="outlook-compose-header">
        <div className="outlook-compose-actions">
          <button className="outlook-compose-send-button">
            <Send size={16} />
            Send
          </button>
          <button className="outlook-compose-dropdown-button">
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="outlook-compose-controls">
          <button className="outlook-compose-control-button">
            <Trash2 size={16} />
          </button>
          <button className="outlook-compose-control-button">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Compose Body */}
      <div className="outlook-compose-body">
        <div className="outlook-compose-recipients">
          <div className="outlook-compose-field">
            <span className="outlook-compose-label">To</span>
            <div className="outlook-compose-recipient-input">
              <span className="outlook-compose-recipient">Anne Smith &lt;anne.smith@acme.com&gt;</span>
            </div>
          </div>
          <div className="outlook-compose-field">
            <span className="outlook-compose-label">Cc</span>
            <span className="outlook-compose-label">Bcc</span>
          </div>
        </div>

        <div className="outlook-compose-subject">
          <div className="outlook-compose-subject-input">
            <span className="outlook-compose-subject-text">ACME SaaS Renewal Intent - Pricing & Terms Update</span>
          </div>
        </div>

        <div className="outlook-compose-content">
          <div className="outlook-compose-message">
            <p>Dear Anne Smith,</p>
            <br />
            <p>Thank you for your continued partnership with ACME. I am writing to discuss the upcoming renewal of our SaaS agreement and would like to propose some updates to our current terms.</p>
            <br />
            <p>As our current agreement is set to auto-renew on October 1st, 2025, I wanted to reach out to discuss potential improvements to our pricing structure and service terms that could benefit both parties.</p>
            {selectedDate === 17 && (
              <>
                <br />
                <p>Specifically, we would like to propose the following changes: 1) A 15% reduction in our annual licensing fees in exchange for a 3-year commitment, 2) Enhanced support coverage with dedicated account management, 3) Additional API access and integration capabilities at no extra cost, and 4) A more flexible payment structure with quarterly billing options. We believe these modifications will strengthen our partnership while providing better value for both organizations.</p>
              </>
            )}
            <br />
            <p>I would be happy to schedule a call to discuss these matters in detail. Please let me know your availability for the coming days.</p>
            <br />
            <p>Best regards,</p>
            <p>Jack Mitchell</p>
          </div>
        </div>
      </div>
    </div>
  );
}
