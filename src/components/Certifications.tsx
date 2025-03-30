
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const certifications = [
  {
    title: "Salesforce Administrator",
    image: "/placeholder.svg",
    issueDate: "2021",
    description: "Demonstrates expertise in Salesforce administration, including user management, security controls, and maintaining data quality."
  },
  {
    title: "Salesforce Platform Developer-1",
    image: "/placeholder.svg",
    issueDate: "2022",
    description: "Validates ability to develop custom applications on the Salesforce platform using Apex and Visualforce, including data modeling and business logic development."
  },
  {
    title: "Salesforce CPQ Specialist",
    image: "/placeholder.svg",
    issueDate: "2022",
    description: "Certifies proficiency in implementing and maintaining Salesforce CPQ (Configure, Price, Quote), including product configuration, pricing rules, and quote generation."
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12">My Certifications</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full max-w-xs hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedCert(index)}
            >
              <div className="bg-navy/5 p-6 flex justify-center">
                <div className="w-32 h-32 bg-navy/10 rounded-full flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  Earned in {cert.issueDate}
                </p>
                <button 
                  className="mt-4 text-sm text-salesforce hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
          {selectedCert !== null && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-navy text-xl">
                  {certifications[selectedCert].title}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center py-4">
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={certifications[selectedCert].image}
                    alt={certifications[selectedCert].title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <DialogDescription>
                  <p className="mb-2">
                    <span className="font-medium">Issued:</span> {certifications[selectedCert].issueDate}
                  </p>
                  <p className="text-gray-700">
                    {certifications[selectedCert].description}
                  </p>
                </DialogDescription>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
