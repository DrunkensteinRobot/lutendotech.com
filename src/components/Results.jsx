import useScrollFade from '../hooks/useScrollFade';

export default function Results() {
  const { ref, visible } = useScrollFade();

  const caseStudies = [
    {
      client: "Lawless Clothing",
      tag: "E-Commerce",
      tagBg: "bg-purple-50 text-purple-600 border-purple-100",
      challenge: "Needed a robust, scalable e-commerce storefront with an easy-to-use content management system separated from the frontend.",
      solution: "Developed a headless Next.js architecture with Sanity CMS for independent catalog management, deployed on Vercel.",
      stat: "Lightning-Fast Storefront",
      quote: "Delivered a production-ready, lightning-fast shopping experience that empowers us to manage our retail catalog independently.",
      author: "Lawless Clothing"
    },
    {
      client: "Luhuhi Trading",
      tag: "Corporate Platform",
      tagBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      challenge: "Required a complete multi-page web presence with intuitive navigation and seamless lead generation without a complex backend.",
      solution: "Engineered a React SPA with an integrated direct-to-email funnel via EmailJS SDK for instant quote requests.",
      stat: "Zero-Maintenance Lead Gen",
      quote: "Created an optimized, zero-maintenance contact pipeline that allows potential B2B clients to reach out directly from the site.",
      author: "Luhuhi Trading"
    },
    {
      client: "PMMT Solutions",
      tag: "Product SPA",
      tagBg: "bg-blue-50 text-blue-600 border-blue-100",
      challenge: "Needed a highly responsive, modern digital storefront to deliver a fast, fluid user experience for a product-focused business.",
      solution: "Built a dynamic Single-Page Application (SPA) using React and Vite, optimizing asset loading and component-driven UI.",
      stat: "Instant Asset Loading",
      quote: "Provides us with a high-performance digital storefront architecture that loads instantly, improving user engagement and retention.",
      author: "PMMT Solutions"
    },
    {
      client: "Khashane Attorneys Inc.",
      tag: "Legal Services",
      tagBg: "bg-slate-50 text-slate-700 border-slate-200",
      challenge: "Required a sleek, trustworthy, and performant web platform focused on fast loading speeds and modern UI practices.",
      solution: "Implemented a utility-first Tailwind CSS design with SEO-optimized asset delivery and a fully responsive structure.",
      stat: "Polished Professional Identity",
      quote: "Established a polished online identity for the firm, enhancing credibility and ensuring a seamless experience across all devices.",
      author: "Khashane Attorneys Inc."
    }
  ];

  return (
    <section id="results" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <span className="section-label mb-2 block">Client Case Studies & Projects</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Digital transformations for modern brands.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            See how LK Digital helps firms build high-performance web applications, scalable e-commerce platforms, and professional corporate identities.
          </p>
        </div>

        {/* Case Studies Grid (2 column layout for 4 items) */}
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
