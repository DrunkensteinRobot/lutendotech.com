import useScrollFade from '../hooks/useScrollFade';

export default function Credentials() {
  const { ref, visible } = useScrollFade();

  const credentialsData = [
    {
      title: "Microsoft Partner",
      description: "Cloud Solution Provider",
      badge: "☁️ Certified"
    },
    {
      title: "Cloud Architecture",
      description: "Infrastructure Engineering",
      badge: "🛡️ Administrator"
    },
    {
      title: "Microsoft 365",
      description: "Enterprise Workspaces",
      badge: "💼 Specialist"
    },
    {
      title: "Atera Partner",
      description: "Endpoint RMM & PSA Care",
      badge: "🚀 Operations"
    },
    {
      title: "Power Automate",
      description: "Enterprise Integrations",
      badge: "⚙️ Automation"
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
        {/* Short Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 select-none">
          <span className="section-label mb-1 block">Certified IT Standards</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-text-dark tracking-tight">
            Our Enterprise Toolset & Frameworks
          </h2>
        </div>

        {/* Credentials Badges Horizontal Grid */}
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
