import useScrollFade from '../hooks/useScrollFade';

export default function Services() {
  const { ref, visible } = useScrollFade();

  const servicesData = [
    {
      title: 'Managed IT Support',
      description: 'We fix outages, login problems, and slow ticket response. You get a stable IT foundation with 25-minute critical response times and proactive monitoring.',
      link: '#contact'
    },
    {
      title: 'ITSM & Workflow Optimization',
      description: 'We implement and optimize ITSM platforms (Atera, Zendesk) and design automation workflows using Power Automate to reduce manual effort and improve efficiency.',
      link: '#contact'
    },
    {
      title: 'Cloud & Database Management',
      description: 'We manage Microsoft 365, Azure, AWS, and SQL Server environments. We optimize queries, manage backups, and ensure your cloud platforms scale reliably.',
      link: '#contact'
    },
    {
      title: 'Process Mapping & Automation',
      description: 'We analyze your operations, map workflows, and build scalable automation that improves team productivity and reduces recurring manual tasks.',
      link: '#contact'
    }
  ];

  return (
    <section id="services" className="bg-bg-primary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 select-none">
          <span className="section-label mb-2 block">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Managed IT and process optimization.
          </h2>
          <p className="text-base text-text-secondary mt-4">
            We deliver stable systems, smart automation, and operational efficiency for growing South African companies.
          </p>
        </div>

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
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/20 text-accent flex items-center justify-center font-black text-base">
                    {service.title.charAt(0)}
                  </span>
                  <h3 className="text-lg font-extrabold text-text-dark tracking-wide">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <a
                href={service.link}
                className="text-xs font-bold uppercase tracking-widest text-accent hover:text-text-dark transition-colors"
              >
                Details →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-text-secondary font-medium">
          Need a clear IT plan? Book the free assessment and we will show you the exact savings.
        </div>
      </div>
    </section>
  );
}
