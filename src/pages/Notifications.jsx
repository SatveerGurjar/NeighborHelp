import React from 'react';
import { dummyNotifications } from '../data';
import { Bell, HeartHandshake, Webhook, ShieldAlert } from 'lucide-react';

const Notifications = ({ onNavigate }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'offer': return <HeartHandshake className="text-secondary" size={20} />;
      case 'message': return <Webhook className="text-primary" size={20} />;
      case 'system': return <ShieldAlert className="text-warning" size={20} />;
      default: return <Bell className="text-muted" size={20} />;
    }
  };

  return (
    <div className="content-area bg-background h-full pb-20 pt-6 px-4">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      {dummyNotifications.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon"><Bell size={32} /></div>
          <h3>All caught up</h3>
          <p>No new notifications yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {dummyNotifications.map(notification => (
            <div 
              key={notification.id} 
              className={`card flex items-start gap-4 p-4 hover:bg-surface cursor-pointer ${notification.read ? 'opacity-70' : 'bg-primary-light border-primary'}`}
              onClick={() => onNavigate(notification.type === 'message' ? 'chat' : 'request-details', { id: 'r2' })}
            >
              <div className="p-2 bg-surface rounded-full shadow-sm">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <p className={`text-sm ${notification.read ? 'text-text-dark' : 'font-bold'}`}>
                  {notification.message}
                </p>
                <span className="text-xs text-muted mt-1 inline-block">{notification.time}</span>
              </div>
              {!notification.read && <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
