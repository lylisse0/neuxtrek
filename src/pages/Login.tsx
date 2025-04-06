
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Globe, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const signInButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  // Check if user has an existing account (based on localStorage for this example)
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (isSignUp && !hasVisited && !showSurvey) {
      setShowSurvey(true);
    }
  }, [isSignUp, showSurvey]);

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    setPassword('');
    setConfirmPassword('');
    setPasswordMatch(true);
    setFormValid(true);
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

  const validateForm = () => {
    if (!email || !password || (isSignUp && !confirmPassword)) {
      // Move the button if form is invalid
      if (signInButtonRef.current) {
        const randomDirection = Math.floor(Math.random() * 4);
        const directions = [
          { x: 100, y: 0 },   // right
          { x: -100, y: 0 },  // left
          { x: 0, y: -50 },   // up
          { x: 0, y: 50 },    // down
        ];
        const { x, y } = directions[randomDirection];
        
        signInButtonRef.current.style.transform = `translate(${x}px, ${y}px)`;
        
        // Reset position after a delay
        setTimeout(() => {
          if (signInButtonRef.current) {
            signInButtonRef.current.style.transform = 'translate(0, 0)';
          }
        }, 2000);
      }
      
      toast.error('Please fill in all fields!');
      setFormValid(false);
      return false;
    }
    
    if (isSignUp && password !== confirmPassword) {
      setPasswordMatch(false);
      toast.error('Passwords do not match');
      return false;
    }
    
    setFormValid(true);
    setPasswordMatch(true);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
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
          localStorage.setItem('hasVisitedBefore', 'true'); // Mark user has visited
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
          localStorage.setItem('hasVisitedBefore', 'true'); // Mark user has visited
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
      localStorage.setItem('hasVisitedBefore', 'true'); // Mark user has visited
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
      localStorage.setItem('hasVisitedBefore', 'true'); // Mark user has visited
    } catch (error) {
      console.error('Apple sign in error:', error);
      toast.error('Failed to sign in with Apple');
      setIsLoading(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (isSignUp && confirmPassword) {
      setPasswordMatch(e.target.value === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  const completeSurvey = () => {
    setShowSurvey(false);
  };

  // Simple survey component
  if (showSurvey) {
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
              Tell us about yourself
            </h1>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neuxtrek-silver mb-1">
                  What's your experience level with AI automation?
                </label>
                <select className="w-full px-4 py-2 bg-black/50 border border-neuxtrek-silver/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver">
                  <option value="">Select an option</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neuxtrek-silver mb-1">
                  What are you looking to achieve with AI automation?
                </label>
                <textarea 
                  className="w-full px-4 py-2 bg-black/50 border border-neuxtrek-silver/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver"
                  rows={3}
                ></textarea>
              </div>
              
              <Button 
                type="button" 
                className="w-full bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black"
                onClick={completeSurvey}
              >
                Continue to Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

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
              className="w-full bg-white text-black hover:bg-gray-100 flex items-center justify-center border hover:border-neuxtrek-gold"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <Globe className="mr-2" size={18} />
              {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </Button>
            
            <Button 
              className="w-full bg-black text-white border border-gray-600 hover:bg-gray-900 hover:border-neuxtrek-gold flex items-center justify-center"
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
                className={`w-full px-4 py-2 bg-black/50 border ${!formValid && !email ? 'border-red-500' : 'border-neuxtrek-silver/30'} rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver`}
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
                onChange={handlePasswordChange}
                className={`w-full px-4 py-2 bg-black/50 border ${!formValid && !password ? 'border-red-500' : 'border-neuxtrek-silver/30'} rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver`}
                placeholder="Enter your password"
                required
              />
            </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-neuxtrek-silver mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`w-full px-4 py-2 bg-black/50 border ${!passwordMatch ? 'border-red-500' : 'border-neuxtrek-silver/30'} rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver`}
                  placeholder="Confirm your password"
                  required
                />
                {!passwordMatch && (
                  <p className="text-neuxtrek-gold text-sm mt-1">Passwords do not match</p>
                )}
              </div>
            )}
            
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
              ref={signInButtonRef}
              type="submit" 
              className="w-full bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black transition-transform duration-300" 
              disabled={isLoading}
              style={{ transform: 'translate(0, 0)' }}
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
