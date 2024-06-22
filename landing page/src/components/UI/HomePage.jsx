import React from 'react';
import SearchAppBar from './UX/Navbar';

const HomePage = () => {
  return (
    <div>
      <SearchAppBar />
      <section id="home" className="home-section">
        <div className="home-slogan-left">
        <img src="https://www.shutterstock.com/shutterstock/videos/1103328813/thumb/10.jpg?ip=x480" alt="Space GIF" className="home-gif" style={{width:"250px", height:"150px"}}/>
          <h1>WAY TO MARS</h1>
          <h2>Explore the Cosmos with Us</h2>

          <p>Join our community of space enthusiasts and stay updated with the latest discoveries.</p>
          <div className="home-buttons">
            <button className="home-button">Register</button>
            <button className="home-button">More</button>
          </div>
        </div>
        <div className="home-image-right">
          <img src="https://www.dictionary.com/e/wp-content/uploads/2010/08/1000x700_mars_jpg_y18XeggY.jpg" alt="Mars" />
        </div>
      </section>
 <section id="about" className="home-about-section">
  
        <h2>About Us</h2>
        <p>
          Our website is dedicated to space exploration and astronomy. We provide the latest news, articles, and research about the universe. Join us as we explore the cosmos and share our discoveries.
        </p>
        <div className="home-about-content">
          <div className="home-about-item">
            {/* <img src="path/to/image1.jpg" alt="Image 1" className="home-about-image" /> */}
            <p>Content about space exploration and missions. 
              <br></br>Details on various missions to Mars and other planets.</p>
            <img src="https://www.spaceanswers.com/wp-content/uploads/2017/11/636887main_sdo-roll_0.jpg" alt="Image 2" className="home-about-image" />
          </div>
          <div className="home-about-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyKzTl8cLNOZqWHsC6BqQYu9l7CYW36vO9g&s" alt="Image 3" className="home-about-image" />
            <p>Details about the latest astronomical discoveries and research. 
              <br></br>Insights into new findings about the universe.</p>
            {/* <img src="path/to/image4.jpg" alt="Image 4" className="home-about-image" /> */}
          </div>
          <div className="home-about-item">
            {/* <img src="path/to/image5.jpg" alt="Image 5" className="home-about-image" /> */}
            <p>Information about upcoming space events and how to get involved. 
              <br></br>Learn about star gazing events and space talks.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrtzHHJASzGXdgF5QzMcCN6hYWYTHzaZVAA&s" alt="Image 6" className="home-about-image" />
          </div>
        </div>
      </section>
      <section id="blog" className="home-blog-section">
        <h2>Blog</h2>
        <div className="home-blog-content">
          <img src="https://cdn.britannica.com/18/238518-049-AC2B446B/planets-solar-system-size-comparison.jpg" alt="Blog" className="home-blog-image" />
          <div className="home-blog-text">
            <p>Read our latest articles and blog posts about space exploration, astronomy, and the latest discoveries in the universe.</p>
            <p>Discover the breathtaking beauty of our universe through our curated selection of space photography. Explore the wonders of nebulae, galaxies, and star clusters.</p>
            <p>Stay updated with the latest news in space technology. Learn about upcoming rocket launches, satellite missions, and advancements in space travel.</p>
            <button className="home-blog-button">Start Reading</button>
          </div>
        </div>
      </section>
      <section id="contact" className="home-contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@spacewebsite.com</p>
        <p>Phone: +123 456 7890</p>
        <div className="home-social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://as1.ftcdn.net/v2/jpg/04/19/08/48/1000_F_419084895_QQMFVPfChIrMNMbNC9xpOzqGXOK02HgJ.jpg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIqxPKss_WM__jvRoJUfzp_0GEFsvvCTInA&s" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/736x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg" alt="Instagram" />
          </a>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 SpaceWebsite. All Rights Reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default HomePage;
