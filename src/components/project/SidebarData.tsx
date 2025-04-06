
import { 
  Book, 
  Users, 
  Signal, 
  Megaphone,
  Lightbulb, 
  Play, 
  Info, 
  MessageSquare,
  List,
  Rocket,
  FileCode,
  Pencil,
  TestTube,
  Briefcase,
  Globe,
  Folder,
  File,
  Laptop,
  GraduationCap,
  Grid2X2,
  Bug,
  CircleSlash,
  Github,
  Database,
  CreditCard,
  Mail,
  UserPlus,
  Wand2,
  Ruler,
  Image,
  Video,
  Chrome,
  Text,
  Package,
  Smartphone,
  Search,
  Shield
} from 'lucide-react';
import { ReactNode } from 'react';

interface MenuItem {
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  submenu?: {
    label: string;
    icon?: ReactNode;
    isActive?: boolean;
  }[];
}

export const sidebarMenuItems: MenuItem[] = [
  {
    label: "Documentation",
    icon: <Book size={16} />,
    submenu: []
  },
  {
    label: "Community",
    icon: <Users size={16} />,
    submenu: []
  },
  {
    label: "Status",
    icon: <Signal size={16} />,
    submenu: []
  },
  {
    label: "Product Announcement",
    icon: <Megaphone size={16} />,
    submenu: []
  },
  {
    label: "Request Feature",
    icon: <Lightbulb size={16} />,
    submenu: []
  },
  {
    label: "YouTube",
    icon: <Play size={16} />,
    submenu: []
  },
  {
    label: "Introduction",
    icon: <Info size={16} />,
    isActive: true,
    submenu: [
      { label: "Welcome", isActive: true },
      { label: "Messaging Limits", icon: <MessageSquare size={14} /> }
    ]
  },
  {
    label: "FAQ",
    icon: <Info size={16} />,
    submenu: []
  },
  {
    label: "Changelog",
    icon: <List size={16} />,
    submenu: []
  },
  {
    label: "User Guides",
    icon: <Book size={16} />,
    submenu: [
      { label: "Quickstart", icon: <Rocket size={14} /> },
      { label: "Figma to NeuXTrek", icon: <FileCode size={14} /> },
      { label: "Visual Edit", icon: <Pencil size={14} /> },
      { label: "Knowledge Files", icon: <File size={14} /> },
      { label: "Dev Mode", icon: <FileCode size={14} /> },
      { label: "Labs", icon: <TestTube size={14} /> },
      { label: "Troubleshooting", icon: <Briefcase size={14} /> },
      { label: "Deploy", icon: <Rocket size={14} /> },
      { label: "Custom Domain", icon: <Globe size={14} /> },
      { label: "Launched", icon: <Rocket size={14} /> }
    ]
  },
  {
    label: "Use Cases",
    icon: <Folder size={16} />,
    submenu: [
      { label: "Landing Page", icon: <File size={14} /> },
      { label: "Prototype", icon: <File size={14} /> },
      { label: "SaaS", icon: <Laptop size={14} /> }
    ]
  },
  {
    label: "Prompt Engineering",
    icon: <GraduationCap size={16} />,
    submenu: [
      { label: "Prompting 1.1", icon: <GraduationCap size={14} /> },
      { label: "Prompt Library", icon: <Grid2X2 size={14} /> },
      { label: "Debugging Prompts", icon: <Bug size={14} /> },
      { label: "Prompts & Integrations", icon: <Signal size={14} /> }
    ]
  },
  {
    label: "Integrations",
    icon: <CircleSlash size={16} />,
    submenu: [
      { label: "GitHub Integration", icon: <Github size={14} /> },
      { label: "Supabase Integration", icon: <Database size={14} /> },
      { label: "Stripe & Payments", icon: <CreditCard size={14} /> },
      { label: "Integration with Resend", icon: <Mail size={14} /> },
      { label: "Integration with Clerk", icon: <UserPlus size={14} /> },
      { label: "Integration with Make", icon: <Wand2 size={14} /> },
      { label: "Integration with Replicate", icon: <Play size={14} /> },
      { label: "Integrate with 21st.dev", icon: <Ruler size={14} /> }
    ]
  },
  {
    label: "Tips and Tricks",
    icon: <Lightbulb size={16} />,
    submenu: [
      { label: "Using Images in NeuXTrek", icon: <Image size={14} /> },
      { label: "Using Videos", icon: <Video size={14} /> },
      { label: "Chrome Add-on", icon: <Chrome size={14} /> },
      { label: "Using Custom Fonts", icon: <Text size={14} /> },
      { label: "Using npm Packages", icon: <Package size={14} /> },
      { label: "Mobile Support", icon: <Smartphone size={14} /> },
      { label: "SEO", icon: <Search size={14} /> }
    ]
  },
  {
    label: "Resources",
    icon: <Folder size={16} />,
    submenu: [
      { label: "Video Tutorial", icon: <Play size={14} /> },
      { label: "Inspiration Time", icon: <Lightbulb size={14} /> },
      { label: "Community", icon: <Users size={14} /> },
      { label: "Support Policy", icon: <Shield size={14} /> },
      { label: "Glossary", icon: <Book size={14} /> }
    ]
  }
];

export const pageLinks = [
  "Product Capabilities",
  "Quick Start",
  "What is NeuXTrek",
  "Stay Connected",
  "Support",
  "Learn More"
];
