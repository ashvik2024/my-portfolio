import CountUp from "../../ReactBits/CountUp";

const Education = () => (
  <section id="education" className="section education-section">
    <div className="section-heading"><p>04 / Education</p><h2>Strong fundamentals, built in Delhi.</h2></div>
    <article className="education-card">
      <div>
        <p className="eyebrow">2023 — 2026</p>
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>Delhi Skill and Entrepreneurship University (DSEU)</p>
      </div>
      <div className="grade">
        <div className="grade-score"><span className="score-arrow" aria-hidden="true">↗</span><strong><CountUp to={7} decimals={1} duration={2.2} /></strong></div>
        <span>CGPA / 10</span>
      </div>
    </article>
  </section>
);

export default Education;
