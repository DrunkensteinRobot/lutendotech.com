import useScrollFade from '../hooks/useScrollFade';

export default function Testimonials() {
  const { ref, visible } = useScrollFade();

  const quotes = [
    {
      name: 'Operations Director',
      role: 'Operations Director',
      company: 'Luhuhi Trading',
      industry: 'Retail',
      text: 'They reduced our IT costs by 40% in six months. Their response time is unmatched.'
    },
    {
      name: 'Finance Manager',
      role: 'Finance Manager',
      company: 'Lawless Clothing',
      industry: 'Retail',
      text: 'The team fixed our support queue and stabilized our systems so we can sell without interruptions.'
    },
    {
      name: 'IT Manager',
      role: 'IT Manager',
      company: 'Pmmt Solutions',
      industry: 'Professional Services',
      text: 'They made our Microsoft 365 environment reliable and gave us a clear support process that works.'
    },
    {
      name: 'Practice Manager',
      role: 'Practice Manager',
      company: 'Khashane Attorneys',
      industry: 'Legal Services',
      text: 'Our backups and security are finally trustworthy, and the operations team answers critical issues quickly.'
    }
  ];

  return (
    <section id="testimonials" className="bg-bg-primary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 select-none">
          <span className="section-label mb-2 block">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            15 businesses rely on us for managed IT and smarter operations.
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease-out'
          }}
        >
          {quotes.map((quote, i) => (
            <div key={i} className="bg-white border border-border-dark rounded-3xl p-6 shadow-sm">
              <p className="text-text-secondary leading-relaxed mb-6">“{quote.text}”</p>
              <div className="text-sm font-bold text-text-dark">{quote.name}</div>
              <div className="text-xs text-text-muted">{quote.role}, {quote.company}</div>
              <div className="text-xs text-text-secondary uppercase tracking-[0.15em] mt-2">{quote.industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
