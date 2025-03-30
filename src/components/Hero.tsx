
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-navy to-navy/80 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <div className="bg-salesforce/10 border border-salesforce/30 rounded-lg p-8 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Pavani Pasupuleti
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-200">
                Salesforce Developer
              </h2>
              <p className="text-xl mb-8 leading-relaxed max-w-lg">
                Transforming business requirements into powerful Salesforce solutions with expertise in Apex, LWC, and custom configurations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary bg-navy" asChild>
                  <a href="#projects">Explore My Work</a>
                </Button>
                <Button variant="outline" className=" text-black  hover:bg-white/10 hover:bg-white" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-700 overflow-hidden border-4 border-white/20">
                {/* Placeholder for profile image */}
                <div className="h-full flex items-center justify-center bg-salesforce/20">
                  <span className="text-6xl font-bold text-white">PP</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-salesforce text-white py-2 px-4 rounded-full">
                Salesforce Expert
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-pulse-slow">
          <a href="#about" className="inline-block">
            <ChevronDown size={36} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
