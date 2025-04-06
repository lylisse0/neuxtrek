
import { cn } from '@/lib/utils';

interface RightPanelProps {
  pageLinks: string[];
  className?: string;
}

const RightPanel = ({ pageLinks, className }: RightPanelProps) => {
  return (
    <div className={cn("w-1/4 border-l border-neuxtrek-silver/10 p-6", className)}>
      <h3 className="text-neuxtrek-silver font-medium mb-4">On this page</h3>
      <ul className="space-y-2">
        {pageLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-neuxtrek-gold hover:text-neuxtrek-gold/80 transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightPanel;
