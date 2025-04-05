
interface RightPanelProps {
  pageLinks: string[];
}

const RightPanel = ({ pageLinks }: RightPanelProps) => {
  return (
    <div className="w-1/4 border-l border-neuxtrek-silver/10 p-6">
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
