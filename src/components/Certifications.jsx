import useScrollFade from '../hooks/useScrollFade';

export default function Certifications() {
  const { ref, visible } = useScrollFade();

  const CertIcon = ({ issuer }) => {
    if (issuer.includes('Microsoft')) {
      return (
        <svg viewBox="0 0 24 24" fill="#00A4EF" className="w-6 h-6 shrink-0">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
        </svg>
      );
    }
    if (issuer.includes('LinkedIn')) {
      return (
        <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-6 h-6 shrink-0">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    }
    if (issuer.includes('CompTIA')) {
      return (
        <svg viewBox="0 0 24 24" fill="#FF4F00" className="w-6 h-6 shrink-0">
          <path d="M3.766 18.064h17.915l-1.99-3.447H1.776zM14.654 2.224 8.784 12.388h3.98l3.88-6.717 3.88 6.717h3.98l-5.87-10.164z"/>
        </svg>
      );
    }
    if (issuer.includes('Zendesk')) {
      return (
        <svg viewBox="0 0 24 24" fill="#03363D" className="w-6 h-6 shrink-0">
          <path d="M2.518 19.34a6.452 6.452 0 1 1 5.922 6.446V15.65h-5.922v3.69zm18.964-14.68a6.452 6.452 0 1 1-5.922-6.446v10.136h5.922V4.66zM14.658.077c3.541 0 6.443 2.923 6.443 6.49v2.544h-6.443V.077zM9.342 23.923c-3.541 0-6.443-2.923-6.443-6.49v-2.544h6.443v9.034z"/>
        </svg>
      );
    }
    return <span className="text-2xl shrink-0">🔖</span>;
  };

  const certs = [
    {
      title: "Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "Jan 2026",
      id: "360B30058B674BA1",
      badge: "☁️"
    },
    {
      title: "System Administration Essentials",
      issuer: "Microsoft & LinkedIn",
      date: "Dec 2024",
      badge: "⚙️"
    },
    {
      title: "Information Protection & Compliance Admin",
      issuer: "Microsoft",
      date: "Dec 2024",
      id: "FA9C950884627379",
      badge: "🛡️"
    },
    {
      title: "CompTIA A+ ce",
      issuer: "CompTIA",
      date: "Nov 2024",
      badge: "🖥️"
    },
    {
      title: "Endpoint Administrator Associate",
      issuer: "Microsoft 365",
      date: "Dec 2024",
      id: "CB556901CB3E5E65",
      badge: "🔐"
    },
    {
      title: "Security, Compliance & Identity Fundamentals",
      issuer: "Microsoft",
      date: "Nov 2024",
      id: "7C8D06490FC3635F",
      badge: "🔒"
    },
    {
      title: "Microsoft 365 Fundamentals",
      issuer: "Microsoft",
      date: "Nov 2024",
      id: "2A3AB13B3762E406",
      badge: "💼"
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "Aug 2024",
      id: "34D869DBF963D830",
      badge: "☁️"
    },
    {
      title: "Cybersecurity Foundations",
      issuer: "LinkedIn",
      date: "Jun 2024",
      badge: "🛡️"
    },
    {
      title: "Cybersecurity Threat Landscape",
      issuer: "LinkedIn",
      date: "Jun 2024",
      badge: "🔍"
    },
    {
      title: "Cybersecurity Terminology",
      issuer: "LinkedIn",
      date: "Jun 2024",
      badge: "📚"
    },
    {
      title: "Zendesk Implementation Expert",
      issuer: "Zendesk",
      date: "Nov 2023",
      id: "88yfkgusm8d",
      badge: "🎧"
    }
  ];

  return (
    <section className="bg-bg-light py-20 relative z-20">
      <div 
        ref={ref}
        className={`w-full max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12 select-none">
          <span className="section-label mb-1 block">Licenses & Certifications</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Certified Expertise
          </h2>
          <p className="text-base text-text-secondary mt-4">
            Our team holds industry-recognized certifications, ensuring your IT infrastructure is managed according to the highest global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none">
          {certs.map((cert, i) => (
            <div 
              key={i}
              className="bg-white border border-border-light rounded-xl p-5 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col gap-3 group"
            >
              <div className="flex items-start justify-between gap-2">
                <CertIcon issuer={cert.issuer} />
                <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider bg-bg-light px-2 py-0.5 rounded-full border border-border-light">
                  {cert.issuer}
                </span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-extrabold text-text-dark leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
              </div>
              
              <div className="pt-3 border-t border-border-light/50 flex flex-col gap-0.5">
                <div className="flex justify-between items-center text-[10px] text-text-secondary">
                  <span className="font-semibold">Issued</span>
                  <span>{cert.date}</span>
                </div>
                {cert.id && (
                  <div className="flex justify-between items-center text-[9px] text-text-muted mt-1 truncate" title={cert.id}>
                    <span>ID: {cert.id}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
