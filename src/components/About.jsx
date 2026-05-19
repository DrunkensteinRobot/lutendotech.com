import useScrollFade from '../hooks/useScrollFade';

export default function About() {
  const { ref, visible } = useScrollFade();

  return (
    <section id="about" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="section-label mb-2 block">About LK Digital Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight mb-6">
              We keep IT stable and operations efficient.
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-5">
              We manage your IT foundation while designing the workflows and automation that improve how your team works. From cloud infrastructure to ITSM implementation, we fix slow processes alongside system reliability.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              In eight years, 15 businesses have relied on us for managed support, process optimization, and infrastructure design. You get honest reporting, fast response times, and a fixed monthly rate.
            </p>
          </div>

          <div className="bg-white border border-border-dark rounded-3xl p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl bg-bg-light p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">Local focus</p>
                <p className="text-lg font-bold text-text-dark">South African businesses supported</p>
              </div>
              <div className="rounded-2xl bg-bg-light p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">Response time</p>
                <p className="text-lg font-bold text-text-dark">25 minutes for critical issues</p>
              </div>
              <div className="rounded-2xl bg-bg-light p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">Cost savings</p>
                <p className="text-lg font-bold text-text-dark">R15,000+ saved monthly</p>
              </div>
              <div className="rounded-2xl bg-bg-light p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">Monthly rate</p>
                <p className="text-lg font-bold text-text-dark">From R5,999/month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-text-secondary">
          Want the free IT health checklist? Book your assessment and we will send it with the first review.
        </div>
      </div>
    </section>
  );
}
