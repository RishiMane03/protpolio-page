import React, { useEffect } from 'react';
import Typed from 'typed.js';


function Portfolio() {
    useEffect(() => {
        // sticky navbar on scroll script
        window.addEventListener('scroll', handleScroll);

        // scroll-up button show/hide script
        window.addEventListener('scroll', handleScrollUpBtn);

        // slide-up script
        document.querySelector('.scroll-up-btn').addEventListener('click', handleScrollUp);

        // applying smooth scroll on menu items click
        const menuLinks = document.querySelectorAll('.navbar .menu li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // typing text animation script
        const typing = new Typed(".typing", {
            strings: ["Frontend Developer", "React", "Web Developer", "MERN Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollUpBtn);
            document.querySelector('.scroll-up-btn').removeEventListener('click', handleScrollUp);
            menuLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    const handleScrollUpBtn = () => {
        const scrollUpBtn = document.querySelector('.scroll-up-btn');
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    };

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#">Welcome.<span></span></a></div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#services" className="menu-btn">Skills</a></li>
            <li><a href="#skills" className="menu-btn">Talents</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
            <li><a href="#projects" className="menu-btn">Projects</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, I am</div>
            <div className="text-2">Rishikesh Mane</div>
            <div className="text-3">And I am a <span className="typing"></span></div>
            <a href="#about">About Me</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="DESTINY STUDIOS.gif" alt="" />
            </div>
            <div className="column right">
              <div className="text">Welcome to my portfolio! I'm  Rishikesh Mane</div>
              <p>a passionate MERN Stack Developer with proficiency in a range of cutting-edge technologies and frameworks. With expertise in ReactJS, Tailwind, Axios, JavaScript, CSS, App Routing, and API Integration, I bring a comprehensive skill set to the table to craft dynamic and responsive web applications.</p>
              <br />
              <a href="#services">My Skills</a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Frontend</div>
                <p>HTML, CSS, React, JavaScript, Redux</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Backend</div>
                <p>Node.JS, Express.JS, MongoDB</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">More</div>
                <p>App Routing and API Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My Talent</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>What I know</p>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJS</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>API</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Redux</span>
                  <span>80%</span>
                </div>
                <div className="line php"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="services" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="column left">
            <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Phone</div>
                <p>8975790695</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Email</div>
                <p>rishimane03@gmail.com</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">GitHub</div>
                <a style={{color: 'white'}} href='https://github.com/RishiMane03?tab=repositories'>This is my gitHub link</a>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="projects">
        <div className="max-width">
          <h2 className="title">Projects</h2>
          <div className="contact-content">
            <div className="column left">
            <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Personal Finance</div>
                <a style={{color: 'white'}} target="_blank" href='https://f5-final-project.vercel.app/'>This is my Personal Financ link</a>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Youtube Clone</div>
                <a style={{color: 'white'}} target="_blank" href='https://rishimane03.github.io/youtubeClone-f3-oct/'>This is my Youtube Clone link</a>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Air BNB Clone</div>
                <a style={{color: 'white'}} target="_blank" href='https://rishimane03.github.io/f3-c1-oct/'>This is my Air BNB Clone link</a>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
