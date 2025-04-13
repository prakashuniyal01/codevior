import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-8 h-8 text-purple" />,
      title: "Visit Us",
      details: ["123 Business Street", "City, State 12345", "Country"]
    },
    {
      icon: <Phone className="w-8 h-8 text-teal" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="w-8 h-8 text-purple" />,
      title: "Email Us",
      details: ["contact@company.com", "support@company.com"]
    }
  ];

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactDetails.map((contact, index) => (
            <div key={index} className="p-6 text-center glass-card rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary/20">
                {contact.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{contact.title}</h3>
              {contact.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
