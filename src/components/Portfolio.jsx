import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Briefcase, 
  GraduationCap, 
  User, 
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects'];
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Shivani Giri</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-white hover:text-purple-300 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Shivani Giri
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-6">
              Full Stack Developer & Graphics Lead
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Computer Science student passionate about web development, AI integration, and creating visually compelling digital experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:shivani.goswami212005@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors">
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
            <a href="https://github.com/shevaniii" target="_blank" rel="noopener noreferrer" className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="text-white mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate Computer Science student at ABES Engineering College with a strong foundation in full-stack development and graphic design. Currently maintaining an 8.0 CGPA while actively contributing to technical initiatives and leading creative projects.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My experience spans from developing AI-integrated SaaS platforms to creating compelling visual content. I enjoy solving complex problems and building user-centric applications that make a real impact.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={20} className="text-purple-400" />
                  <span>shivani.goswami212005@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={20} className="text-purple-400" />
                  <span>+91 7678419218</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={20} className="text-purple-400" />
                  <span>Ghaziabad, Uttar Pradesh</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://github.com/shevaniii" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/shivani-giri" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">B.Tech Computer Science</h3>
                  <p className="text-purple-300 text-lg mb-2">ABES Engineering College, Ghaziabad</p>
                  <p className="text-gray-400 mb-2">July 2022 - July 2026</p>
                  <p className="text-gray-300">CGPA: 8.0</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Intermediate (PCM)</h3>
                  <p className="text-purple-300 text-lg mb-2">Ram Kishan Institute, Ghaziabad</p>
                  <p className="text-gray-400 mb-2">April 2021 - March 2022</p>
                  <p className="text-gray-300">Percentage: 90%</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Secondary Education</h3>
                  <p className="text-purple-300 text-lg mb-2">Ram Kishan Institute, Ghaziabad</p>
                  <p className="text-gray-400 mb-2">April 2019 - March 2020</p>
                  <p className="text-gray-300">Percentage: 80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Graphics Lead</h3>
                  <p className="text-purple-300 text-lg mb-2">ACM_abesec, Ghaziabad</p>
                  <p className="text-gray-400 mb-4">April 2024 - Present</p>
                  <p className="text-gray-300">
                    Lead graphic design team in creating visually compelling content for college events and technical initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Code size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
                  <p className="text-purple-300 text-lg mb-2">DBCOSS Technology, Faridabad</p>
                  <p className="text-gray-400 mb-4">January 2024 - April 2024</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Completed comprehensive development internship focusing on full-stack development</li>
                    <li>• Gained hands-on experience in front-end and back-end development using modern web technologies</li>
                    <li>• Built responsive web applications implementing core web functionalities</li>
                    <li>• Developed and deployed multiple projects using React.js, Node.js, and database integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Programming Languages</h3>
                <div className="space-y-2">
                  {['Java', 'JavaScript', 'HTML', 'C Language'].map(skill => (
                    <div key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
                <div className="space-y-2">
                  {['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'].map(skill => (
                    <div key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Databases</h3>
                <div className="space-y-2">
                  {['MongoDB', 'SQL', 'PostgreSQL'].map(skill => (
                    <div key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Tools</h3>
                <div className="space-y-2">
                  {['VS Code', 'GitHub', 'XAMPP'].map(skill => (
                    <div key={skill} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">AI Website Builder</h3>
                <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                  In Development
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Developing an AI-integrated SaaS platform that enables users to build websites using artificial intelligence with machine learning algorithms for automated website generation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React.js', 'Node.js', 'AI Integration', 'SaaS'].map(tech => (
                  <span key={tech} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">EasyFeet E-commerce</h3>
                <ExternalLink size={20} className="text-purple-400 cursor-pointer" />
              </div>
              <p className="text-gray-300 mb-4">
                Full-stack e-commerce website for shoe retail with complete shopping functionality, user authentication, product catalog, and admin panel for inventory management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js'].map(tech => (
                  <span key={tech} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Currency Converter</h3>
                <ExternalLink size={20} className="text-purple-400 cursor-pointer" />
              </div>
              <p className="text-gray-300 mb-4">
                Dynamic currency converter with real-time exchange rate calculations, integrated with third-party APIs for accurate and up-to-date currency conversion rates.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'HTML', 'CSS', 'React.js', 'API Integration'].map(tech => (
                  <span key={tech} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:shivani.goswami212005@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-colors">
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a href="https://github.com/shevaniii" target="_blank" rel="noopener noreferrer" className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-colors">
              <Github size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Shivani Giri. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;