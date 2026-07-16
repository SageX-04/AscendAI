import { useState } from "react";
//import "../styles/Advisor.ccs";

function CareerAdvisor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleAsk() {
    if (!question.trim()) {
      setAnswer("Please enter a career question.");
      return;
    }

    setAnswer(
      "🚀 AI Response: This is where our AI Career Advisor will answer your questions. Soon we'll connect this to a real AI model."
    );
  }

  return (
    <section className="career-advisor">
      <h2>AI Career Advisor</h2>

      <p>
        Ask anything about careers, skills, jobs, or interview preparation.
      </p>

      <textarea
        placeholder="Example: How can I become an AI Engineer?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk}>
        Ask AI
      </button>

      {answer && (
        <div className="answer-box">
          {answer}
        </div>
      )}
    </section>
  );
}

export default CareerAdvisor;