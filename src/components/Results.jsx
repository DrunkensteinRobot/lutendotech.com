import useScrollFade from '../hooks/useScrollFade';

export default function Results() {
  const { ref, visible } = useScrollFade();

  const caseStudies = [
    {
      client: 'Luhuhi Trading',
      tag: 'Retail',
      tagBg: 'bg-purple-50 text-purple-600 border-purple-100',
      challenge: 'Downtime and slow IT support were damaging sales on peak days.',
      solution: 'We fixed server outages, improved network monitoring, and reduced monthly IT spend by R18,000.',
      stat: '40% cost cut in 6 months',
      quote: 'We cut our IT cost by 40% and support is now fast and reliable.',
      author: 'Operations Director'
    },
    {
      client: 'Lawless Clothing',
      tag: 'Logistics',
      tagBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      challenge: 'Ticket backlogs and network chaos were slowing dispatch operations.',
      solution: 'We fixed the support queue, enforced backups, and reduced issue turnaround by 70%.',
      stat: '70% faster ticket resolution',
      quote: 'Our dispatch team now gets answers in minutes, not hours.',
      author: 'Finance Manager'
    },
    {
      client: 'Pmmt Solutions',
      tag: 'Healthcare',
      tagBg: 'bg-blue-50 text-blue-600 border-blue-100',
      challenge: 'Microsoft 365 access issues were disrupting patient admin and reporting.',
      solution: 'We fixed the M365 rollout and restored secure access across the practice in five days.',
      stat: '5-day M365 recovery',
      quote: 'Our clinic systems work again and the team can trust email and file sharing.',
      author: 'IT Manager'
    },
    {
      client: 'Khashane Attorneys',
      tag: 'Professional Services',
      tagBg: 'bg-slate-50 text-slate-700 border-slate-200',
      challenge: 'A weak backup process left the firm exposed to data loss.',
      solution: 'We fixed backup gaps, added monitoring, and confirmed restore tests on demand.',
      stat: '100% backup checks active',
      quote: 'We now know our data is safe and the restore process works.',
      author: 'Practice Manager'
    }
  ];

  return (
    <section id="results" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <span className="section-label mb-2 block">Case Studies</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Real improvements for local businesses.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            Each case shows how we fixed a specific IT problem and delivered measurable uptime, cost, or response-time gains.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {caseStudies.map((study, i) => (
            <div 
              key={i}
              className="bg-white border border-border-dark rounded-2xl p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-md hover:border-accent/40 select-none relative"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)'
              }}
            >
              <div>
                <div className="flex justify-between items-center mb-5 gap-3">
                  <span className="text-xs font-black text-text-dark tracking-wide">{study.client}</span>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${study.tagBg}`}>
                    {study.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Challenge</span>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">Solution</span>
                    <p className="text-xs sm:text-sm text-text-dark font-semibold leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="bg-bg-light border border-border-light rounded-xl py-2 px-3 text-xs font-bold text-accent mb-6 text-center select-none flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  <span>{study.stat}</span>
                </div>

                <div className="w-full h-px bg-border-light mb-6" />

                <figure className="relative pl-4 border-l-2 border-accent/20">
                  <blockquote className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                    "{study.quote}"
                  </blockquote>
                  <figcaption className="text-[10px] font-black text-text-dark mt-3 uppercase tracking-wider">
                    — {study.author}
                  </figcaption>
                </figure>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
