import './App.css';
import { useEffect, useState } from 'react';

// Get Theme Safely
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};


function App() {
  const [isDark] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync Theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Handle Scroll Reveal Animation
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const closeMenu = () => setIsMenuOpen(false);

  // Reusable SVG Icon variables
  const folderIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  );

  const githubIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  );

  const linkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  );

  const certBadgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
  );

  const certDocIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  );

  return (
    <>
      <div className="bg-blob"></div>

      {/* --- Navigation Bar --- */}
      <nav className="navbar">
        <div className="nav-brand">SM</div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Work</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="/SUBHAJYOTI_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="cta" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>Resume</a>
        </div>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>



      <div className="portfolio-container">
        
        {/* --- Unified Hero/About Slide --- */}
        <section id="hero-about" className="hero-about-slide reveal">
          <div className="hero-about-grid">
            {/* Left: Hero Content */}
            <div className="hero-about-left">
              <section className="about-section-unified about-section-modern about-section-flex">
                <div className="about-left">
                  <h1 className="hero-title about-gradient">Hello! I'm Subhajyoti Maity </h1>
                  <div className="about-text-unified colorful-about-text">
                    <div className="about-bio-unified">
                      <p className="about-main-text about-gradient">
                        A developer based in Kolkata, West Bengal. I am currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning from Netaji Subhash Engineering College, Garia, expecting to graduate in 2026.
                      </p>
                      <p className="about-main-text about-gradient">
                        As a proactive learner, I have gained hands-on experience through academic projects in Machine Learning and Full-Stack Development. I enjoy developing practical solutions involving data processing, model implementation, and scalable web applications. I am eager to apply my technical skills, learn from industry professionals, and contribute to real-world AI-driven projects!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-photo-right">
                        <img src="/my%20photoo.jpg" alt="Subhajyoti Maity" className="about-photo-large-clear" />
                </div>
              </section>
              <div className="hero-buttons">
                <a href="#projects" className="cta hero-cta-animated">Check out my work!</a>
              </div>
            </div>
            {/* Right side removed as per user request */}
          </div>
          {/* Technical Arsenal below grid, full width */}
          <div className="about-skills">
            <h3 style={{ color: 'var(--text-main)', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>Technical Arsenal</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <h4>💻 Languages & Web</h4>
                <p>Python, Java, JavaScript, React, HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div className="skill-card">
                <h4>⚙️ Backend</h4>
                <p>TypeScript, Node.js, Express.js, Flask, Streamlit</p>
              </div>
              <div className="skill-card">
                <h4>🤖 AI & ML</h4>
                <p>TensorFlow, PyTorch, Scikit-learn, Pandas, Numpy</p>
              </div>
              <div className="skill-card">
                <h4>🛠️ Tools & DB</h4>
                <p>Git, GitHub, SQL, MongoDB Atlas</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section (8 Core Projects) --- */}
        <section id="projects" className="reveal">
          <h2 className="section-title">Some Things I've Built</h2>
          <div className="projects-grid">
            
            {/* 1. CineRank */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/CineRank.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                  <a href="https://cine-rank-f8zs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="Live Demo Link">{linkIcon}</a>
                </div>
              </div>
              <h3>CineRank</h3>
              <p>Modern movies & people discovery platform featuring real TMDB data, advanced filters, Clerk authentication, and a responsive UI.</p>
              <div className="tech-badges">
                <span>React</span><span>Tailwind</span><span>TMDB API</span><span>Clerk</span>
              </div>
            </div>

            {/* 2. Emotion Detection */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Emotion-Detection-Using-Audio.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Audio Emotion AI</h3>
              <p>Real-time audio emotion detection extracting MFCCs via Keras/TensorFlow to detect 8 emotions, served on a Flask backend.</p>
              <div className="tech-badges">
                <span>Python</span><span>Flask</span><span>TensorFlow</span><span>Librosa</span>
              </div>
            </div>

            {/* 3. Mathematical Formula Detector */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Mathematical-Formula-Detector.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Formula Detector</h3>
              <p>Automated formula extraction from documents using YOLOv8 detection and Transformer-based LaTeX recognition with PDF/image inputs.</p>
              <div className="tech-badges">
                <span>PyTorch</span><span>Streamlit</span><span>OpenCV</span><span>OCR</span>
              </div>
            </div>

            {/* 4. Employee Attrition Prediction */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Employee-Attrition-Prediction.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Attrition Forecaster</h3>
              <p>ML-powered HR attrition risk dashboard featuring real-time risk prediction, an interactive XGBoost model, and detailed employee overviews.</p>
              <div className="tech-badges">
                <span>Python</span><span>Scikit-learn</span><span>XGBoost</span><span>Pandas</span>
              </div>
            </div>

            {/* 5. Diabetes Healthcare Program */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Diabetes-Healthcare-Program.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Diabetes Healthcare</h3>
              <p>Integrated prediction app providing ML diagnosis, a medical chatbot, medication recommendations, and generated PDF reports.</p>
              <div className="tech-badges">
                <span>Streamlit</span><span>scikit-learn</span><span>Pandas</span><span>FPDF</span>
              </div>
            </div>

            {/* 6. Real-Time Chat Application */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Real-Time-Chat-Application.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Socket.io Web Chat</h3>
              <p>Full-stack real-time messaging app featuring secure authentication (JWT), Socket.io communication, and MongoDB storage across devices.</p>
              <div className="tech-badges">
                <span>Next.js</span><span>TypeScript</span><span>Socket.io</span><span>MongoDB</span>
              </div>
            </div>

            {/* 7. Electricity Bill Management Portal */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Electricity-Bill-Management-Portal.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Electricity Bill Portal</h3>
              <p>MERN stack bill management system with secure user auth, detailed dashboard, CRUD operations, RESTful API, and bill estimator.</p>
              <div className="tech-badges">
                <span>React</span><span>Express</span><span>MongoDB</span><span>JWT</span>
              </div>
            </div>

            {/* 8. Movie Recommender System */}
            <div className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                {folderIcon}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://github.com/Subhajyoti-Maity/Movie-Recommender-System.git" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="GitHub Link">{githubIcon}</a>
                </div>
              </div>
              <h3>Movie Recommender System</h3>
              <p>Content-based movie recommendation app with advanced search, trailer links, streaming service detection, and personal collections.</p>
              <div className="tech-badges">
                <span>Python</span><span>Streamlit</span><span>scikit-learn</span><span>Pandas</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- Certifications Section --- */}
        <section id="certifications" className="reveal">
          <h2 className="section-title">Certifications</h2>
          <ul className="cert-list">
            
            <li className="cert-item">
              <div className="cert-header">
                <span className="cert-icon">{certBadgeIcon}</span>
                <span className="cert-title">Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</span>
              </div>
              <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=EE17204B79432DDB008996C6B376604531F03019E78BDABB0A9FAE1F5E83BCCF" target="_blank" rel="noopener noreferrer" className="cta cert-btn">View Credential ↗</a>
            </li>

            <li className="cert-item">
              <div className="cert-header">
                <span className="cert-icon">{certDocIcon}</span>
                <span className="cert-title">Hackerrank SQL (Basic) Certificate</span>
              </div>
              <a href="https://www.hackerrank.com/certificates/3f4dcd660ae8" target="_blank" rel="noopener noreferrer" className="cta cert-btn">View Credential ↗</a>
            </li>

            <li className="cert-item">
              <div className="cert-header">
                <span className="cert-icon">{certDocIcon}</span>
                <span className="cert-title">Hackerrank Python (Basic) Certificate</span>
              </div>
              <a href="https://www.hackerrank.com/certificates/e69966d2412a" target="_blank" rel="noopener noreferrer" className="cta cert-btn">View Credential ↗</a>
            </li>

          </ul>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="reveal contact-section">
          <p className="contact-overline">04. What's Next?</p>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-desc">
            I'm actively seeking full-time opportunities where I can apply my skills in software engineering, AI/ML, and full-stack development. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-actions">
            <a href="mailto:msubhajyoti62@gmail.com" className="cta">Email Me</a>
            <a href="https://www.linkedin.com/in/subhajyoti-maity-207815251" target="_blank" rel="noopener noreferrer" className="cta">Connect on LinkedIn</a>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="footer reveal">
          <div className="social-icons-footer">
            <a href="https://github.com/Subhajyoti-Maity" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/subhajyoti-maity-207815251" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          <p className="footer-text">
            Designed inspired by Brittany Chiang. Built by Subhajyoti Maity.
          </p>
        </footer>

      </div>
    </>
  );
}

export default App;