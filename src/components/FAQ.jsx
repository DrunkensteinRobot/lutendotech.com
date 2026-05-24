import useScrollFade from '../hooks/useScrollFade';

export default function FAQ() {
  const { ref, visible } = useScrollFade();

  const faqs = [
    {
      question: 'How fast is your support response?',
      answer: 'Response time: 25 minutes for critical incidents and under 60 minutes for standard issues. We keep response time clear in every monthly report.'
    },
    {
      question: 'Does pricing stay the same each month?',
      answer: 'Yes. You get a fixed monthly rate from R5,999. There are no surprise hourly charges on top of the retainer.'
    },
    {
      question: 'Can you support our existing Microsoft 365 setup?',
      answer: 'Yes. We fix common M365 issues, migrate users, and make email, Teams, and file sharing work for your team.'
    },
    {
      question: 'Do you provide local support in South Africa?',
      answer: 'Yes. We serve South African businesses with a local operations team and fast response times in the same time zone. Remote clients with similar needs can also get managed IT operations online.'
    },
    {
      question: 'What happens after I submit a request?',
      answer: 'You get a free IT assessment within two hours and a clear quote. We then move to action on the most urgent issue first.'
    }
  ];

  return (
    <section id="faq" className="bg-bg-secondary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 select-none">
          <span className="section-label mb-2 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight">
            Common questions from growing businesses.
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease-out'
          }}
        >
          {faqs.map((item, i) => (
            <div key={i} className="bg-white border border-border-dark rounded-3xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-text-dark mb-3">{item.question}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
