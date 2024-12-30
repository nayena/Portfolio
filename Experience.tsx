import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    role: "Front-End Developer",
    company: "Branda, The App",
    period: "2024 - Present",
    description: "Led development of enterprise applications using Swift and Node.js",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    id: 2,
    role: "Consultant",
    company: "TAMID",
    period: "2024 - Present",
    description: "Developed and maintained multiple client projects",
    technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"],
  },
  {
    id: 3,
    role: "Director Of Public Relations",
    company: "Brandeis Student Union",
    period: "2024 - Present",
    description: "Created responsive web applications with modern UI/UX",
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
  },
  {
    id: 4,
    role: "Coding Mentor",
    company: "Coding For Good",
    period: "2024 - Present",
    description: "Created responsive web applications with modern UI/UX",
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-px bg-border" />
                )}
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
