import useScrollFade from '../hooks/useScrollFade';

export default function Services() {
  const { ref, visible } = useScrollFade();

  const servicesData = [
    {
      title: "Managed IT Infrastructure",
      description: "Complete design, deployment, and security of cloud systems. We handle standard directory setups, backup integrations, and security updates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a3.75 3.75 0 01.75-2.243m18.75 2.243a3.75 3.75 0 00-.75-2.243M5.25 5.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3" />
        </svg>
      ),
      list: [
        "Certified Azure & Microsoft 365 migrations",
        "Encrypted offsite backup systems",
        "Multi-factor authentication & endpoint security"
      ],
      outcome: "Target: 100% cloud architecture audit compliance"
    },
    {
      title: "On-Demand IT Service Desk",
      description: "Direct helpdesk access for your local team. No anonymous bots or long telephone hold queues—talk directly to certified support professionals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      list: [
        "Unlimited remote technician troubleshooting",
        "SLA response under 15 minutes for critical events",
        "Structured hardware setups and operating patches"
      ],
      outcome: "Guaranteed: Unlimited support with zero ticket caps"
    },
    {
      title: "Premium Web Platform Engineering",
      description: "Modern, ultra-fast web platforms built to drive local sales and credibility. Designed from scratch with pure React, responsive layouts, and lightning-fast loading speeds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      list: [
        "Custom, high-fidelity responsive corporate structures",
        "SEO architecture optimized for Google search rank",
        "Clean serverless integrations and email workflows"
      ],
      outcome: "Standard: Mobile responsive scores above 95%"
    },
    {
      title: "No-Code Workflow Automations",
      description: "Replace manual, administrative tasks with high-efficiency scripts. We connect your daily databases, folders, and operations using Microsoft Power Automate.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      list: [
        "Automated client invoicing & onboarding flows",
        "System alerts and real-time database synchronization",
        "Integrated messaging bots to reduce internal emails"
      ],
      outcome: "Outcome: Average 10+ hours saved weekly per user"
    }
  ];

  return (
    <section id="services" className="bg-bg-primary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 select-none">
          <span className="section-label mb-2 block">Our IT Management Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Comprehensive services, single simple subscription.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            Everything your business needs to manage, optimize, and scale its technology in Gauteng.
          </p>
        </div>

        {/* Services Grid (2x2 cards, premium SaaS card aesthetic) */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {servicesData.map((service, i) => (
            <div 
              key={i}
              className="bg-white border border-border-dark rounded-2xl p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-md hover:border-accent/40 group relative overflow-hidden select-none"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)'
              }}
            >
              <div>
                {/* Decorative glowing gradient boundary */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent/50 to-accent-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-accent/8 border border-accent/20 text-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-extrabold text-text-dark tracking-wide">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sublist */}
                <ul className="flex flex-col gap-3 mb-8">
                  {service.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-text-secondary">
                      <span className="text-accent text-sm leading-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Success Outcome Tag */}
              <div className="bg-bg-light border border-border-light rounded-xl py-2.5 px-4 text-xs font-bold text-text-muted flex items-center gap-2 group-hover:text-text-dark transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{service.outcome}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
