import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Sun, Moon, Download, Code2, Database, Globe, Server, GraduationCap,
  BriefcaseBusiness, ExternalLink, Send, MapPin, Phone, CheckCircle2,
  Layers3, Terminal, Sparkles
} from "lucide-react";

const PROFILE = {
  name: "Digbijaya Dhal",
  role: "Java Full Stack Developer",
  email: "d.bijayadhal@gmail.com",
  github: "https://github.com/digbijayadhal/",
  linkedin: "https://www.linkedin.com/in/digbijaya-dhal-7242843b0/",
  location: "India"
};

const skills = [
  { name: "Java", detail: "Core Java · OOP", icon: "☕", group: "Backend" },
  { name: "Spring Boot", detail: "REST APIs", icon: "🌱", group: "Backend" },
  { name: "Spring MVC", detail: "Web applications", icon: "▣", group: "Backend" },
  { name: "JSP & Servlets", detail: "Java web", icon: "⌘", group: "Backend" },
  { name: "React.js", detail: "Frontend UI", icon: "⚛", group: "Frontend" },
  { name: "JavaScript", detail: "ES6+", icon: "JS", group: "Frontend" },
  { name: "HTML5", detail: "Semantic markup", icon: "5", group: "Frontend" },
  { name: "CSS3", detail: "Responsive design", icon: "✦", group: "Frontend" },
  { name: "PostgreSQL", detail: "Relational database", icon: "🐘", group: "Database" },
  { name: "MySQL", detail: "Relational database", icon: "🐬", group: "Database" },
  { name: "Git & GitHub", detail: "Version control", icon: "⌥", group: "Tools" },
  { name: "Maven", detail: "Build tool", icon: "♧", group: "Tools" }
];

const projects = [
  {
    number: "01",
    name: "Human Resource Management System",
    type: "Full Stack Web Application",
    description: "A full-stack HRMS application designed to manage employee and recruitment workflows, with a React interface connected to Spring Boot REST APIs and PostgreSQL.",
    tags: ["React.js", "Spring Boot", "Java", "PostgreSQL"],
    url: "https://hrms-frontend-ivory-chi.vercel.app/",
    accent: "violet",
    icon: "HR"
  },
  {
    number: "02",
    name: "Online Product Management System",
    type: "Java Web Application",
    description: "An admin-focused product management application built with Java Servlets and JSP, with MySQL database integration and a deployed web interface.",
    tags: ["Java", "Servlets", "JSP", "MySQL"],
    url: "https://pmsa-servlet-app-6e6e.onrender.com/",
    accent: "cyan",
    icon: "PM"
  }
];

const education = [
  {
    date: "2023 — 2026",
    title: "Bachelor of Technology",
    subtitle: "Information Technology",
    school: "Bhadrak Institute of Engineering and Technology",
    detail: "CGPA: 8.2",
    badge: "B.Tech"
  },
  {
    date: "2019 — 2022",
    title: "Diploma",
    subtitle: "Computer Science Engineering",
    school: "Barapada School of Engineering & Technology",
    detail: "Percentage: 76.45%",
    badge: "Diploma"
  }
];

const navItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}<span /></div>;
}

