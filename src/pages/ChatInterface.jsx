import React, { useState } from 'react';
import { ArrowLeft, Send, Phone, MoreVertical } from 'lucide-react';
import { dummyChats, currentUser, dummyUsers, dummyRequests } from '../data';

const ChatInterface = ({ requestId, onNavigate }) => {
  const request = dummyRequests.find(r => r.id === requestId) || dummyRequests[1];
  const reqUser = dummyUsers.find(u => u.id === request.requesterId) || dummyUsers[0];
  const chatHistory = dummyChats[requestId] || [];
  
  const [messages, setMessages] = useState(chatHistory);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, {
      id: `m${Date.now()}`,
      senderId: currentUser.id,
      text: input,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="app-header bg-surface px-4 py-3 pb-4">
        <button className="btn-ghost p-1" onClick={() => onNavigate('request-details', { id: requestId })}>
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 ml-3">
          <h2 className="font-bold">{reqUser.name}</h2>
          <p className="text-xs text-muted truncate">{request.title}</p>
        </div>
        <div className="flex gap-3 text-muted">
          <Phone size={20} className="cursor-pointer" />
          <MoreVertical size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 bg-background mb-16">
        <div className="text-xs text-center text-muted my-2 mb-4 bg-surface py-1 rounded-full w-24 mx-auto">Today</div>
        {messages.map(msg => {
          const isMe = msg.senderId === currentUser.id;
          return (
            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`chat-message ${isMe ? 'chat-sent' : 'chat-received'}`}>
                <p className="text-sm">{msg.text}</p>
                <span className="text-[10px] block text-right mt-1 opacity-70">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="bg-surface p-3 pb-8 border-t flex items-center gap-2 fixed bottom-0 w-full max-w-[480px]">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..." 
          className="flex-1 input-field rounded-full py-2 bg-background border-none"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(e)}
        />
        <button 
          className="btn btn-primary h-10 w-10 p-0 rounded-full flex justify-center items-center"
          onClick={sendMessage}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
