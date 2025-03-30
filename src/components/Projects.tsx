
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronRight } from 'lucide-react';

const Projects = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Health Cloud – REMS Platform",
      image: "/placeholder.svg",
      role: "Salesforce Developer",
      shortDescription: "Built a Risk Evaluation and Mitigation Strategy platform for healthcare medication safety.",
      fullDescription: "Built a Risk Evaluation and Mitigation Strategy (REMS) platform to ensure safe medication use. Designed Apex classes, Lightning Components, and SOQL queries to manage custom objects, flows, and triggers. Achieved 75%+ unit test coverage.",
      technologies: ["Apex", "Lightning Components", "SOQL", "Flows", "Health Cloud"],
      achievements: [
        "Implemented complex business logic using Apex triggers and classes",
        "Created intuitive user interfaces with Lightning Web Components",
        "Designed custom objects and fields for specific healthcare data requirements",
        "Developed automation using Flows and Process Builder",
        "Integrated with external systems for comprehensive patient data"
      ]
    },
    {
      title: "Salesforce CPQ Implementation",
      image: "/placeholder.svg",
      role: "Salesforce Developer",
      shortDescription: "Custom implementation of Salesforce CPQ for a manufacturing client.",
      fullDescription: "Implemented and customized Salesforce CPQ for a manufacturing client to streamline their quoting process. Developed custom product configurations, pricing rules, and quote templates to meet specific business requirements.",
      technologies: ["Salesforce CPQ", "Apex", "Lightning Components", "JavaScript", "Visualforce"],
      achievements: [
        "Reduced quote generation time by 65%",
        "Implemented complex pricing rules and discount structures",
        "Created custom quote templates with dynamic sections",
        "Built approval workflows for special pricing scenarios",
        "Trained sales team on using the new quoting system"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12">Key Project Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-navy/10 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-32 w-32 object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-navy">{project.title}</CardTitle>
                <CardDescription>Role: {project.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-salesforce/10 text-salesforce px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="text-salesforce border-salesforce hover:bg-salesforce hover:text-white"
                  onClick={() => setOpenProject(index)}
                >
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Dialog open={openProject !== null} onOpenChange={() => setOpenProject(null)}>
          {openProject !== null && (
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-navy text-xl">
                  {projects[openProject].title}
                </DialogTitle>
                <DialogDescription>
                  Role: {projects[openProject].role}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <h4 className="font-medium text-navy mb-2">Description:</h4>
                <p className="text-gray-700 mb-4">
                  {projects[openProject].fullDescription}
                </p>
                
                <h4 className="font-medium text-navy mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[openProject].technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-salesforce/10 text-salesforce px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="font-medium text-navy mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {projects[openProject].achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
