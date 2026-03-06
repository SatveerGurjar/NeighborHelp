import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginRegister from './pages/LoginRegister';
import Dashboard from './pages/Dashboard';
import PostRequest from './pages/PostRequest';
import RequestDetails from './pages/RequestDetails';
import ChatInterface from './pages/ChatInterface';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState('landing');
  const [routeParams, setRouteParams] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const navigate = (route, params = {}) => {
    setCurrentRoute(route);
    setRouteParams(params);
  };

  const login = () => {
    setIsLogged(true);
    navigate('dashboard');
  };

  const logout = () => {
    setIsLogged(false);
    navigate('landing');
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'landing':
        return <LandingPage onNavigate={navigate} />;
      case 'login':
        return <LoginRegister mode="login" onLogin={login} onNavigate={navigate} />;
      case 'register':
        return <LoginRegister mode="register" onLogin={login} onNavigate={navigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} />;
      case 'post-request':
        return <PostRequest onNavigate={navigate} />;
      case 'request-details':
        return <RequestDetails requestId={routeParams.id} onNavigate={navigate} />;
      case 'chat':
        return <ChatInterface requestId={routeParams.id} onNavigate={navigate} />;
      case 'profile':
        return <Profile onNavigate={navigate} onLogout={logout} />;
      case 'notifications':
        return <Notifications onNavigate={navigate} />;
      case 'admin':
        return <AdminDashboard onNavigate={navigate} />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  const hideNavRoutes = ['landing', 'login', 'register', 'chat'];

  return (
    <div className="app-container">
      {renderPage()}
      
      {isLogged && !hideNavRoutes.includes(currentRoute) && (
        <Navbar currentRoute={currentRoute} onNavigate={navigate} />
      )}
    </div>
  );
}

export default App;
