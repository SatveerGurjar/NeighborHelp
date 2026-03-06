import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Lock, MapPin } from 'lucide-react';

const LoginRegister = ({ mode, onLogin, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', city: '', area: '', locality: ''
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="content-area animate-fade-in flex flex-col pt-6 px-6">
      <button 
        className="btn-ghost flex items-center justify-start gap-2 mb-8 p-0"
        onClick={() => onNavigate('landing')}
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h2 className="text-2xl font-bold mb-2">
        {mode === 'login' ? 'Welcome Back!' : 'Join the Community'}
      </h2>
      <p className="text-muted mb-8">
        {mode === 'login' 
          ? 'Sign in to see what\'s happening nearby.' 
          : 'Setup your profile to connect with neighbors.'}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        {mode === 'register' && currentStep === 1 && (
          <div className="animate-fade-in flex-col gap-4">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div className="relative flex items-center">
                <User className="absolute left-3 text-muted" size={18} />
                <input type="text" className="input-field w-full pl-10" placeholder="John Doe" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 text-muted" size={18} />
                <input type="email" className="input-field w-full pl-10" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 text-muted" size={18} />
                <input type="password" className="input-field w-full pl-10" placeholder="••••••••" required />
              </div>
            </div>
            <button type="button" className="btn btn-primary w-full mt-4" onClick={() => setCurrentStep(2)}>
              Continue
            </button>
          </div>
        )}

        {mode === 'register' && currentStep === 2 && (
          <div className="animate-fade-in flex-col gap-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><MapPin size={20} className="text-primary"/> Select Your Locality</h3>
            <div className="input-group">
              <label className="input-label">City</label>
              <select className="input-field w-full" required defaultValue="">
                <option value="" disabled>Select City</option>
                <option value="SF">San Francisco</option>
                <option value="NY">New York</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Area / Block</label>
              <select className="input-field w-full" required defaultValue="">
                <option value="" disabled>Select Area</option>
                <option value="Mission">Mission District</option>
                <option value="SOMA">SOMA</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Locality / Street</label>
              <input type="text" className="input-field w-full" placeholder="e.g. Valencia St" required />
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-4">
              Create Account
            </button>
            <button type="button" className="btn btn-ghost w-full" onClick={() => setCurrentStep(1)}>
              Back
            </button>
          </div>
        )}

        {mode === 'login' && (
          <div className="animate-fade-in flex-col gap-4">
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 text-muted" size={18} />
                <input type="email" className="input-field w-full pl-10" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 text-muted" size={18} />
                <input type="password" className="input-field w-full pl-10" placeholder="••••••••" required />
              </div>
            </div>
            
            <div className="flex justify-end mb-6">
              <a href="#" className="text-primary text-sm font-semibold">Forgot Password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
          </div>
        )}

      </form>

      <div className="mt-8 text-center text-sm mb-4">
        {mode === 'login' ? (
          <p>Don't have an account? <span className="text-primary font-bold cursor-pointer" onClick={() => onNavigate('register')}>Sign up</span></p>
        ) : (
          <p>Already have an account? <span className="text-primary font-bold cursor-pointer" onClick={() => onNavigate('login')}>Sign in</span></p>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
