import React from 'react';
import { MapPin, Clock, MessageCircle, AlertTriangle } from 'lucide-react';

const RequestCard = ({ request, user, onClick }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Open': return <span className="badge badge-info">{status}</span>;
      case 'Accepted': return <span className="badge badge-warning">{status}</span>;
      case 'In Progress': return <span className="badge badge-warning">{status}</span>;
      case 'Completed': return <span className="badge badge-success">{status}</span>;
      default: return <span className="badge">{status}</span>;
    }
  };

  const timeAgo = (dateStr) => {
    const hours = Math.floor((new Date() - new Date(dateStr)) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div 
      className={`card cursor-pointer mb-4 ${request.isEmergency ? 'border-danger bg-red-50' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          {user ? (
            <img src={user.avatar} alt={user.name} className="avatar avatar-sm" />
          ) : (
            <div className="avatar avatar-sm bg-border text-muted">?</div>
          )}
          <div>
            <h4 className="text-sm font-semibold">{user ? user.name : 'Neighbor'}</h4>
            <div className="text-xs text-muted flex items-center gap-1">
              <MapPin size={10} /> {request.distance}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {getStatusBadge(request.status)}
          {request.isEmergency && (
            <span className="badge bg-danger text-white rounded"><AlertTriangle size={12}/> Emergency</span>
          )}
        </div>
      </div>
      
      <h3 className="font-bold mb-1 text-md truncate">{request.title}</h3>
      <p className="text-sm text-muted line-clamp-2 mb-3">
        {request.description}
      </p>

      <div className="flex justify-between items-center text-xs text-muted border-t pt-2">
        <span className="flex items-center gap-1"><Clock size={12} /> {timeAgo(request.createdAt)}</span>
        <span className="badge bg-background text-text-muted">{request.category}</span>
      </div>
    </div>
  );
};

export default RequestCard;
