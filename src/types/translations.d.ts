
import 'react-i18next';

// Import all namespaces (for the default language, only)
import en from '../locales/en/translation.json';
import { SetupProfileOptions } from './profileOptions';

declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    translation: typeof en;
  }

  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'translation';
    resources: {
      translation: typeof en;
    };
  }
}

// Define types for setup profile options
export interface SetupProfileOptions {
  companySize: string[];
  industry: string[];
  useCase: string[];
  experience: string[];
}

// Define additional translation types for specific sections
export interface CourseTranslation {
  title: string;
  description: string;
  duration: string;
}

export interface CoursesTranslations {
  promptEngineering: CourseTranslation;
  automation: CourseTranslation;
  integration: CourseTranslation;
  business: CourseTranslation;
  agents: CourseTranslation;
  ethics: CourseTranslation;
  course: string;
}

export interface CommunityTranslations {
  title: string;
  newComment: string;
  ago: string;
  posts: string;
  trending: string;
  discussions: string;
}