function App() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, .2, .5] });
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(item);
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(`Hi Digbijaya,\n\n${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className={light ? "app light" : "app"}>
      <header className="header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={() => setActive("Home")}>
            <span className="brand-mark"><Code2 size={19}/></span>
            <span>DIGBIJAYA<span className="brand-dot">.</span></span>
          </a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navItems.map((item) => <button key={item} className={active === item ? "nav-link active" : "nav-link"} onClick={() => goTo(item)}>{item}</button>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button theme-toggle" aria-label="Toggle theme" onClick={() => setLight(!light)}>{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
            <a className="resume-button" href="/resume.pdf" download><Download size={14}/> Resume</a>
            <button className="talk-button" onClick={() => goTo("Contact")}>Let's Talk <ArrowRight size={15}/></button>
            <button className="icon-button menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse"/> Open to Opportunities</div>
            <h1>Hi, I'm <span className="gradient-text">Digbijaya</span><br/><span className="gradient-text">Dhal</span> <span className="wave">👋</span></h1>
            <h2>Passionate <span className="gradient-text">Java Full Stack Developer</span><i className="cursor"/></h2>
            <p className="hero-description">I build practical web applications using Java, Spring Boot, React.js and SQL. I enjoy turning ideas into reliable, user-friendly software and continuously learning modern development tools.</p>
            <div className="hero-buttons">
              <button className="primary-button" onClick={() => goTo("Projects")}>Explore Projects <ArrowRight size={16}/></button>
              <a className="outline-button" href="/resume.pdf" download><Download size={15}/> Download Resume</a>
              <button className="plain-button" onClick={() => goTo("Contact")}>Contact Me</button>
            </div>
            <div className="socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail/></a>
            </div>
            <div className="hero-stats">
              <div><strong>12+</strong><span>Technologies</span></div>
              <div><strong>2</strong><span>Live Projects</span></div>
              <div><strong>2026</strong><span>B.Tech Graduate</span></div>
              <div><strong>100%</strong><span>Learning Mindset</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="float-chip chip-java"><span>☕</span><div><b>Java & Spring Boot</b><small>Backend Development</small></div></div>
            <div className="float-chip chip-react"><span>⚛</span><div><b>React.js</b><small>Interactive Frontend</small></div></div>
            <div className="code-window">
              <div className="window-top"><span/><span/><span/><small>digbijaya.dev</small></div>
              <div className="code-content">
                <div className="code-line"><em>01</em><span className="code-purple">const</span> developer = {"{"}</div>
                <div className="code-line indent"><em>02</em> name: <span className="code-green">'Digbijaya'</span>,</div>
                <div className="code-line indent"><em>03</em> role: <span className="code-green">'Java Developer'</span>,</div>
                <div className="code-line indent"><em>04</em> skills: [<span className="code-blue">'Java'</span>,</div>
                <div className="code-line indent"><em>05</em> <span className="code-blue">'React'</span>, <span className="code-blue">'SQL'</span>],</div>
                <div className="code-line indent"><em>06</em> passion: <span className="code-green">'Building'</span></div>
                <div className="code-line"><em>07</em>{"}"};</div>
                <div className="code-line code-comment"><em>08</em>// Let's build something great.</div>
                <div className="terminal-cursor">▌</div>
              </div>
              <div className="window-bottom"><Terminal size={13}/> Ready to create <span>●</span></div>
            </div>
            <div className="float-chip chip-db"><Database size={17}/><div><b>SQL Databases</b><small>Data Persistence</small></div></div>
            <div className="float-chip chip-build"><Sparkles size={16}/><div><b>Always Learning</b><small>Building & Improving</small></div></div>
            <div className="art-caption">{"<"} Code. Create. Improve. {" />"}</div>
          </div>
        </section>

        <section className="section-shell section-block" id="about">
          <SectionLabel>ABOUT ME</SectionLabel>
          <div className="section-heading"><h2>A little about <span className="gradient-text">me</span></h2><p>Curious by nature. Developer by passion.</p></div>
          <div className="about-grid">
            <article className="panel about-main">
              <div className="panel-icon"><Code2/></div>
              <h3>My Approach & Philosophy</h3>
              <p>I'm an aspiring Java Full Stack Developer with a background in Information Technology. I enjoy developing web applications, understanding how systems work, and solving problems through code.</p>
              <p>My focus is on writing clean, understandable code and building applications that are useful, responsive, and easy to maintain. I believe consistent practice and curiosity are key to becoming a better developer.</p>
              <div className="mini-points"><span><CheckCircle2/> Problem-solving mindset</span><span><CheckCircle2/> Continuous learner</span><span><CheckCircle2/> Team-oriented approach</span><span><CheckCircle2/> Focus on clean code</span></div>
            </article>
            <article className="panel about-side">
              <div className="panel-topline"><span>DEVELOPER PROFILE</span><span className="live-dot"/></div>
              <h3>Building my journey<br/>one project at a time.</h3>
              <p>From Java fundamentals to full-stack applications, I'm developing the skills to contribute to real-world software teams.</p>
              <div className="profile-facts">
                <div><MapPin/><span><small>LOCATION</small><b>{PROFILE.location}</b></span></div>
                <div><GraduationCap/><span><small>EDUCATION</small><b>B.Tech · Information Technology</b></span></div>
                <div><BriefcaseBusiness/><span><small>LOOKING FOR</small><b>Entry-level Developer Roles</b></span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell section-block" id="skills">
          <SectionLabel>MY TOOLKIT</SectionLabel>
          <div className="section-heading"><h2>Technologies I use <span className="gradient-text">daily</span></h2><p>Tools and technologies I'm learning and using to build applications.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => <div className="skill-card" key={skill.name}><div className="skill-icon">{skill.icon}</div><b>{skill.name}</b><small>{skill.detail}</small></div>)}
          </div>
          <div className="skill-note"><Layers3 size={16}/> My stack keeps growing as I learn, experiment, and build.</div>
        </section>

        <section className="section-shell section-block" id="projects">
          <SectionLabel>SELECTED WORK</SectionLabel>
          <div className="section-heading heading-row"><div><h2>Featured projects <span className="gradient-text">& work</span></h2><p>Some applications I've designed, developed, and deployed.</p></div><span className="project-count">02 PROJECTS</span></div>
          <div className="projects-grid">
            {projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}>
              <div className="project-visual">
                <div className="project-top"><span>PROJECT / {project.number}</span><span className="project-status"><i/> LIVE DEMO</span></div>
                <div className="project-preview">
                  <div className="preview-sidebar"><div className="preview-logo">{project.icon}</div><i/><i/><i/><i/></div>
                  <div className="preview-main"><div className="preview-heading"><span/><span/><span/></div><div className="preview-welcome"/><div className="preview-metrics"><i/><i/><i/></div><div className="preview-table"><i/><i/><i/><i/></div></div>
                </div>
                <div className="visual-glow"/>
              </div>
              <div className="project-info"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View Live Project <ArrowUpRight size={16}/></a>
              </div>
            </article>)}
          </div>
        </section>

        <section className="section-shell section-block" id="education">
          <SectionLabel>ACADEMIC BACKGROUND</SectionLabel>
          <div className="section-heading"><h2>Education & <span className="gradient-text">learning</span></h2><p>Building a strong foundation in software development and engineering.</p></div>
          <div className="timeline">
            {education.map((item, index) => <article className="timeline-item" key={item.badge}>
              <div className="timeline-marker">{index + 1}</div>
              <div className="timeline-card"><div className="timeline-top"><span className="timeline-date">{item.date}</span><span className="timeline-badge">{item.badge}</span></div><h3>{item.title}</h3><h4>{item.subtitle}</h4><p>{item.school}</p><div className="timeline-result"><CheckCircle2 size={15}/>{item.detail}</div></div>
            </article>)}
            <article className="timeline-item training-item"><div className="timeline-marker"><Sparkles size={15}/></div><div className="timeline-card"><div className="timeline-top"><span className="timeline-date">Professional Learning</span><span className="timeline-badge">Training</span></div><h3>Java Full Stack Development</h3><h4>Naresh IT</h4><p>Focused learning in Java development and full-stack web technologies, with practical exercises and project work.</p><div className="timeline-result"><CheckCircle2 size={15}/>Continuously strengthening development skills</div></div></article>
          </div>
        </section>

        <section className="section-shell section-block contact-section" id="contact">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <div className="section-heading"><h2>Let's build something <span className="gradient-text">together</span></h2><p>Have an opportunity, a project idea, or just want to connect? I'd love to hear from you.</p></div>
          <div className="contact-grid">
            <div className="panel contact-info"><h3>Contact information</h3><p>I'm open to entry-level opportunities and conversations about software development.</p>
              <a className="contact-line" href={`mailto:${PROFILE.email}`}><span><Mail/></span><div><small>EMAIL</small><b>{PROFILE.email}</b></div><ArrowUpRight/></a>
              <a className="contact-line" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><span><Linkedin/></span><div><small>LINKEDIN</small><b>Connect professionally</b></div><ArrowUpRight/></a>
              <a className="contact-line" href={PROFILE.github} target="_blank" rel="noreferrer"><span><Github/></span><div><small>GITHUB</small><b>Explore my code</b></div><ArrowUpRight/></a>
              <div className="availability-card"><span className="pulse"/><div><b>Available for opportunities</b><small>Open to learning and contributing to a team.</small></div></div>
            </div>
            <form className="panel contact-form" onSubmit={handleSubmit}><h3>Send a message</h3><p>Fill in the details below. Your email app will open with the message ready to send.</p>
              <div className="form-row"><label>Your name<input name="name" placeholder="Enter your name" required/></label><label>Your email<input name="email" type="email" placeholder="you@example.com" required/></label></div>
              <label>Subject<input name="subject" placeholder="How can I help?" required/></label>
              <label>Your message<textarea name="message" rows="5" placeholder="Write your message here..." required/></label>
              <button className="primary-button send-button" type="submit">Send Message <Send size={15}/></button>
              {sent && <span className="form-hint">Your email app should open with your message.</span>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner"><a className="brand" href="#home"><span className="brand-mark"><Code2 size={17}/></span><span>DIGBIJAYA<span className="brand-dot">.</span></span></a><p>Designed & built with curiosity, code, and coffee.</p><div className="footer-socials"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a href={`mailto:${PROFILE.email}`}><Mail/></a></div></div>
        <div className="copyright">© {new Date().getFullYear()} Digbijaya Dhal. All rights reserved. <a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
