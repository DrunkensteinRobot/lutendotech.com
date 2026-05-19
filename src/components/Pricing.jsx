import useScrollFade from '../hooks/useScrollFade';

export default function Pricing() {
  const { ref, visible } = useScrollFade();

  const pricingTiers = [
    {
      name: "Starter Retainer",
      price: "R4,999",
      period: "per month",
      description: "Perfect for growing local startups needing basic infrastructure support & standard cloud care.",
      features: [
        "Up to 10 active endpoint users support",
        "Business hour remote helpdesk care",
        "Basic Microsoft 365 configuration",
        "Weekly automated offsite backups",
        "24-hour response SLA target"
      ],
      ctaLabel: "Get Starter Retainer",
      popular: false
    },
    {
      name: "Business Retainer",
      price: "R9,999",
      period: "per month",
      description: "Our highly recommended all-in-one IT partnership plan for established firms seeking scaling care.",
      features: [
        "Unlimited remote user helpdesk care",
        "Complete Azure Cloud VM administration",
        "M365 & Exchange email migrations",
        "2 workflow automations scripted / month",
        "15-minute response SLA for critical events",
        "Monthly cloud cost audit & reports"
      ],
      ctaLabel: "Start Business Retainer",
      popular: true
    },
    {
      name: "Enterprise Retainer",
      price: "Custom",
      period: "quoted retainer",
      description: "Tailored IT co-sourcing plans for businesses requiring dedicated cloud security operations.",
      features: [
        "Multi-branch network configuration",
        "Dedicated Cloud Solutions Engineer",
        "Custom application builds & API setups",
        "24/7/365 server threat scanning",
        "Custom, high-fidelity security SLAs"
      ],
      ctaLabel: "Schedule Consultation",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <span className="section-label mb-2 block">Simple Retainer Tiers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Flexible IT plans, zero lock-in contracts.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            Select a plan that aligns with your headcount and operations. Upgrade or scale down whenever you need.
          </p>
        </div>

        {/* Pricing Cards Grid (3 Columns) */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {pricingTiers.map((tier, i) => (
            <div 
              key={i}
              className={`flex flex-col rounded-2xl relative select-none transition-all duration-300 hover:scale-[1.015] ${
                tier.popular 
                  ? 'border-2 border-accent bg-white shadow-xl shadow-accent/5 p-7' 
                  : 'border border-border-dark bg-white p-7 shadow-xs'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)'
              }}
            >
              {/* Popular Highlight Tag */}
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white font-extrabold text-[9px] tracking-widest px-4 py-1 rounded-full uppercase shadow-md select-none">
                  ★ Most Popular Plan
                </span>
              )}

              {/* Tier Name & Description */}
              <div className="mb-6">
                <h3 className="text-lg font-black text-text-dark">{tier.name}</h3>
                <p className="text-xs text-text-muted mt-2 leading-relaxed min-h-[48px]">
                  {tier.description}
                </p>
              </div>

              {/* Pricing Section */}
              <div className="flex items-baseline gap-1 mb-6 select-none bg-bg-light border border-border-light rounded-xl p-4 justify-center">
                <span className="text-3xl sm:text-4xl font-black text-text-dark tracking-tight">
                  {tier.price}
                </span>
                <span className="text-xs font-bold text-text-secondary">
                  / {tier.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-text-secondary">
                    <span className="text-accent text-sm leading-none mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <a 
                href="#contact" 
                className={`w-full text-center block py-3 rounded-xl text-xs font-black tracking-wide uppercase transition-all duration-200 ${
                  tier.popular 
                    ? 'btn-primary shadow-lg shadow-accent/20' 
                    : 'border border-accent text-accent hover:bg-accent hover:text-white bg-white'
                }`}
              >
                {tier.ctaLabel}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
