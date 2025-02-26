
import { SocialIcons } from './SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-skyblue-light/50 py-8">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <SocialIcons />
          </div>
          
          <div className="text-sm text-gray-600">
            <p>© {currentYear} Confidence Connect. All rights reserved.</p>
            <p className="mt-1">A resource for teens dealing with social anxiety.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
