import { useEffect, useRef, useState } from "react";

const GitHubActivity = () => {
  const [contributions, setContributions] = useState(null);
  const chartScroll = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://github-contributions-api.jogruber.de/v4/ashvik2024?y=last", { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        if (Number.isFinite(data.total?.lastYear)) setContributions(data.total.lastYear);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="section github-activity">
      <div className="section-heading">
        <p>03 / Open source</p>
        <h2>Consistent commits. Always learning.</h2>
      </div>
      <a className="github-chart" href="https://github.com/ashvik2024" target="_blank" rel="noreferrer">
        {contributions !== null && <strong className="github-total">{contributions.toLocaleString()} contributions in the last year</strong>}
        <div ref={chartScroll} className="github-chart-scroll" role="region" aria-label="GitHub contribution chart" tabIndex="0">
          <img
            onLoad={() => { if (chartScroll.current) chartScroll.current.scrollLeft = chartScroll.current.scrollWidth; }}
            src="https://ghchart.rshah.org/ashvik2024"
            alt="GitHub contribution activity for ashvik2024"
            loading="lazy"
          />
        </div>
        <span>View GitHub profile ↗</span>
      </a>
    </section>
  );
};

export default GitHubActivity;
