import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Hero3D from "@/components/Hero3D";
import StarField from "@/components/StarField";
import {
  Mail,
  Linkedin,
  Download,
  ExternalLink,
  Play,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Eye,
  Heart,
  Share2,
  Video,
  Image as ImageIcon,
  BarChart3,
  Target,
  Palette,
  Monitor,
  Smartphone,
  Zap,
  Send,
} from "lucide-react";

const skillsData = [
  { name: "Project Management", icon: Target },
  { name: "Meta Business Suite", icon: BarChart3 },
  { name: "YouTube", icon: Video },
  { name: "Canva", icon: Palette },
  { name: "Video Editing", icon: Play },
  { name: "Buffer", icon: Monitor },
  { name: "Photoshop", icon: ImageIcon },
  { name: "Hootsuite", icon: Smartphone },
  { name: "Keyword Research", icon: TrendingUp },
  { name: "Community Management", icon: Users },
];

const experienceData = [
  {
    company: "ProManage IT Solution",
    role: "Social Media Executive",
    period: "Feb 2025 – Present",
    location: "Noida",
    achievements: [
      "Managed social presence for JMERC and Repeateeshop",
      "Boosted engagement by 30%",
      "Designed assets in Canva and scheduled via Meta Business Suite",
    ],
    current: true,
  },
  {
    company: "Anime Devta Brands Pvt Ltd",
    role: "Content Creation Intern",
    period: "May 2023 – Jul 2023",
    location: "Internship",
    achievements: [
      "Video editing and content creation for YouTube channels (70K+ and 100K+ subs)",
      "Managed IG pages with up to 90K followers",
    ],
    current: false,
  },
];

const projectsData = [
  {
    title: "ProManage Facebook Growth",
    role: "Social Media Manager",
    outcome: "Gained 100K+ reach in 2 months",
    description:
      "Strategic social media campaign focusing on engagement and community building",
    metrics: { reach: "100K+", growth: "200%", engagement: "30%" },
    tags: ["Facebook", "Community Building", "Content Strategy"],
  },
  {
    title: "Personal YouTube Channel",
    role: "Creator",
    outcome: "70K+ organic subscribers in 6 months",
    description:
      "Built a thriving YouTube community through consistent content and engagement",
    metrics: { subscribers: "70K+", views: "1M+", retention: "85%" },
    tags: ["YouTube", "Content Creation", "Video Editing"],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Interactive Star Field Background */}
      <StarField />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary"
            >
              Sachin K
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <Hero3D />
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-electric-cyan to-primary bg-300% animate-gradient bg-clip-text text-transparent">
              Sachin Kumar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Driving Engagement through Creativity & Strategy
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Social Media Executive passionate about building communities,
              creating compelling content, and driving meaningful engagement
              across digital platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow"
                asChild
              >
                <a href="#projects">
                  <Eye className="w-5 h-5 mr-2" />
                  View My Work
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Connect
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              {[
                { label: "Reach Generated", value: "100K+" },
                { label: "Engagement Boost", value: "30%" },
                { label: "Subscribers Gained", value: "70K+" },
                { label: "Experience Years", value: "2+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating digital experiences that connect and
              inspire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <CardTitle>Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      B.Tech, Computer Science & IT
                    </h4>
                    <p className="text-muted-foreground">
                      Dronacharya College of Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Expected Graduation: 2025
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle>Passions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Community Building & Engagement</li>
                    <li>• Content Strategy & Creation</li>
                    <li>• Collaborative Marketing</li>
                    <li>• Data-Driven Growth</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary/20 to-electric-cyan/20 p-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5153f308efa14f1d87457acdc495e125%2F04921095876e41f2bf152d5361147a35?format=webp&width=800"
                  alt="Sachin Kumar - Social Media Executive"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  style={{ boxShadow: "1px 1px 3px 0px rgba(0, 0, 0, 1)" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl"
                  style={{ top: "50px" }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">
                      YouTube Success Story
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert">
                <p className="text-lg leading-relaxed">
                  As a dedicated Social Media Executive, I specialize in
                  transforming digital presence into meaningful community
                  connections. My approach combines creative content strategy
                  with data-driven insights to deliver exceptional results.
                </p>
                <p className="text-lg leading-relaxed">
                  With experience managing social media for diverse brands and
                  building personal content channels from the ground up, I
                  understand what it takes to capture attention and foster
                  genuine engagement in today's competitive digital landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building digital communities and driving engagement
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-border" />
                )}

                <Card
                  className={`mb-8 ${exp.current ? "border-primary bg-primary/5" : "bg-card/50"} backdrop-blur-sm`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-4 h-4 rounded-full ${exp.current ? "bg-primary animate-pulse" : "bg-muted-foreground"} mt-2`}
                        />
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge
                          variant="secondary"
                          className="bg-primary text-primary-foreground"
                        >
                          Current
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Case studies showcasing measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{project.role}</Badge>
                      <a
                        href="https://www.youtube.com/@thesachinkanimelvr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </div>

                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {project.outcome}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Achievement */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and platforms I excel with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to elevate your social media presence?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:sachink.smm@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sachink.smm@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/thesachink/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline" asChild>
                  <a
                    href="https://cdn.builder.io/o/assets%2F5153f308efa14f1d87457acdc495e125%2Fb4dc82187490485a9d01505764fbaf65?alt=media&token=72229268-a990-4d2b-a7f6-fc408ebb1351&apiKey=5153f308efa14f1d87457acdc495e125"
                    download="Sachin_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Sachin Kumar. Built with passion for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
