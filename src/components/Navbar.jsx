import React from 'react';
import { Home, PlusCircle, Bell, User, LayoutDashboard } from 'lucide-react';

const Navbar = ({ currentRoute, onNavigate }) => {
  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-item ${currentRoute === 'dashboard' ? 'active' : ''}`}
        onClick={() => onNavigate('dashboard')}
      >
        <Home size={24} />
        <span>Home</span>
      </button>
      
      <button 
        className={`nav-item ${currentRoute === 'post-request' ? 'active' : ''}`}
        onClick={() => onNavigate('post-request')}
      >
        <PlusCircle size={24} />
        <span>Post</span>
      </button>

      <button 
        className={`nav-item ${currentRoute === 'notifications' ? 'active' : ''}`}
        onClick={() => onNavigate('notifications')}
      >
        <div style={{ position: 'relative' }}>
          <Bell size={24} />
          <span style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 10,
            height: 10,
            backgroundColor: 'var(--danger)',
            borderRadius: '50%',
            border: '2px solid var(--surface)'
          }}></span>
        </div>
        <span>Alerts</span>
      </button>

      <button 
        className={`nav-item ${currentRoute === 'profile' ? 'active' : ''}`}
        onClick={() => onNavigate('profile')}
      >
        <User size={24} />
        <span>Profile</span>
      </button>
      
      {/* Example admin link */}
      <button 
        className={`nav-item ${currentRoute === 'admin' ? 'active' : ''}`}
        onClick={() => onNavigate('admin')}
      >
        <LayoutDashboard size={24} />
        <span>Admin</span>
      </button>
    </nav>
  );
};

export default Navbar;
