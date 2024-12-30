import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
  },
  {
    name: "Soft Skills",
    skills: ["Team Leadership", "Problem Solving", "Communication", "Agile"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
