import "./Features.css";

import {
  FaRobot,
  FaFileAlt,
  FaMicrophoneAlt,
  FaChartLine,
  FaRoad,
  FaLaptop
} from "react-icons/fa";


function Features() {

  const features = [

    {
      icon: <FaRobot />,
      title: "AI Career Mentor",
      description:
        "Receive personalized guidance and career direction based on your goals."
    },

    {
      icon: <FaRoad />,
      title: "Learning Roadmaps",
      description:
        "Follow structured learning paths from beginner level to advanced AI skills."
    },

    {
      icon: <FaLaptop />,
      title: "Real Projects",
      description:
        "Build practical projects that strengthen your portfolio and experience."
    },

    {
      icon: <FaFileAlt />,
      title: "Resume Builder",
      description:
        "Create professional, ATS-friendly resumes for AI-focused careers."
    },

    {
      icon: <FaMicrophoneAlt />,
      title: "Interview Preparation",
      description:
        "Practice technical and HR interviews with AI-powered feedback."
    },

    {
      icon: <FaChartLine />,
      title: "Progress Dashboard",
      description:
        "Track your skills, achievements, and learning progress."
    }

  ];


  return (

    <section className="features" id="features">


      <div className="features-header fade-in">

        <p className="section-tag">
          Why Choose AscendAI?
        </p>


        <h2>
          Everything You Need To Become
          <span> AI Job Ready</span>
        </h2>


        <p className="section-description">
          Learn, build, and grow with AI-powered guidance,
          practical projects, and career-focused preparation.
        </p>

      </div>



      <div className="features-grid">


        {features.map((feature,index)=>(

          <div 
            className="feature-card fade-in"
            key={index}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>


            <h3>
              {feature.title}
            </h3>


            <p>
              {feature.description}
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}


export default Features;