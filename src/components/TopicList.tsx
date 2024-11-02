import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Eye, Pin } from 'lucide-react';
import type { Topic } from '../types';

interface TopicListProps {
  topics: Topic[];
  onTopicSelect: (topic: Topic) => void;
}

export default function TopicList({ topics, onTopicSelect }: TopicListProps) {
  if (!Array.isArray(topics)) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">No topics available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
          onClick={() => onTopicSelect(topic)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {topic.isSticky && (
                <Pin className="w-4 h-4 text-blue-500" />
              )}
              <img
                src={topic.author?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'}
                alt={topic.author?.name || 'User'}
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop';
                }}
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{topic.title}</h3>
                <p className="text-sm text-gray-500">
                  Posted by {topic.author?.name || 'Unknown'} • {formatDistanceToNow(new Date(topic.createdAt))} ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">{topic.messages?.length || 0}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{topic.views || 0}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}