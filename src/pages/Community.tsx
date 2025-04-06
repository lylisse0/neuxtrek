
import CommunityLayout from "@/components/layout/CommunityLayout";
import CommunityPost from "@/components/community/CommunityPost";

const Community = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: {
        name: "Julie Smith",
        image: "https://i.pravatar.cc/150?img=5",
        timeAgo: "8d ago",
        badge: "Admin",
      },
      content: {
        title: "Welcome to our AI Automation Community! 🎉",
        text: "Hello everyone! This is the place to share your wins, ask questions, and connect with fellow AI automation enthusiasts. We're excited to have you all here!",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
      },
      engagement: {
        likes: 317,
        comments: 234,
        lastComment: "New comment 5m ago",
      },
    },
    {
      id: 2,
      author: {
        name: "Marcus Johnson",
        image: "https://i.pravatar.cc/150?img=12",
        timeAgo: "3d ago",
        badge: "Mentor",
      },
      content: {
        title: "I just automated my entire workflow using the techniques from Module 3! 🚀",
        text: "After implementing what I learned in the 'Advanced Automation Workflows' module, I've reduced my daily tasks by 75%! Has anyone else tried the framework we learned last week?",
      },
      engagement: {
        likes: 142,
        comments: 53,
        lastComment: "New comment 2h ago",
      },
    },
    {
      id: 3,
      author: {
        name: "Sarah Williams",
        image: "https://i.pravatar.cc/150?img=23",
        timeAgo: "Yesterday",
      },
      content: {
        title: "Question about the Python script from yesterday's workshop",
        text: "I'm trying to implement the script we covered in yesterday's workshop but getting an error. Has anyone else encountered this issue? I think it might be related to the API authentication step...",
      },
      engagement: {
        likes: 28,
        comments: 31,
        lastComment: "New comment 1d ago",
      },
    },
  ];

  return (
    <CommunityLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Community Feed</h1>
        
        {posts.map((post) => (
          <CommunityPost key={post.id} {...post} />
        ))}
      </div>
    </CommunityLayout>
  );
};

export default Community;
