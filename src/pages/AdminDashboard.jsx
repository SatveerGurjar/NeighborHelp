import React, { useState } from 'react';
import { ArrowLeft, Users, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import { dummyUsers, dummyRequests } from '../data';

const AdminDashboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Stats
  const totalUsers = dummyUsers.length + 1; // plus currentUser
  const activeRequests = dummyRequests.filter(r => r.status === 'Open' || r.status === 'Accepted').length;
  const reportedUsers = 1; // Simulated

  return (
    <div className="content-area bg-background h-screen flex flex-col pt-6 pb-20">
      <div className="flex items-center gap-3 mb-6 px-4">
        <button className="btn-ghost p-1" onClick={() => onNavigate('dashboard')}><ArrowLeft size={20}/></button>
        <h1 className="text-xl font-bold flex-1">Admin Panel</h1>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto px-4 pb-2" style={{ scrollbarWidth: 'none' }}>
        {['Overview', 'Reports', 'Verification'].map(tab => (
          <button 
            key={tab}
            className={`btn btn-sm px-4 py-2 rounded-full border ${activeTab === tab ? 'bg-text-dark text-white' : 'bg-surface text-text-muted border-border'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {activeTab === 'Overview' && (
          <div className="animate-fade-in flex flex-col gap-4">
            <h2 className="font-semibold text-text-dark">Community Health</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4 flex flex-col items-center justify-center bg-blue-50 border-primary-light">
                <Users size={24} className="text-primary mb-2" />
                <h3 className="text-2xl font-bold">{totalUsers}k+</h3>
                <span className="text-xs text-muted">Active Users</span>
              </div>
              <div className="card p-4 flex flex-col items-center justify-center bg-green-50 border-secondary-light">
                <Activity size={24} className="text-secondary mb-2" />
                <h3 className="text-2xl font-bold">{activeRequests}k</h3>
                <span className="text-xs text-muted">Weekly Requests</span>
              </div>
              <div className="card p-4 flex flex-col items-center justify-center bg-red-50 border-danger/20">
                <AlertTriangle size={24} className="text-danger mb-2" />
                <h3 className="text-2xl font-bold">{reportedUsers}</h3>
                <span className="text-xs text-muted">Pending Reports</span>
              </div>
              <div className="card p-4 flex flex-col items-center justify-center bg-purple-50 border-purple-100">
                <ShieldCheck size={24} className="text-purple-600 mb-2" />
                <h3 className="text-2xl font-bold">98%</h3>
                <span className="text-xs text-muted">Safe Rating</span>
              </div>
            </div>

            <h2 className="font-semibold text-text-dark mt-6 mb-2">Recent Flags</h2>
            <div className="card border-warning p-4 bg-orange-50/50">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="avatar avatar-sm bg-danger/10 text-danger font-bold">!</div>
                  <span className="text-sm font-semibold">User Report: "Spam behavior"</span>
                </div>
                <span className="text-xs text-muted">2h ago</span>
              </div>
              <p className="text-xs text-muted mb-3">User @Alex flagged for sending repeated generic messages.</p>
              <div className="flex gap-2">
                <button className="btn btn-sm bg-white border border-border text-xs px-3 py-1 text-danger">Suspend</button>
                <button className="btn btn-sm bg-white border border-border text-xs px-3 py-1">Dismiss</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Verification' && (
          <div className="animate-fade-in">
            <h2 className="font-semibold text-text-dark mb-4">Pending Verifications</h2>
            <div className="card flex items-center justify-between mb-3 border-border">
              <div className="flex items-center gap-3">
                <img src={dummyUsers[2].avatar} alt="" className="avatar avatar-sm" />
                <div>
                  <h4 className="font-bold text-sm text-text-dark">{dummyUsers[2].name}</h4>
                  <p className="text-[10px] text-muted">ID Uploaded • Checking Address</p>
                </div>
              </div>
              <button className="btn btn-sm bg-secondary text-white text-xs px-3 rounded-full flex gap-1 items-center">
                <ShieldCheck size={14} /> Verify
              </button>
            </div>
          </div>
        )}

        {activeTab === 'Reports' && (
          <div className="empty-state animate-fade-in">
            <div className="empty-state-icon"><ShieldCheck size={32} className="text-primary"/></div>
            <h3 className="font-semibold text-lg">All clear!</h3>
            <p>No new user reports in your area.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
