export default function MarqueeBanner() {
  const items = [
    'DEEP OPERATING EXPERIENCE',
    'PRACTICAL ADVICE',
    'STRONGER LEADERSHIP CAPABILITY',
    'DEEP OPERATING EXPERIENCE',
    'PRACTICAL ADVICE',
    'STRONGER LEADERSHIP CAPABILITY',
  ];

  return (
    <div className="marquee-banner" aria-label="Core Advisory Ethos">
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((item, index) => (
            <span key={`m1-${index}`}>
              <span>{item}</span>
              <span className="marquee-dot" aria-hidden="true">&bull;</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`m2-${index}`}>
              <span>{item}</span>
              <span className="marquee-dot" aria-hidden="true">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
