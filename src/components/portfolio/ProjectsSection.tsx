import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, FolderOpen } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Student Record Management System",
      description: "Built a Java-based desktop application with a GUI using Swing to manage student records. The system allows adding, updating, and viewing student data including enrollment number, name, class, subject, and attendance. Integrated with a MySQL database to persist data and dynamically update records through the UI.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Java", "Swing (GUI)", "MySQL", "JDBC"],
      featured: true,
      links: {
        github: "#"
      }
    },
    {
      title: "Fitness Activity Recognition System",
      description: "Built a real-time system to detect exercises, count reps, and analyze posture using MediaPipe and machine learning, helping users improve workout form and avoid injuries. Implemented computer vision techniques for accurate pose estimation and movement tracking.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "TensorFlow", "NumPy"],
      featured: true,
      links: {
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <FolderOpen className="w-4 h-4 mr-2" />
              Featured Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Things I've built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my technical skills and passion for creating innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={project.title} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/10 hover:bg-primary/5 transition-colors"></div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <Button variant="default" size="sm" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <Card key={project.title} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 hover:bg-primary/5 transition-colors"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description.substring(0, 120)}...
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="w-full" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              View More Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;