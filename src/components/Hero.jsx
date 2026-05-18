import { useEffect, useState } from 'react';
import useScrollFade from '../hooks/useScrollFade';

export default function Hero() {
  const { ref, visible } = useScrollFade();
  const [cpuVal, setCpuVal] = useState(42);
  const [ramVal, setRamVal] = useState(65);
  const [activeTickets, setActiveTickets] = useState(2);

  // Simple interval to simulate real-time metrics changing on the dashboard mockup
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuVal(prev => Math.max(30, Math.min(85, prev + Math.floor(Math.random() * 9) - 4)));
      setRamVal(prev => Math.max(50, Math.min(90, prev + Math.floor(Math.random() * 5) - 2)));
      if (Math.random() > 0.8) {
        setActiveTickets(prev => Math.max(1, Math.min(5, prev + (Math.random() > 0.5 ? 1 : -1))));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-bg-primary overflow-hidden"
    >
      {/* Decorative Grid Mesh Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative Gradient Background Bubbles */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-3xl z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column - High Converting Value Proposition */}
        <div 
          ref={ref}
          className={`lg:col-span-6 flex flex-col transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-full py-1 px-3.5 mb-6 w-fit animate-pulse">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-[10px] font-bold tracking-[0.1em] text-accent uppercase">
              All-In-One IT Co-Sourcing Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-dark leading-[1.1] mb-6">
            The all-in-one IT platform for your{' '}
            <span className="bg-gradient-to-r from-accent to-[#004ecc] bg-clip-text text-transparent">
              business success.
            </span>
          </h1>

          {/* Subheading Paragraph */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
            Say goodbye to fragmented support queues, unpredictable billing cycles, and broken technology. Get unlimited IT service desks, cloud scaling, and AI workflow automations on a single proactive retainer.
          </p>

          {/* Value Checklist (Pink checkmarks, high-converting) */}
          <ul className="flex flex-col gap-4 mb-8">
            {[
              "Unlimited Remote IT Support & Network Care",
              "Automated Cloud Scaling & Microsoft 365 Setup",
              "Proactive AZ-104 Certified Architecture Audits",
              "AI-Driven Workflows to Cut Internal Manual Tasks"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-medium text-text-secondary select-none">
                <span className="flex-shrink-0 w-5 h-5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full flex items-center justify-center text-accent-cyan mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
            <a href="#contact" className="btn-primary py-3 px-8 text-center text-sm font-bold shadow-lg shadow-accent/20 hover:scale-[1.01] transition-all">
              Book a 30-Day retainer trial
            </a>
            <a href="#services" className="btn-ghost py-3 px-8 text-center text-sm font-bold bg-white/40 hover:bg-white hover:scale-[1.01] transition-all">
              Explore our services
            </a>
          </div>

          {/* Risk Mitigation Subtext */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted mt-2 font-medium">
            <span className="flex items-center gap-1">
              <span className="text-accent">✓</span> No long-term lock-ins
            </span>
            <span className="flex items-center gap-1">
              <span className="text-accent">✓</span> Standard SLA guarantee
            </span>
            <span className="flex items-center gap-1">
              <span className="text-accent">✓</span> Proudly Gauteng based
            </span>
          </div>
        </div>

        {/* Right Column - Premium CSS/HTML IT Dashboard Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center relative">
          
          {/* Main Dashboard Panel Sheet */}
          <div className="w-full max-w-xl bg-white border border-border-dark rounded-2xl shadow-xl overflow-hidden flex flex-col relative aspect-[4/3] z-10 transition-transform duration-300 hover:scale-[1.005]">
            
            {/* Mock Header/Topbar */}
            <div className="bg-bg-light border-b border-border-light px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-white border border-border-light rounded-md py-1 px-3 text-[10px] text-text-muted flex items-center gap-2 w-48">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="truncate">Active node connection: Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent text-[9px] font-bold">
                  SA
                </div>
              </div>
            </div>

            {/* Mock Workspace Body Container */}
            <div className="flex flex-1 overflow-hidden">
              
              {/* Dark Tech Sidebar for aesthetic contrast */}
              <div className="w-1/4 bg-slate-900 border-r border-slate-800 p-3.5 flex flex-col gap-5 select-none shrink-0">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                  LK Portal
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Overview', icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', active: true },
                    { label: 'Cloud VMs', icon: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a3.75 3.75 0 01.75-2.243m18.75 2.243a3.75 3.75 0 00-.75-2.243M5.25 5.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3', active: false },
                    { label: 'Helpdesk', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', active: false },
                    { label: 'Workflows', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', active: false }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all ${
                        item.active 
                          ? 'bg-accent/15 text-white border-l-2 border-accent font-semibold' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-[10px] truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-bg-light p-4 overflow-y-auto flex flex-col gap-4 select-none">
                
                {/* Dashboard Title & Tag */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold text-text-dark">Node Control Panel</h3>
                  <span className="bg-accent/10 text-accent font-bold px-2 py-0.5 rounded text-[8px] uppercase tracking-wide">
                    Live Nodes
                  </span>
                </div>

                {/* Grid Widgets Container */}
                <div className="grid grid-cols-2 gap-3.5">
                  
                  {/* Card 1: Server Monitors */}
                  <div className="bg-white border border-border-light rounded-xl p-3 shadow-2xs flex flex-col gap-2.5">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                      Active VMs
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[9px] font-medium text-text-secondary">
                        <span>jhb-dc-01</span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          <span className="text-emerald-500 font-semibold">{cpuVal}% CPU</span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-accent rounded-full h-1.5 transition-all duration-1000" style={{ width: `${cpuVal}%` }} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[9px] font-medium text-text-secondary">
                        <span>pta-srv-02</span>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-emerald-500 font-semibold">{ramVal}% RAM</span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className="bg-accent-cyan rounded-full h-1.5 transition-all duration-1000" style={{ width: `${ramVal}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Helpdesk SLA SLA */}
                  <div className="bg-white border border-border-light rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block mb-2">
                        Helpdesk SLAs
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-[8px] font-black text-accent">
                          99%
                        </div>
                        <div className="text-[9px] leading-tight">
                          <div className="font-bold text-text-dark">Resolution target</div>
                          <div className="text-emerald-500 font-medium">99.4% SLA Active</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-border-light pt-2 mt-2 flex justify-between items-center text-[9px] text-text-secondary">
                      <span>Queue</span>
                      <span className="font-bold text-accent">{activeTickets} open tickets</span>
                    </div>
                  </div>

                </div>

                {/* Full Width Widget: Infrastructure Summary */}
                <div className="bg-white border border-border-light rounded-xl p-3 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21a3.745 3.745 0 01-3.068-.593 3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0110 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </span>
                    <div className="leading-tight">
                      <div className="text-[9px] font-bold text-text-dark">Cloud Network Integrity</div>
                      <div className="text-[8px] text-text-muted">Proactive Azure AZ-104 security active</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-500 bg-emerald-50 border border-emerald-100 rounded px-2 py-0.5">
                    100% SECURE
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Floating Neon AI Badge (Visually matches Atera AI elements) */}
          <div className="absolute -bottom-3 -right-3 sm:right-2 sm:-bottom-4 bg-white border border-accent rounded-2xl shadow-xl py-3 px-4 flex items-center gap-3 z-20 select-none animate-bounce duration-[2000ms] border-l-4 border-l-accent-cyan">
            <span className="w-8 h-8 rounded-xl bg-accent-cyan/15 flex items-center justify-center text-accent-cyan animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-10.5-15h10.5a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 14.25V8.25A2.25 2.25 0 015.25 6h10.5z" />
              </svg>
            </span>
            <div className="leading-tight pr-1">
              <div className="text-[9px] font-bold text-text-dark uppercase tracking-widest">
                AI Copilot Active
              </div>
              <div className="text-[8px] text-text-muted">
                14 active workflows operational
              </div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute -top-1 -right-1" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-1 -right-1" />
          </div>

        </div>

      </div>
    </section>
  );
}
