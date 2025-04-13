import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, CheckCircle, Users, Coffee, Clock, BarChart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Career = () => {
  const jobs = [
    {
      title: "Senior Web Developer",
      department: "Engineering",
      location: "Remote / Onsite",
      type: "Full-time",
      description: "We're looking for an experienced web developer proficient in React.js, Node.js, and modern web technologies."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Join our design team to create intuitive and engaging user experiences for web and mobile applications."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Onsite",
      type: "Full-time",
      description: "Drive our digital marketing strategies and help grow our online presence across various channels."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Onsite",
      type: "Full-time",
      description: "Lead project teams to deliver high-quality solutions on time and within budget for our clients."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Contract",
      description: "Implement and maintain CI/CD pipelines and cloud infrastructure for our development team."
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-purple" />,
      title: "Collaborative Culture",
      description: "Work in a supportive environment where teamwork and innovation thrive."
    },
    {
      icon: <BarChart className="w-8 h-8 text-teal" />,
      title: "Career Growth",
      description: "Clear paths for advancement and continuous learning opportunities."
    },
    {
      icon: <Coffee className="w-8 h-8 text-purple" />,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous time off policies."
    },
    {
      icon: <Clock className="w-8 h-8 text-teal" />,
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance bonuses and equity options."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple/10 via-background to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Build your career with a company that values innovation, collaboration, and growth
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Work With Us</h2>
            <p className="text-muted-foreground">
              The benefits of becoming part of our team
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center hover:translate-y-[-5px] transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary/20">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Open Positions</h2>
            <p className="text-muted-foreground">
              Explore our current job opportunities and find your perfect role
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="overflow-hidden glass-card rounded-xl">
                <div className="p-6">
                  <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-muted-foreground">{job.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-purple/20 text-purple">
                        {job.location}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-teal/20 text-teal">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground">{job.description}</p>
                  <Button asChild variant="outline">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Hiring Process</h2>
              <p className="text-muted-foreground">
                What to expect when you apply for a position with us
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Application Review",
                  description: "We'll review your resume and application to assess your qualifications."
                },
                {
                  step: "02",
                  title: "Initial Interview",
                  description: "A conversation with our HR team to discuss your experience and expectations."
                },
                {
                  step: "03",
                  title: "Technical Assessment",
                  description: "Depending on the role, you may complete a skills assessment or technical challenge."
                },
                {
                  step: "04",
                  title: "Team Interview",
                  description: "Meet with potential team members and managers to ensure a good cultural fit."
                },
                {
                  step: "05",
                  title: "Offer & Onboarding",
                  description: "Successful candidates will receive an offer and comprehensive onboarding."
                }
              ].map((step, index) => (
                <div key={index} className="flex p-6 glass-card rounded-xl">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 rounded-full bg-gradient-to-r from-purple to-teal">
                    <span className="text-sm font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Common questions about working with us
              </p>
            </div>

            <Accordion type="single" collapsible className="p-6 glass-card rounded-xl">
              {[
                {
                  question: "What is your remote work policy?",
                  answer: "We offer flexible remote work options depending on the role. Some positions are fully remote, while others may require occasional onsite presence."
                },
                {
                  question: "What benefits do you offer?",
                  answer: "We provide comprehensive benefits including health insurance, retirement plans, paid time off, professional development stipends, and more."
                },
                {
                  question: "How long is the hiring process?",
                  answer: "Typically, our hiring process takes 2-3 weeks from application to offer, though this can vary depending on the position and number of candidates."
                },
                {
                  question: "Do you offer internship opportunities?",
                  answer: "Yes, we offer internships in various departments throughout the year. These are posted alongside our regular job openings."
                },
                {
                  question: "What is your company culture like?",
                  answer: "We foster a collaborative, innovative environment where continuous learning is encouraged. We value work-life balance and celebrate diversity of thought and background."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="p-8 glass-card rounded-xl md:p-12 bg-gradient-to-r from-purple/10 to-teal/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to Take the Next Step?</h2>
              <p className="mb-8 text-muted-foreground">
                Even if you don't see a perfect fit in our current openings, we're always looking for talented individuals to join our team.
              </p>
              <Button asChild size="lg" className="transition-opacity bg-gradient-to-r from-purple to-teal hover:opacity-90">
                <Link to="/contact">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Submit Your Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;