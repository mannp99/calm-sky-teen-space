
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function SocialIcons() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'Youtube', icon: Youtube, url: 'https://youtube.com' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-skyblue transition-colors duration-200"
          aria-label={`Follow us on ${social.name}`}
        >
          <social.icon className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
}
