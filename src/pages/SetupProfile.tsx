
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { toast } from 'sonner';

const questions = [
  {
    id: 'company-size',
    question: 'What is your company size?',
    options: ['1-10', '11-50', '51-200', '201-500', '500+']
  },
  {
    id: 'industry',
    question: 'Which industry are you in?',
    options: ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Other']
  },
  {
    id: 'use-case',
    question: 'What\'s your primary use case for AI automation?',
    options: ['Customer Service', 'Data Analysis', 'Process Automation', 'Content Creation', 'Other']
  },
  {
    id: 'experience',
    question: 'How would you rate your experience with AI tools?',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  },
];

const SetupProfile = () => {
  const [username, setUsername] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/login');
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (!username.trim()) {
        toast.error('Please enter a username');
        return;
      }
      setCurrentStep(1);
    } else {
      const currentQuestion = questions[currentStep - 1];
      if (!answers[currentQuestion.id]) {
        toast.error('Please select an option');
        return;
      }
      
      if (currentStep < questions.length) {
        setCurrentStep(currentStep + 1);
      } else {
        handleComplete();
      }
    }
  };

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers({
      ...answers,
      [questionId]: option
    });
  };

  const handleComplete = async () => {
    setIsSubmitting(true);
    
    try {
      // Here you would send the user profile data to your backend
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage for demonstration purposes
      localStorage.setItem('user_profile', JSON.stringify({
        username,
        ...answers
      }));
      
      toast.success('Profile setup complete!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving profile:', error);
      toast.error('Failed to complete profile setup');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-neuxtrek-silver">Create your username</h2>
          <p className="text-neuxtrek-silver/60">This is how you'll appear to others in the platform.</p>
          
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-neuxtrek-silver/30 rounded-md focus:outline-none focus:ring-1 focus:ring-neuxtrek-gold focus:border-neuxtrek-gold text-neuxtrek-silver"
              placeholder="Enter your username"
            />
          </div>
        </div>
      );
    }

    const questionIndex = currentStep - 1;
    const question = questions[questionIndex];
    
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-neuxtrek-silver">{question.question}</h2>
        
        <div className="grid gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(question.id, option)}
              className={`flex justify-between items-center px-4 py-3 rounded-md border transition-all ${
                answers[question.id] === option 
                  ? 'border-neuxtrek-gold bg-neuxtrek-gold/10 text-neuxtrek-gold' 
                  : 'border-neuxtrek-silver/30 hover:border-neuxtrek-silver/50 text-neuxtrek-silver'
              }`}
            >
              <span>{option}</span>
              {answers[question.id] === option && <Check size={18} />}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-[#111]">
      <div className="p-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-neuxtrek-silver hover:text-neuxtrek-gold hover:bg-transparent p-0"
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2" size={16} />
          Back
        </Button>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-black/50 backdrop-blur-lg p-8 rounded-xl border border-neuxtrek-silver/10 shadow-2xl">
          <div className="flex justify-center mb-8">
            <Logo isScrolled={true} />
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[...Array(questions.length + 1)].map((_, index) => (
                <div 
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index <= currentStep 
                      ? 'bg-neuxtrek-gold' 
                      : 'bg-neuxtrek-silver/30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {renderStepContent()}
          
          <div className="mt-8 flex justify-between">
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="border-neuxtrek-silver/30 text-neuxtrek-silver hover:bg-black/30 hover:text-neuxtrek-gold"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={isSubmitting}
              className="bg-neuxtrek-gold hover:bg-neuxtrek-gold/90 text-black"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></span>
                  Processing...
                </span>
              ) : (
                <>
                  {currentStep === questions.length ? 'Complete Setup' : 'Continue'}
                  <ArrowRight className="ml-2" size={16} />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProfile;
