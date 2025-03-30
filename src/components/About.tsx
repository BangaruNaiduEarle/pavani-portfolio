
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6">
              I'm <span className="font-semibold text-navy">Pavani Pasupuleti</span>, a passionate Salesforce Developer with over 3 years of experience in Salesforce configuration, implementation, and support. I specialize in building robust CRM solutions using Apex, LWC, Aura, and Triggers, delivering scalable applications tailored to business needs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My focus is on creating efficient, user-friendly Salesforce solutions that streamline business processes and enhance productivity. I'm experienced in working with Sales Cloud, Service Cloud, and Experience Cloud to develop comprehensive CRM ecosystems.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              With a strong foundation in Salesforce development best practices and a commitment to staying current with platform updates, I'm dedicated to delivering high-quality solutions that exceed client expectations.
            </p>
            
            <Button className="btn-primary" asChild>
              <a href="#" download>
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-navy mb-2">Profile</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-28">Full Name:</span> 
                    <span>Pavani Pasupuleti</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28">Position:</span> 
                    <span>Salesforce Developer</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28">Experience:</span> 
                    <span>3+ Years</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Apex</span>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">LWC</span>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Aura</span>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">SOQL</span>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Triggers</span>
                  <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Salesforce Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
