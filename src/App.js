import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Suraj Kushwaha</span>
          </h1>
          <p>
            Transforming ideas into reality as an{" "}
            <span className="highlight">Android Developer and UI/UX Designer</span>.
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
            I'm <span className="highlight">Suraj Kushwaha</span>, a professional{" "}
            <span className="highlight">Android Developer</span> and{" "}
            <span className="highlight">UI/UX Designer</span> with a passion for creating impactful
            and secure digital experiences.
          </p>
          <p>
            My expertise includes{" "}
            <span className="highlight">mobile app development</span> and staying ahead in the
            fast-evolving tech landscape. I thrive on solving complex problems and turning ideas
            into impactful projects.
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

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Internshala Certified Android Developer</li>
          <li>Published 1 app on google play store</li>
          <li>achievement 3 </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Grocery Store App</h3>
            <p>
              An app to purchase grocery items. Built with Kotlin and Jetpack Compose.
            </p>
            <a href="#!" className="btn-secondary">View Project</a>
          </div>
          <div className="project-card">
            <h3>My Portfolio</h3>
            <p>Created my portfolio using React.js.</p>
            <a href="https://suraj-portfolio123.netlify.app/" className="btn-secondary">View Project</a>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="hobbies">
        <h2>My Interests</h2>
        <p>
          When I'm not coding, I enjoy <span className="highlight">traveling , playing outdoor games </span>,{" "}
          <span className="highlight">online games</span>, and exploring new cuisines.
        </p>
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
