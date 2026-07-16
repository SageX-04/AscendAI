import "./About.css";


function About() {

  const values = [

    {
      title: "Learn",
      description:
        "Build strong AI foundations through structured lessons, guided paths, and continuous learning."
    },

    {
      title: "Build",
      description:
        "Transform knowledge into real-world projects that strengthen your portfolio and confidence."
    },

    {
      title: "Grow",
      description:
        "Develop career-ready skills and adapt to the rapidly changing world of technology."
    }

  ];


  return (

    <section className="about" id="about">


      <div className="about-header fade-in">


        <p className="section-tag">
          About AscendAI
        </p>


        <h2>
          Empowering The Next Generation Of
          <span> AI Creators</span>
        </h2>


        <p className="about-description">

          AscendAI is a future-focused AI learning platform designed
          to help students, developers, and professionals learn skills,
          build projects, and prepare for emerging career opportunities.

        </p>


      </div>



      <div className="values-grid">


        {values.map((value,index)=>(

          <div
            className="value-card fade-in"
            key={index}
          >


            <h3>
              {value.title}
            </h3>


            <p>
              {value.description}
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}


export default About;