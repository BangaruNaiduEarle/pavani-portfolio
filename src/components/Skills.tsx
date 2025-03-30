
import React from 'react';

const skillCategories = [
  {
    title: "Core Salesforce",
    skills: [
      "Salesforce.com",
      "Experience Cloud",
      "Force.com",
      "Data Loader",
      "Salesforce CPQ",
      "Health Cloud"
    ]
  },
  {
    title: "Development",
    skills: [
      "Apex",
      "Lightning Web Components",
      "Aura Components",
      "HTML",
      "XML",
      "JavaScript",
      "SOQL"
    ]
  },
  {
    title: "Administration",
    skills: [
      "Validation Rules",
      "Workflows",
      "Approval Processes",
      "Reports & Dashboards",
      "Data Management",
      "User Administration"
    ]
  },
  {
    title: "Additional Skills",
    skills: [
      "Integration",
      "API Management",
      "Deployment Strategies",
      "Change Management",
      "Documentation",
      "Client Communication"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="text-xl font-semibold text-navy mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <div className="flex items-center justify-between">
                      <span>{skill}</span>
                      <div className="w-3 h-3 rounded-full bg-salesforce"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-navy mb-6 text-center">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { skill: "Apex & Triggers", percentage: 90 },
              { skill: "Lightning Components", percentage: 85 },
              { skill: "SOQL & SOSL", percentage: 80 },
              { skill: "Salesforce Administration", percentage: 95 },
              { skill: "Integration", percentage: 75 },
              { skill: "JavaScript", percentage: 70 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-salesforce rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
