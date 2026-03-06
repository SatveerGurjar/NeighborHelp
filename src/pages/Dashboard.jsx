import React, { useState } from 'react';
import { Filter, Search, Plus } from 'lucide-react';
import { currentUser, dummyRequests, dummyUsers } from '../data';
import RequestCard from '../components/RequestCard';

const Dashboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [distance, setDistance] = useState('3km');

  // Filter requests
  const filteredRequests = dummyRequests.filter(req => {
    if (activeTab === 'Urgent' && !req.isEmergency) return false;
    if (activeTab === 'My Requests' && req.requesterId !== currentUser.id) return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full bg-background pt-4 px-4 pb-20">
      <div className="app-header bg-background pt-2 pb-4 -mx-4 px-4 border-none mb-2">
        <div>
          <h1 className="text-xl font-bold">Hi, {currentUser.name.split(' ')[0]} 👋</h1>
          <p className="text-sm text-muted">📍 {currentUser.location.locality}</p>
        </div>
        <img 
          src={currentUser.avatar} 
          alt="Profile" 
          className="avatar cursor-pointer shadow-sm border border-border" 
          onClick={() => onNavigate('profile')}
        />
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        <button 
          className={`btn btn-sm whitespace-nowrap px-4 py-2 rounded-full border ${activeTab === 'All' ? 'bg-text-dark text-white' : 'bg-surface text-text-muted border-border'}`}
          onClick={() => setActiveTab('All')}
        >
          All Requests
        </button>
        <button 
          className={`btn btn-sm whitespace-nowrap px-4 py-2 rounded-full border ${activeTab === 'Urgent' ? 'bg-danger text-white border-danger' : 'bg-surface text-text-muted border-border'}`}
          onClick={() => setActiveTab('Urgent')}
        >
          🚨 Urgent
        </button>
        <button 
          className={`btn btn-sm whitespace-nowrap px-4 py-2 rounded-full border ${activeTab === 'My Requests' ? 'bg-primary text-white border-primary' : 'bg-surface text-text-muted border-border'}`}
          onClick={() => setActiveTab('My Requests')}
        >
          My Requests
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-text-dark">Nearby Help Needed</h2>
        <div className="flex items-center gap-1 text-xs text-muted font-medium bg-surface px-2 py-1 rounded-md border border-border">
          <Filter size={14} />
          <select 
            value={distance} 
            onChange={(e) => setDistance(e.target.value)}
            className="bg-transparent border-none outline-none cursor-pointer"
          >
            <option value="1km">&lt; 1km</option>
            <option value="3km">&lt; 3km</option>
            <option value="5km">&lt; 5km</option>
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredRequests.length > 0 ? (
          filteredRequests.map(req => {
            const user = dummyUsers.find(u => u.id === req.requesterId) || currentUser;
            return (
              <RequestCard 
                key={req.id} 
                request={req} 
                user={user} 
                onClick={() => onNavigate('request-details', { id: req.id })}
              />
            );
          })
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon"><Search size={32} /></div>
            <h3 className="font-semibold text-lg">No requests nearby</h3>
            <p>Try expanding your search radius or be the first to ask for help.</p>
          </div>
        )}
      </div>

      {/* Floating Action Button for mobile mostly, though we have bottom nav */}
    </div>
  );
};

export default Dashboard;
