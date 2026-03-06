import React from 'react';
import { Settings, Shield, Star, LogOut, ChevronRight } from 'lucide-react';
import { currentUser } from '../data';

const Profile = ({ onNavigate, onLogout }) => {
  return (
    <div className="content-area bg-background h-full pb-20 pt-6">
      <div className="flex justify-between items-center mb-6 px-4">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button className="btn-ghost p-2" onClick={() => onNavigate('settings')}><Settings size={22} /></button>
      </div>

      <div className="card mx-4 mb-6 flex flex-col items-center pt-8 pb-6 bg-surface">
        <img src={currentUser.avatar} alt={currentUser.name} className="avatar avatar-lg shadow-md mb-3" style={{width: 80, height: 80}} />
        <h2 className="text-xl font-bold">{currentUser.name}</h2>
        <p className="text-sm text-muted mb-4">{currentUser.location.city}, {currentUser.location.area}</p>
        
        <div className="flex justify-center gap-2 mb-4">
          {currentUser.badges.map(b => (
            <span key={b} className="badge bg-green-50 text-secondary border border-green-200">
              <Shield size={12} className="mr-1" /> {b}
            </span>
          ))}
        </div>

        <div className="flex bg-background rounded-xl w-full p-4 justify-around mt-2">
          <div className="text-center">
            <h4 className="font-bold text-lg text-primary">{currentUser.reputation}</h4>
            <p className="text-xs text-muted uppercase tracking-wide">Rep points</p>
          </div>
          <div className="w-[1px] bg-border"></div>
          <div className="text-center">
            <h4 className="font-bold text-lg text-primary">12</h4>
            <p className="text-xs text-muted uppercase tracking-wide">Helped</p>
          </div>
          <div className="w-[1px] bg-border"></div>
          <div className="text-center">
            <h4 className="font-bold text-lg text-primary">5</h4>
            <p className="text-xs text-muted uppercase tracking-wide">Requested</p>
          </div>
        </div>
      </div>

      <div className="mx-4 flex flex-col gap-2">
        <button className="card w-full flex items-center justify-between p-4 hover:bg-background">
          <div className="flex items-center gap-3 font-semibold">
            <Star className="text-warning" size={20}/> Reviews & Ratings
          </div>
          <ChevronRight size={18} className="text-muted" />
        </button>
        <button className="card w-full flex items-center justify-between p-4 hover:bg-background">
          <div className="flex items-center gap-3 font-semibold">
            <Shield className="text-secondary" size={20}/> Trust & Verification
          </div>
          <ChevronRight size={18} className="text-muted" />
        </button>
        <button className="card w-full flex items-center justify-between p-4 hover:bg-background">
          <div className="flex items-center gap-3 font-semibold">
            <Settings className="text-muted" size={20}/> Account Settings
          </div>
          <ChevronRight size={18} className="text-muted" />
        </button>
      </div>

      <div className="mx-4 mt-8 flex justify-center">
        <button className="btn btn-ghost text-danger font-semibold flex items-center gap-2" onClick={onLogout}>
          <LogOut size={18} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
