import useScrollFade from '../hooks/useScrollFade';

export default function Credentials() {
  const { ref, visible } = useScrollFade();

  const credentialsData = [
    {
      title: 'ITSM Architecture',
      description: 'Expert configuration of Atera & Zendesk platforms',
      badge: 'Workflows'
    },
    {
      title: 'Cloud Automation',
      description: 'Workflow optimization via Power Automate',
      badge: 'Automation'
    },
    {
      title: 'Enterprise M365',
      description: 'Entra ID & Exchange environment support',
      badge: 'Admin'
    },
    {
      title: 'Data & Server Ops',
      description: 'SQL Server, Linux, & AWS EC2 Administration',
      badge: 'Infrastructure'
    },
    {
      title: 'Network Deployment',
      description: 'Large-scale VLAN & hardware configurations',
      badge: 'Networking'
    }
  ];

  return (
    <section className="bg-bg-primary py-16 border-y border-border-light relative z-20">
      <div 
        ref={ref}
        className={`w-full max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-10 select-none">
          <span className="section-label mb-1 block">Trust Signals</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-text-dark tracking-tight">
            Clear indicators that your IT is managed well.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 select-none justify-center">
          {credentialsData.map((item, i) => (
            <div 
              key={i}
              className="bg-white border border-border-dark rounded-xl p-4 shadow-2xs text-center flex flex-col items-center justify-between group hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-[10px] font-bold text-accent bg-accent/8 border border-accent/15 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                {item.badge}
              </span>
              <h3 className="text-sm font-extrabold text-text-dark tracking-wide">
                {item.title}
              </h3>
              <p className="text-[10px] font-bold text-text-muted mt-1 leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
