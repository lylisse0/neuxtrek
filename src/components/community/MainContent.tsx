
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Mock data for posts
const communityPosts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    profilePic: '/placeholder.svg',
    status: '8d - Wins',
    title: 'Finally completed my AI automation workflow! 🎉',
    content: 'After weeks of testing, I finally got my email automation workflow working with 95% accuracy. The key was using better prompt engineering techniques from the course module 3! 🚀',
    likes: 317,
    comments: 234,
    lastComment: '5m'
  },
  {
    id: 2,
    author: 'Michael Chen',
    profilePic: '/placeholder.svg',
    status: '2d - Questions',
    title: 'Help needed with API integration 🤔',
    content: 'I\'m trying to connect my workflow to the OpenAI API but keep getting rate limit errors. Has anyone found a good way to handle this in production?',
    likes: 126,
    comments: 89,
    lastComment: '1h'
  },
  {
    id: 3,
    author: 'Alex Rodriguez',
    profilePic: '/placeholder.svg',
    status: '1d - Resources',
    title: 'Shared my AI prompt cheatsheet!',
    content: 'For everyone struggling with prompt engineering, I made a comprehensive cheatsheet based on course materials and my own research. Feel free to use it! 📄✨',
    likes: 425,
    comments: 103,
    lastComment: '15m'
  }
];

const MainContent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full lg:w-2/4">
      <h1 className="text-3xl font-bold mb-8 text-neuxtrek-gold">{t('community.title')}</h1>
      
      <div className="space-y-6 mt-0">
        {communityPosts.map(post => (
          <Card key={post.id} className="bg-[#333333] border-neuxtrek-silver/20 hover:border-neuxtrek-gold/30 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border-2 border-neuxtrek-gold overflow-hidden">
                  <img
                    src={post.profilePic}
                    alt={post.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neuxtrek-silver">{post.author}</h3>
                  <p className="text-xs text-neuxtrek-silver/50">{post.status}</p>
                </div>
              </div>
              <CardTitle className="text-xl mt-3 text-neuxtrek-silver">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-neuxtrek-silver/70">{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors">
                  <Heart size={16} />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-neuxtrek-silver hover:text-neuxtrek-gold transition-colors">
                  <MessageSquare size={16} />
                  <span className="text-sm">{post.comments}</span>
                </button>
              </div>
              <a href="#" className="text-sm text-neuxtrek-gold hover:text-neuxtrek-gold/80 transition-colors">
                {t('community.newComment')} {post.lastComment} {t('community.ago')}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
