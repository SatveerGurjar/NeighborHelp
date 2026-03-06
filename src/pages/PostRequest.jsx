import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const PostRequest = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Home Repair',
    description: '',
    isEmergency: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful post
    console.log('Posting Request', formData);
    onNavigate('dashboard');
  };

  return (
    <div className="content-area bg-surface h-full pb-24">
      <div className="flex items-center gap-3 mb-6 sticky top-0 bg-surface py-4 z-10 border-b border-border mr-[-1rem] pr-4">
        <button 
          className="btn-ghost p-2"
          onClick={() => onNavigate('dashboard')}
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Ask for Help</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="input-group">
          <label className="input-label">What do you need help with?</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="e.g. Need help carrying groceries" 
            value={formData.title}
            onChange={e => setFormData({...formData, title: e.target.value})}
            required
            maxLength={60}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Category</label>
          <select 
            className="input-field"
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value})}
          >
            <option value="Home Repair">House / Repair</option>
            <option value="Tutoring">Tutoring / Advice</option>
            <option value="Borrowing">Borrow an Item</option>
            <option value="Errands">Run an Errand</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-label">Details</label>
          <textarea 
            className="input-field" 
            placeholder="Provide context for your neighbors..." 
            rows="4"
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
            required
          ></textarea>
        </div>

        <div className={`card border p-4 flex items-center gap-3 cursor-pointer ${formData.isEmergency ? 'border-danger bg-red-50' : 'border-border'}`} onClick={() => setFormData({...formData, isEmergency: !formData.isEmergency})}>
          <div className="flex-1">
            <h4 className="font-bold flex items-center gap-2 text-danger"><AlertTriangle size={18} /> Mark as Emergency</h4>
            <p className="text-xs text-muted mt-1">Urgent requests are highlighted red to get neighbors' attention faster.</p>
          </div>
          <input 
            type="checkbox" 
            checked={formData.isEmergency} 
            onChange={e => setFormData({...formData, isEmergency: e.target.checked})} 
            style={{accentColor: 'var(--danger)', width: '20px', height: '20px'}}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4 py-3">
          Post Request
        </button>
      </form>
    </div>
  );
};

export default PostRequest;
