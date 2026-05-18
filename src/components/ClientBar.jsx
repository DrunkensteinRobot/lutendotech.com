import useScrollFade from '../hooks/useScrollFade';

export default function ClientBar() {
  const { ref, visible } = useScrollFade();

  const clients = [
    { name: "Khashane Attorneys", icon: "⚖️" },
    { name: "Siyaphambili Logistics", icon: "🚛" },
    { name: "Ekurhuleni Med", icon: "🏥" },
    { name: "Apex Retailers", icon: "🛒" }
  ];

  return (
    <section className="bg-bg-primary/50 py-12 border-b border-border-light relative z-20 overflow-hidden">
      <div 
        ref={ref}
        className={`w-full max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        
        {/* Rating/Trust Widget Header */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white border border-border-dark py-2 px-5 rounded-full shadow-2xs select-none">
          <div className="flex items-center gap-0.5 text-accent-cyan">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.622c-.22.85.704 1.522 1.4 1.085L10 15.547l4.156 2.586c.695.437 1.62-.235 1.4-1.085l-1.197-4.622 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-text-secondary text-center sm:text-left">
            Rated <span className="text-text-dark font-extrabold">4.9/5 stars</span> for IT Excellence — trusted by businesses across Gauteng
          </span>
        </div>

        {/* Client Pills Strip */}
        <div className="w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-2 select-none">
          {clients.map((client, i) => (
            <div 
              key={i}
              className="flex items-center gap-2.5 bg-white border border-border-light rounded-xl px-5 py-2.5 shadow-2xs hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-base">{client.icon}</span>
              <span className="text-xs sm:text-sm font-bold text-text-secondary">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
