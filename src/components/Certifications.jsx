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
          <path d="M11.8292 11.7067v1.8524a.608.608 0 0 1-.6016-.6136v-1.2366a.5728.5728 0 0 0-1.1428 0v1.8502a.5988.5988 0 0 1-.5998-.5978v-1.2524a.5746.5746 0 0 0-1.1455 0v1.2431a.608.608 0 0 1-.5998.6071V11.709c.0097-.6352.5325-1.1422 1.1676-1.1325h.0013c.331-.0046.6486.1302.8754.3713a1.1752 1.1752 0 0 1 .868-.3713c.6372-.013 1.1642.493 1.1772 1.1303zm7.0156-2.2917v3.563a.597.597 0 0 0 .6006.5811v-3.563a.5969.5969 0 0 0-.6006-.5811zM24 13.5258c-.324.0269-.675-.0697-.8011-.3435l-.3185-.6852h-2.1306l-.3157.7037c-.1494.2785-.544.3667-.8476.3667l1.738-3.8063a.5292.5292 0 0 1 .4762-.3435.5367.5367 0 0 1 .481.3435L24 13.5258zm-1.3759-1.6182-.8059-1.7671-.8038 1.767h1.6097zm-19.166.6387a1.8463 1.8463 0 0 1-1.1817.4373c-.9312 0-1.6888-.6824-1.6888-1.5133s.7604-1.5058 1.6888-1.5058c.501.0002.98.2055 1.3257.5682a.5812.5812 0 0 0 .7417.0827c-.362-.7502-1.1763-1.2376-2.0693-1.2376C1.0212 9.3778 0 10.3164 0 11.4722c0 1.1558 1.0175 2.0953 2.2745 2.0953a2.3846 2.3846 0 0 0 1.2885-.3713c.2605-.162.4823-.379.6499-.636a.5886.5886 0 0 0-.7548-.0139zm11.43-2.539h1.2877v2.9512a.5904.5904 0 0 0 .5728.6006h.0278v-3.5518h1.284a.5941.5941 0 0 0 .5932-.5932h-4.3503a.5904.5904 0 0 0 .5848.5932zm-7.3108 2.0665c0 .8364-.726 1.4853-1.6507 1.4853-.9283 0-1.6505-.6498-1.6505-1.4853s.725-1.4947 1.6505-1.4947c.9256 0 1.6507.6583 1.6507 1.4947zm-.6007-.0028c0-.5004-.4641-.894-1.05-.894-.5876 0-1.0509.3927-1.0509.894 0 .5013.4643.8875 1.051.8875s1.05-.387 1.05-.8875zm6.7975-1.5002c-.9506 0-1.6395.6433-1.6395 1.5178v2.5335a.596.596 0 0 0 .6016-.5857v-1.9496c0-.6313.5162-.9172 1.038-.9172.5486 0 .9812.3982.9812.9051 0 .4874-.4326.8754-.9813.8754-.3686 0-.6452-.0928-.8132-.2785v.0056a.7503.7503 0 0 0-.0381.1068.596.596 0 0 0 .4112.7241c.1462.0314.2953.0463.4447.0446.8885 0 1.581-.6508 1.5736-1.4761a1.4647 1.4647 0 0 0-.4642-1.075 1.642 1.642 0 0 0-1.114-.4308z"/>
        </svg>
      );
    }
    if (issuer.includes('Zendesk')) {
      return (
        <svg viewBox="0 0 24 24" fill="#03363D" className="w-6 h-6 shrink-0">
          <path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"/>
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
