import useScrollFade from '../hooks/useScrollFade';

export default function Certifications() {
  const { ref, visible } = useScrollFade();

  const getLogoUrl = (issuer) => {
    if (issuer.includes('Microsoft')) return 'https://cdn.simpleicons.org/microsoft/00A4EF';
    if (issuer.includes('CompTIA')) return 'https://cdn.simpleicons.org/comptia/FF4F00';
    if (issuer.includes('LinkedIn')) return 'https://cdn.simpleicons.org/linkedin/0A66C2';
    if (issuer.includes('Zendesk')) return 'https://cdn.simpleicons.org/zendesk/03363D';
    return '';
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
                <img src={getLogoUrl(cert.issuer)} alt={cert.issuer} className="h-6 w-6 object-contain" />
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
