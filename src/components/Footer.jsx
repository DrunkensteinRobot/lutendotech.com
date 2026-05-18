export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-border-dark py-12 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-10">
        
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start select-none">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8.5 h-8.5 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-xs transition-transform duration-200 group-hover:scale-105">
                LK
              </div>
              <span className="font-bold text-text-dark text-base tracking-wide group-hover:text-accent transition-colors duration-200">
                LK Digital Solutions
              </span>
            </a>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xs mt-1">
              All-in-one IT co-sourcing retainers tailored for growing professional firms. We secure your architectures, manage your helpdesks, and automate your manual administrative tasks.
            </p>
          </div>

          {/* Quick Links Index */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-text-dark uppercase tracking-widest">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs font-semibold text-text-secondary">
              <a href="#home" className="hover:text-accent transition-colors">Home Base</a>
              <a href="#services" className="hover:text-accent transition-colors">IT Services Grid</a>
              <a href="#results" className="hover:text-accent transition-colors">Client Case Studies</a>
              <a href="#pricing" className="hover:text-accent transition-colors">Retainer Pricing</a>
            </nav>
          </div>

          {/* Local Support Area */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold text-text-dark uppercase tracking-widest">
              Gauteng Local Support
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Our certified AZ-104 solutions engineers operate from Sandton, Johannesburg. We deliver fast hybrid helpdesk response queues to clients throughout Gauteng.
            </p>
            {/* South Africa flag and location pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-border-dark py-1.5 px-3 rounded-xl w-fit shadow-2xs mt-2 select-none text-[10px] font-extrabold text-text-secondary">
              <span>🇿🇦</span>
              <span>Sandton Office, South Africa</span>
            </div>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-px bg-border-dark/65" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold text-text-muted select-none">
          <span>
            © {currentYear} LK Digital Solutions (Pty) Ltd. All rights reserved.
          </span>
          <div className="flex gap-5">
            <a href="#contact" className="hover:text-accent transition-colors">IT Support SLA Helpdesk</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Retainers Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
