import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Apple, ArrowLeft, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      setIsLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      
      toast.success('Password reset instructions sent to your email');
    } catch (error) {
      console.error('Error sending password reset:', error);
      toast.error('Failed to send password reset instructions');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsLoading(true);
      
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        
        if (data.user) {
          toast.success('Account created successfully!');
          navigate('/setup-profile');
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        if (data.user) {
          toast.success('Logged in successfully!');
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      console.error('Authentication error:', error);
      toast.error(error.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/setup-profile`,
        },
      });
      
      if (error) throw error;
    } catch (error) {
      console.error('Google sign in error:', error);
      toast.error('Failed to sign in with Google');
      setIsLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/setup-profile`,
        },
      });
      
      if (error) throw error;
    } catch (error) {
      console.error('Apple sign in error:', error);
      toast.error('Failed to sign in with Apple');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-[#111]">
      <div className="p-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-neuxtrek-silver hover:text-neuxtrek-gold hover:bg-transparent p-0"
          onClick={handleGoBack}
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Home
        </Button>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-neuxtrek-silver/10 shadow-2xl">
          <div className="flex justify-center mb-8">
            <Logo isScrolled={true} />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-6 text-neuxtrek-silver">
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </h1>
          
          <div className="space-y-4 mb-6">
            <Button 
              className="w-full bg-white text-black hover:bg-gray-100 flex items-center justify-center"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <Globe className="mr-2" size={18} />
              {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </Button>
            
            <Button 
              className="w-full bg-black text-white border border-gray-600 hover:bg-gray-900 flex items-center justify-center"
              onClick={handleAppleSignIn}
              disabled={isLoading}
            >
              <Apple className="mr-2" size={18} />
              {isSignUp ? 'Sign up with Apple' : 'Sign in with Apple'}
            </Button>
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neuxtrek-silver/10"></span>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-3 text-sm text-neuxtrek-silver/60">OR</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neuxtrek-silver mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-neuxtrek-silver/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neuxtrek-silver mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-neuxtrek-silver/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver"
                placeholder="Enter your password"
                required
              />
            </div>
            
            {!isSignUp && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-neuxtrek-gold hover:underline"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black" 
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></span>
                  Processing...
                </span>
              ) : isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
          
          <p className="mt-6 text-center text-sm text-neuxtrek-silver/70">
            {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
            <button 
              type="button"
              className="ml-1 text-neuxtrek-gold hover:underline"
              onClick={handleToggleMode}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
