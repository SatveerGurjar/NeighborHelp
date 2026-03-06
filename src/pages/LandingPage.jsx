import React from 'react';
import { HeartHandshake, ShieldCheck, MapPin, Users } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="content-area animate-fade-in flex-col items-center text-center justify-center p-4">
      <div className="mb-6 mt-8">
        <HeartHandshake size={80} className="text-primary mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">NeighbourHelp</h1>
        <p className="text-muted text-lg">Hyperlocal help, just around the corner.</p>
      </div>

      <div className="card w-full mb-8 text-left bg-primary-light border-none">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck className="text-primary" />
          <h3 className="font-semibold text-primary">Safe & Verified</h3>
        </div>
        <p className="text-sm">Connect with verified neighbors in your locality building a safer community together.</p>
      </div>

      <div className="flex flex-col gap-4 w-full mt-auto mb-8">
        <button 
          className="btn btn-primary w-full"
          onClick={() => onNavigate('register')}
        >
          Join Your Community
        </button>
        <button 
          className="btn btn-outline w-full"
          onClick={() => onNavigate('login')}
        >
          Sign In
        </button>
      </div>

      <div className="flex justify-center gap-6 text-muted text-xs font-semibold mb-4">
        <span className="flex items-center gap-1"><Users size={14} /> 10k+ Neighbors</span>
        <span className="flex items-center gap-1"><MapPin size={14} /> 50+ Cities</span>
      </div>
    </div>
  );
};

export default LandingPage;
