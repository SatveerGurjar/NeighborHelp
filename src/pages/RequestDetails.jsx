import React, { useState } from 'react';
import { ArrowLeft, Clock, MapPin, CheckCircle, Shield, MessageCircle } from 'lucide-react';
import { dummyRequests, dummyUsers, currentUser } from '../data';

const RequestDetails = ({ requestId, onNavigate }) => {
  const request = dummyRequests.find(r => r.id === requestId) || dummyRequests[0];
  const reqUser = dummyUsers.find(u => u.id === request.requesterId) || currentUser;
  const helperUser = dummyUsers.find(u => u.id === request.helperId);
  const isOwner = currentUser.id === request.requesterId;
  const [status, setStatus] = useState(request.status);

  return (
    <div className="content-area bg-surface h-full pb-20">
      <div className="flex items-center gap-3 mb-4 sticky top-0 py-4 bg-surface z-10">
        <button className="btn-ghost p-1" onClick={() => onNavigate('dashboard')}><ArrowLeft size={20}/></button>
        <h1 className="text-xl font-bold flex-1 truncate">Details</h1>
        {status === 'Open' && <span className="badge badge-info text-xs">{status}</span>}
      </div>

      <div className="flex justify-between items-start mb-6 border-b pb-6">
        <div className="flex items-center gap-3">
          <img src={reqUser.avatar} className="avatar avatar-lg shadow-sm border" alt="Requester" />
          <div>
            <h3 className="font-bold text-lg">{reqUser.name}</h3>
            <div className="flex items-center gap-2 text-xs text-muted mb-1">
              <MapPin size={12}/> {request.distance} away
            </div>
            {reqUser.badges && reqUser.badges.map((b, i) => (
              <span key={i} className="badge bg-green-50 text-secondary text-[10px] mr-1">
                <Shield size={10} className="mr-1"/> {b}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="font-bold text-primary flex items-center gap-1">⭐ {reqUser.reputation}</div>
          <span className="text-[10px] text-muted">Reputation</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{request.title}</h2>
        <span className="badge bg-background text-text-muted mb-4">{request.category}</span>
        
        <p className="text-sm leading-relaxed mb-4">{request.description}</p>
        
        <div className="flex items-center gap-1 text-xs text-muted">
          <Clock size={14}/> Posted {new Date(request.createdAt).toLocaleString()}
        </div>
      </div>

      {!isOwner && status === 'Open' && (
        <div className="mt-8 flex flex-col gap-3">
          <button 
            className="btn btn-primary w-full py-3 text-lg" 
            onClick={() => setStatus('Accepted')}
          >
            Offer Help
          </button>
          <button className="btn btn-outline w-full text-muted border-border">
            Report Concern
          </button>
        </div>
      )}

      {status !== 'Open' && (
        <div className="card border-primary p-4 bg-primary-light flex items-center justify-between mt-8">
          <div>
            <h4 className="font-bold text-primary mb-1">Status: {status}</h4>
            <p className="text-xs text-primary/80">
              {helperUser ? `${helperUser.name} is helping.` : 'Someone is helping.'}
            </p>
          </div>
          <button 
            className="btn bg-white text-primary border-none shadow-sm h-10 w-10 p-0 rounded-full flex justify-center items-center"
            onClick={() => onNavigate('chat', { id: request.id })}
          >
            <MessageCircle size={20} />
          </button>
        </div>
      )}

      {isOwner && status === 'Accepted' && (
        <button 
          className="btn btn-secondary w-full py-3 mt-4 flex justify-center gap-2"
          onClick={() => setStatus('Completed')}
        >
          <CheckCircle size={20} /> Mark as Completed
        </button>
      )}

    </div>
  );
};

export default RequestDetails;
