
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image,
  imageAlt,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-skyblue-light/40 to-white/60 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-slide-up md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              {subtitle}
            </p>
            {buttonText && buttonLink && (
              <Link to={buttonLink}>
                <Button 
                  className="bg-skyblue hover:bg-skyblue-dark text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1" 
                  size="lg"
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
          {image && (
            <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-down">
              <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={image} 
                  alt={imageAlt || "Hero image"} 
                  className="w-full h-auto object-cover rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
