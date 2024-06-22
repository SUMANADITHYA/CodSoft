import React, { useEffect, useState } from 'react';
import SearchAppBar from './navbar';

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    });

    const elements = document.querySelectorAll('.portfolio-about-item, .portfolio-project-item, .portfolio-skills-section .skill-card, .home-contact-section');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const [showDescriptions, setShowDescriptions] = useState([false, false, false]);

  const toggleDescription = (index) => {
    setShowDescriptions(prevShowDescriptions => {
      const newShowDescriptions = [...prevShowDescriptions];
      newShowDescriptions[index] = !newShowDescriptions[index];
      return newShowDescriptions;
    });
  };

  const firstFiveSkills = [
    { img: 'https://www.gcreddy.com/wp-content/uploads/2021/05/Java-Programming-Language-1.png', name: 'JAVA' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png', name: 'PYTHON' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KBLbzVhnZz_i3EFmbM1rLIoydeFxMq7ATQ&s', name: 'DATA STRUCTURES AND ALGORITHMS' },
    { img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240320150923/SQL-Tutorial.png', name: 'SQL' },
    { img: 'https://media.licdn.com/dms/image/D4E12AQHfSWXTymm4VA/article-cover_image-shrink_600_2000/0/1695299723277?e=2147483647&v=beta&t=k0oOD_n5zjaGevp72SKt4vFaW7DvHtrwbdIyb2eP0GA', name: 'HTML AND CSS' },
  ];

  const nextFiveSkills = [
    { img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png', name: 'JAVA SCRIPT' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', name: 'REACT JS' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9upeahuf_bVx6FXsV5rYCV1Lx2U8q3JAog&s', name: 'SPRING BOOT' },
    { img: 'https://media.licdn.com/dms/image/C4D12AQGQqBEtqSKExQ/article-cover_image-shrink_600_2000/0/1520137689792?e=2147483647&v=beta&t=489X7Sg3_8Ke2eGKXq2MFTVJJnvnr1C5MpwKGVr6W7A', name: 'CLOUD COMPUTING' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_yRP4tOgvhHyPG9xsprTVqHl155r9XDMmjgTLsc3iCbw4KOPlwMkZMQYROzBlSJ2mz8&usqp=CAU', name: 'NETWORKING' },
    { img: 'https://t3.ftcdn.net/jpg/04/39/30/20/360_F_439302086_VnIX4490i451n9vkb5D7cnTA9yHmVeOq.jpg', name: 'OPERATING SYSTEM' },
  ];

  return (
    <div>
      <SearchAppBar />
      <br />
      <section id='home' className='portfolio-section' style={{ height: '95vh' }}>
        <div className='portfolio-slogan-left'>
          <h1>Suman Adithya Udhayakumar</h1>
          <h2>Web Developer</h2>
          <p>“A successful website does three things:<br />
            It attracts the right kinds of visitors.<br />
            Guides them to the main services or product you offer.<br />
            Collect Contact details for future ongoing relation.”</p>
            <div className="portfolio-social-media">
              <a href="https://www.linkedin.com/in/suman-adithya-udhayakumar-b688a324b/" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcqbqciWWAs14xkW8D-u9zJl16P0B_vhuEw&s" alt="LinkedIn" style={{height:'40px', width:'40px'}} />
              </a>&#160;&#160;&#160;&#160;
              <a href="https://github.com/SUMANADITHYA" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dMFApzKfQirskhvPqknEBLdQefLj4YXbAw&s" alt="GitHub" style={{height:'40px', width:'40px'}} />
              </a>
            </div>
        </div>
        <div className='portfolio-image right'>
          <img src='https://t4.ftcdn.net/jpg/02/55/73/15/360_F_255731595_eG8ZerN19GVsoXqnqaExufXIiWmfDcih.jpg' style={{ marginRight: '80px' }} alt="Profile" />
        </div>
      </section>

      {/* about */}
      <section id='about' className='portfolio-about-section' style={{ height: '100vh' }}>
        <br /><br />
        <br /><h2>About</h2>
        <div className="portfolio-about-content">
          <div className="portfolio-about-item">
            <p style={{ fontSize: '25px', marginLeft: '110px' }}>
              Hello! I am Suman Adithya, a final year Computer Science and Engineering student at SKCET.
              I have a passion for software development, particularly in web and mobile applications.
              I am always eager to learn new technologies and improve my skills.
              My interests include problem-solving, artificial intelligence, and full-stack development.
              I enjoy working on challenging projects and collaborating with others to create innovative solutions.
              My interests include problem-solving, artificial intelligence, and full-stack development.
              I enjoy working on challenging projects and collaborating with others to create innovative solutions.
            </p>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="About" className="portfolio-about-image" />
          </div>
        </div>
      </section>

      {/* project section */}
      <section id='project' className='portfolio-project-section' style={{ height: '110vh' }}>
        <br /><br />
        <br /><h2>Projects</h2>
        <div className="portfolio-project-content" style={{marginLeft:'120px'}}>
          {[
            { title: 'Online Restaurant Management System', img: 'https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2022/09/07132643/Restaurant-Management-System-A-Complete-Guide.jpg', desc: 'The Restaurant Management System combines React for the frontend and Spring Boot for the backend to streamline restaurant operations. It optimizes table reservations, food orders, and hall bookings, aiming to enhance customer experiences and improve staff efficiency' },
            { title: 'Student Inquiry Assistance Portal', img: 'https://www.meritto.com/wp-content/uploads/2022/09/Banner-images-2.png', desc: 'The Student Inquiry Assistance Portal is a comprehensive project that integrates Vite React for the frontend, Spring Boot for the backend, and PostgreSQL for databases. It empowers students to submit course inquiries, enables administrators to respond to inquiries, and facilitates course management, including addition and enrollment functionalities.' },
            { title: 'Ecommerce For Engineering Product', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCM4KfDRrnIi7vwpR9_P_YLVPdPNsms9mWQ&s', desc: 'An advanced E-commerce Platform was designed and implemented, utilizing React for the frontend and Spring Boot for the backend. This dynamic system caters to diverse business needs in sectors like mechanical, building construction, electrical, electronics, food manufacturing, and agriculture. It boasts an intuitive user interface, empowering customers to effortlessly explore an extensive catalog of engineering products.' }
          ].map((project, index) => (
            <div className="portfolio-project-item" key={index}>
              <img src={project.img} alt={project.title} className="portfolio-project-image" />
              <div className="portfolio-project-text" style={{color:'rgba(0, 47, 255, 0.856)'}}>
                <h3 style={{fontSize:'xx-large'}}>{project.title}</h3>
                {showDescriptions[index] && <p>{project.desc}</p>}
                <button onClick={() => toggleDescription(index)}>
                  {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
                </button>
              </div>
            </div>
          ))}
        </div>  
      </section>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      {/* Skills Section */}
      <section id='skill' className='portfolio-skills-section' style={{ height: '120vh', textAlign: 'center', marginTop: '20px' }}>
       <br></br><br></br> <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-set">
            {firstFiveSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.img} alt={skill.name} className="skill-image" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="skills-set">
            {nextFiveSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.img} alt={skill.name} className="skill-image" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="home-contact-section" style={{height:'100vh', marginLeft:'120px'}}>
        <br></br><br></br><br></br><br></br><br></br>
        <h2 style={{color:'rgba(0, 47, 255, 0.89)', height:'50px'}}>Contact</h2>
        <p style={{fontSize:'30px'}}>Email: sumanadithya1763.com</p><br></br>
        <p style={{fontSize:'30px'}}
        
        >Phone: +______________</p><br></br>
        <div className="home-social-media">
        <a href="https://www.linkedin.com/in/suman-adithya-udhayakumar-b688a324b/" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcqbqciWWAs14xkW8D-u9zJl16P0B_vhuEw&s" alt="LinkedIn" style={{height:'40px', width:'40px'}}/>
              </a>&#160;&#160;&#160;&#160;
              <a href="https://github.com/SUMANADITHYA" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dMFApzKfQirskhvPqknEBLdQefLj4YXbAw&s" alt="GitHub" style={{height:'40px', width:'40px'}}/>
              </a>
        </div>
      </section>
      <footer className="home-footer"  style={{backgroundColor:'black', height:'80px', alignContent:'center', color:'white'}}>
      <p style={{marginLeft:'530px'}}>&copy; Suman Adithya Udhayakumar</p>
        <p  style={{marginLeft:'570px'}}>Web Developer</p>
      </footer>
    </div>
  );
}

export default Portfolio;
