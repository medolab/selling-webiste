import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import type { Message, User } from '../types';

interface MessageThreadProps {
  messages: Message[];
  users: Record<string, User>;
  onReply: (parentMessage: Message) => void;
  onLike: (messageId: string) => void;
}

export default function MessageThread({ messages, users, onReply, onLike }: MessageThreadProps) {
  if (!Array.isArray(messages)) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">No messages yet</p>
      </div>
    );
  }

  const renderMessage = (message: Message, depth = 0) => {
    if (!message) return null;

    const user = users[message.userId] || {
      name: 'Unknown User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'user'
    };

    return (
      <div
        key={message.id}
        className={`flex space-x-4 ${depth > 0 ? 'ml-12 mt-4' : 'mt-6'}`}
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop';
          }}
        />
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{user.name}</span>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(message.timestamp))} ago
                </span>
              </div>
              {user.role !== 'user' && (
                <span className={`px-2 py-1 rounded text-xs ${
                  user.role === 'admin' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {user.role}
                </span>
              )}
            </div>
            <p className="text-gray-800">{message.content}</p>
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={() => onLike(message.id)}
                className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">{message.likes || 0}</span>
              </button>
              <button
                onClick={() => onReply(message)}
                className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Reply</span>
              </button>
            </div>
          </div>
          {Array.isArray(message.replies) && message.replies.map((reply) => renderMessage(reply, depth + 1))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {messages.map((message) => renderMessage(message))}
    </div>
  );
}