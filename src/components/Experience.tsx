
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const experiences = [
    {
      role: "Software Engineer",
      company: "VamriTech Private Limited",
      location: "Hyderabad",
      period: "Dec 2021 – Present",
      responsibilities: [
        "Developed and maintained Salesforce applications for healthcare and pharmaceutical clients",
        "Implemented custom Lightning Web Components and Aura components to enhance user experience",
        "Created Apex classes, triggers, and batch jobs for complex business requirements",
        "Configured and customized Salesforce objects, fields, page layouts, and workflows",
        "Designed and built reports and dashboards for data analysis and decision-making",
        "Collaborated with clients to understand requirements and provide solutions",
        "Performed regular system maintenance and troubleshooting"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8 border-l-2 border-gray-200">
              <div className="timeline-dot top-0"></div>
              
              <Collapsible 
                open={openItem === index} 
                onOpenChange={() => setOpenItem(openItem === index ? null : index)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-semibold text-navy">{exp.role}</h3>
                    <span className="text-salesforce font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {exp.company}, {exp.location}
                  </p>
                  
                  <CollapsibleTrigger className="flex items-center text-sm font-medium text-salesforce hover:text-navy transition-colors">
                    {openItem === index ? (
                      <>
                        <span>View Less</span>
                        <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>View More</span>
                        <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-200">
                    <h4 className="font-medium text-navy mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
