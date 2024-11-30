import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
    {/* Hero Section */}
    <header className="hero">
  <div className="hero-content">
    <h1>Hi, I'm <span className="highlight">Suraj Kushwaha</span></h1>
    <p>
      Transforming ideas into reality as a <span className="highlight">Android Developer and Ui/Ux designer</span> 
      <span className="highlight"></span>.
    </p>
    <a href="#about" className="btn-primary">Learn More</a>
  </div>
  <div className="hero-photo">
    <img
      src="https://via.placeholder.com/180x260"
      alt="Suraj Kushwaha"
      className="profile-photo"
    />
  </div>
</header>


      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm <span className="highlight">Suraj Kushwaha</span>, a
            professional <span className="highlight">Android Developer</span> and <span className="highlight"></span> 
            with a passion for creating impactful and secure digital experiences.
          </p>
          <p>
            My expertise includes <span className="highlight">mobile app development </span>
            <span className="highlight"></span>and staying ahead in the fast-evolving tech landscape. 
            I thrive on solving complex problems and turning ideas into impactful projects.
          </p>
          
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">Java</div>
          <div className="skill-card">Kotlin</div>
          <div className="skill-card">Firebase</div>
          <div className="skill-card">Android Studio</div>
          <div className="skill-card">UI/UX Design</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Grocessary store App</h3>
            <p>
              A app to purchase Grocessary items. Built with Kotlin and jetpack compose.
            </p>
            <a href="#!" className="btn-secondary">View Project</a>
          </div>
          <div className="project-card">
            <h3>My portfolio</h3>
            <p>
             created my portfolio using react js
            </p>
            <a href="#!" className="btn-secondary">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Suraj Kushwaha. Built with ❤️ and passion.</p>
      </footer>
    </div>
  );
}

export default App;
