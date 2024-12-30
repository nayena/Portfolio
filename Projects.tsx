import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "SU Treasury Advisor",
    description: "A treasury chat bot powered with Artificial Intelligence to facilitate Student Union Transactions between SU Treasury and Club Treasurers. Coming soon.",
    image: "https://images.unsplash.com/photo-1730382625230-3756013c515c",
    technologies: ["HTML", "ChatGPT", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Cash Course",
    description: `Won Most Readily Employable and [MLH] Best DEI Hack sponsored by Fidelity in WHACK. 
      Cash Course is an interactive educational platform that explains financial concepts for students who may not have easy access to financial literacy resources. Our platform features:
      • Interactive modules covering essential topics like student aid, credit management, and retirement planning
      • An AI-powered chatbot that answers financial questions in plain language
      • Curated resources and practical guides for real-world financial decisions.`,
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2",
    technologies: ["StreamLit", "HTML", "Gemini AI", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nayena/Cash-Course----WHACK",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="whitespace-pre-line">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}