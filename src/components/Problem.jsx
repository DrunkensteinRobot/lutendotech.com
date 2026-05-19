import useScrollFade from '../hooks/useScrollFade';

export default function Problem() {
  const { ref, visible } = useScrollFade();

  const comparisonData = [
    {
      title: "Option A: Hiring In-House",
      type: "unfavorable",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      list: [
        "Unpredictable overhead costs (average R35k+ / month)",
        "Single technician limits your tech stack scope",
        "Prone to service disruptions when they go on leave",
        "Zero performance SLAs or formal service desk tickets"
      ]
    },
    {
      title: "Option B: Typical Legacy MSP",
      type: "unfavorable",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      list: [
        "Rigid 3-year lock-in service agreements",
        "Slow ticket response queues and anonymous dispatchers",
        "Reactive break-fix bills (charging for extra VMs)",
        "No focus on cloud modernizations or cost optimization"
      ]
    },
    {
      title: "The Proactive Retainer",
      type: "favorable",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      tag: "RECOMMENDED SOLUTION",
      list: [
        "Flexible, predictable co-sourcing SLA retainers",
        "Instant support with dedicated, certified engineers",
        "Full Azure Cloud design, backups, and audits included",
        "No-code automation setup to streamline operations"
      ]
    }
  ];

  return (
    <section id="problem" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <span className="section-label mb-2 block">IT support comparison</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Stop paying for slow support and manual workflows.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            Compare in-house hires, legacy MSP contracts, and a managed IT retainer with process optimization.
          </p>
        </div>

        {/* Comparison Grid Cards */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {comparisonData.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl relative select-none transition-all duration-300 hover:scale-[1.01] ${
                card.type === 'favorable'
                  ? 'border-2 border-accent bg-white shadow-lg shadow-accent/5 p-7'
                  : 'border border-border-dark bg-white p-7 shadow-xs'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)'
              }}
            >
              {/* Highlight Tag */}
              {card.tag && (
                <span className="absolute -top-3.5 left-6 bg-accent text-white font-extrabold text-[9px] tracking-widest px-3 py-1 rounded-full uppercase">
                  {card.tag}
                </span>
              )}

              {/* Title & Icon Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  card.type === 'favorable' 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-bg-light text-text-secondary border border-border-light'
                }`}>
                  {card.icon}
                </span>
                <h3 className="text-base font-extrabold text-text-dark">
                  {card.title}
                </h3>
              </div>

              {/* Checklist list */}
              <ul className="flex flex-col gap-4 flex-1 mb-8">
                {card.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-text-secondary">
                    {card.type === 'favorable' ? (
                      // Green checkmark for LK Digital Solutions
                      <span className="flex-shrink-0 w-4.5 h-4.5 bg-success/10 border border-success/20 rounded-full flex items-center justify-center text-success mt-0.5 font-bold">
                        ✓
                      </span>
                    ) : (
                      // Hot Pink cross for unfavorable options
                      <span className="flex-shrink-0 w-4.5 h-4.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full flex items-center justify-center text-accent-cyan mt-0.5 font-bold">
                        ×
                      </span>
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              {card.type === 'favorable' && (
                <a href="#contact" className="btn-primary w-full text-center block text-xs py-3 font-extrabold tracking-wide uppercase mt-auto">
                  Book free assessment
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
