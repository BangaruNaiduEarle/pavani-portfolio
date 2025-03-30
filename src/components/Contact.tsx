
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-3 inline-block">
          Get In Touch
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-salesforce"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-salesforce" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Phone</h4>
                  <a 
                    href="tel:8008328528" 
                    className="text-white hover:text-salesforce transition-colors"
                  >
                    8008328528
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-salesforce" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 mb-1">Email</h4>
                  <a 
                    href="mailto:pavanipasupuleti1997@gmail.com" 
                    className="text-white hover:text-salesforce transition-colors break-all"
                  >
                    pavanipasupuleti1997@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-gray-300 mb-6">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs Salesforce expertise or a position to fill,
                please get in touch.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Your Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Email Address
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Subject
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <Button className="bg-salesforce hover:bg-salesforce/80 text-white w-full">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
