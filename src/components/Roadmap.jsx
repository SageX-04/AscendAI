import "./Roadmap.css";


function Roadmap() {

  const steps = [

    {
      number: "01",
      title: "AI Foundations",
      description:
        "Understand artificial intelligence basics, machine learning concepts, and how AI is shaping the future."
    },

    {
      number: "02",
      title: "Programming Skills",
      description:
        "Learn Python, problem solving, data structures, and essential development skills."
    },

    {
      number: "03",
      title: "AI Tools & Projects",
      description:
        "Build practical AI projects and create a portfolio that demonstrates your abilities."
    },

    {
      number: "04",
      title: "Career Preparation",
      description:
        "Develop resumes, interview skills, and professional knowledge needed for AI careers."
    },

    {
      number: "05",
      title: "AI Professional",
      description:
        "Become ready to work with AI technologies and continue growing your expertise."
    }

  ];


  return (

    <section className="roadmap" id="roadmap">


      <div className="roadmap-header fade-in">


        <p className="section-tag">
          Your Growth Journey
        </p>


        <h2>
          From Beginner To
          <span> AI Professional</span>
        </h2>


        <p>
          A structured roadmap designed to transform your skills step by step.
        </p>


      </div>



      <div className="roadmap-container">


        {steps.map((step,index)=>(

          <div
            className="roadmap-card fade-in"
            key={index}
          >


            <div className="roadmap-number">

              {step.number}

            </div>



            <div className="roadmap-content">

              <h3>
                {step.title}
              </h3>


              <p>
                {step.description}
              </p>


            </div>


          </div>

        ))}


      </div>


    </section>

  );
}


export default Roadmap;