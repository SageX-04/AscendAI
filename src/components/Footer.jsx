import "./Footer.css";


function Footer() {

  return (

    <footer className="footer">


      <div className="footer-container">


        <div className="footer-brand">

          <h2>
            Ascend<span>AI</span>
          </h2>


          <p>
            Empowering the next generation of AI creators
            through learning, projects, and career growth.
          </p>

        </div>



        <div className="footer-column">

          <h3>
            Explore
          </h3>


          <a href="#features">
            Features
          </a>


          <a href="#roadmap">
            Roadmap
          </a>


          <a href="#about">
            About
          </a>

        </div>




        <div className="footer-column">

          <h3>
            Connect
          </h3>


          <a href="#">
            LinkedIn
          </a>


          <a href="#">
            GitHub
          </a>


          <a href="#">
            Contact
          </a>

        </div>


      </div>




      <div className="footer-bottom">

        <p>
          © 2026 AscendAI. All rights reserved.
        </p>

      </div>


    </footer>

  );

}


export default Footer;