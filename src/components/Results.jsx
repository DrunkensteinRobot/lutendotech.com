import useScrollFade from '../hooks/useScrollFade';

export default function Results() {
  const { ref, visible } = useScrollFade();

  const caseStudies = [
    {
      client: "Khashane Attorneys",
      tag: "Cloud Security",
      tagBg: "bg-blue-50 text-blue-600 border-blue-100",
      challenge: "Manual local servers were prone to backup failures and lacked strict remote permissions compliance.",
      solution: "Migrated full client archive systems to a secure, encrypted Azure blob storage with Multi-Factor Authentication.",
      stat: "100% Security SLA Target Met",
      quote: "LK Digital moved our operations safely to the cloud. They understood the high security requirements of legal document filing.",
      author: "Adv. Khashane"
    },
    {
      client: "Siyaphambili Logistics",
      tag: "Process Automation",
      tagBg: "bg-purple-50 text-purple-600 border-purple-100",
      challenge: "Administrative staff spent 12 hours weekly typing manual customer dispatch slips into the invoicing CRM.",
      solution: "Engineered a Microsoft Power Automate flow to extract slip inputs and update databases in real time.",
      stat: "12 Hours Saved Weekly / User",
      quote: "The invoice workflow they built completely removed the manual data entry bottleneck. Our dispatch team is much faster now.",
      author: "M. Nkosi, Ops Director"
    },
    {
      client: "Ekurhuleni Med Clinic",
      tag: "Network & Web Care",
      tagBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      challenge: "Legacy local website loaded slowly on mobile and frequently failed to collect patient booking requests.",
      solution: "Rebuilt their site as a pure React dashboard and set up immediate email routing for booking inquiries.",
      stat: "99.9% Booking Forms SLA",
      quote: "Our patient booking requests now arrive instantly in our inbox. The new mobile speed has significantly helped our patients.",
      author: "Dr. L. Radebe, Founder"
    }
  ];

  return (
    <section id="results" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <span className="section-label mb-2 block">Client Case Studies & Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Data-driven outcomes for Gauteng businesses.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            See how LK Digital helps firms secure systems, automate manual operations, and expand.
          </p>
        </div>

        {/* Case Studies Grid (3 column, premium light dashboard aesthetic) */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
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
                {/* Header Tag and Client Title */}
                <div className="flex justify-between items-center mb-5 gap-3">
                  <span className="text-xs font-black text-text-dark tracking-wide">{study.client}</span>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${study.tagBg}`}>
                    {study.tag}
                  </span>
                </div>

                {/* Challenge & Solution details */}
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

              {/* Stat Indicator, Divider and Quote details */}
              <div className="mt-auto">
                
                {/* KPI metrics */}
                <div className="bg-bg-light border border-border-light rounded-xl py-2 px-3 text-xs font-bold text-accent mb-6 text-center select-none flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  <span>{study.stat}</span>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-border-light mb-6" />

                {/* Review Italicized Quote */}
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
