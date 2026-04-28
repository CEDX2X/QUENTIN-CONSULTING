
export function CaseStudies() {
  return (
    <div className="pt-32 pb-section-gap">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-16 mb-stack-lg">
        <div className="max-w-3xl">
          <span className="text-secondary font-label-sm uppercase tracking-widest mb-stack-sm block">Portfolio d'Excellence</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-stack-md">Études de Cas Stratégiques</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Découvrez comment nous aidons les leaders de l'industrie à transformer leurs défis complexes en avantages compétitifs mesurables.
          </p>
        </div>
      </header>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-stack-lg">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-2 rounded-full bg-primary text-white font-label-sm">Tout</button>
          <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-sm">Transformation Digitale</button>
          <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-sm">Finance & Audit</button>
          <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-sm">Stratégie RH</button>
          <button className="px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant font-label-sm">Logistique</button>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm shadow-primary/5 border border-slate-100 flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Project A"
                className="w-full h-full object-cover"
                data-alt="modern corporate office building with glass facade reflecting a clear blue sky, high-end professional atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUz2Ff21p0afgz5FVZyDsDzFmFewtaRyCC2cS7YIYglkARh5zcrrR55hRGA15Ha1P1jTH0L1DpDJ9h5Np9LtezkJb_-FLeXSQRnlUAYXRHFZw6XUjgKwQJfnbH69Ia-zrdwLIw_BbrYnxUNfD2HClh2VE-_dkfd2kmqVDVsEekVs9UI1e1mbFy5RP792iSRNgy9JQ1n5122CBqnb1MO6S1EQ6dbYpH-LhH-HGkmbG8gHuZ1CKAPRXArz0TiJciu38N9Mzbk2oVQKQ"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-semibold">Finance</span>
              </div>
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Optimisation de Flux Bancaires</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                Restructuration complète des processus de trésorerie pour un groupe international du CAC 40.
              </p>
              <div className="pt-stack-md border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-bold text-2xl">+45%</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline">ROI Annuel</span>
                </div>
                <a className="text-primary flex items-center gap-1 font-semibold group hover:gap-2 transition-all" href="#">
                  Voir plus
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          {/* Card 2 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm shadow-primary/5 border border-slate-100 flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Project B"
                className="w-full h-full object-cover"
                data-alt="sleek professional data center with glowing blue server racks, symbolizing technological precision and digital transformation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCyuUmQsgSi60Jl4LQDpJoSgXyiY9FIeV42HsKPYMb4wIBYRXD99SfFGKEoCQqnMpyy8iKs0PwBsnKSKAK-gMqxG_cDvwgrqmpKaBud8VKLbdm1nZfouXbwHq5J2cyKqieNVmqucZmaxXyjhHiEpbnFzxMemqr8a9G4ZzT7NblEKKYV1iPN3clex2KtvA-5uABTUTSvdAYlxjydVS0WUahVkWax7BeW7SRAtRnXGovi4gI2SofmEc5oxhkqF2IZPS9NilcuS_JcrU"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-semibold">Digital</span>
              </div>
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Migration Cloud & IA</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                Déploiement d'une architecture cloud hybride et intégration de modèles prédictifs pour la maintenance.
              </p>
              <div className="pt-stack-md border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-bold text-2xl">-30%</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline">Coûts Opé</span>
                </div>
                <a className="text-primary flex items-center gap-1 font-semibold group hover:gap-2 transition-all" href="#">
                  Voir plus
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          {/* Card 3 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm shadow-primary/5 border border-slate-100 flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Project C"
                className="w-full h-full object-cover"
                data-alt="team of diverse professionals in a bright meeting room discussing over a large tablet, collaborative high-stakes environment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsABHoJqPBSdnkeHh0IWXXofOCOcdh-lTrnLXdW-gHMc9lv-bk3sA8l6oNF1J3Owe0LdcVeyqk4RmDwItMvsUCLV5hyS25D7Ft6LMRC23J9ba1bQH8yAbRiQg4_8Wpvn_2LDuWfxOMqRUs_De4W5tHhwt2ALAcggEy52hUpW6dSrq_m9-MUfnxVU6123wAv1lzZCcLGTDnpTb8GjMDz7FGMA7geTo7GlhNvVO5zgK4JNZKIZ_Yp9j1paov8YdwyMyeyERN9kebLjo"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-semibold">RH</span>
              </div>
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Refonte de Culture d'Entreprise</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                Programme de conduite du changement pour 5 000 collaborateurs suite à une fusion majeure.
              </p>
              <div className="pt-stack-md border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-bold text-2xl">+85%</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline">Engagement</span>
                </div>
                <a className="text-primary flex items-center gap-1 font-semibold group hover:gap-2 transition-all" href="#">
                  Voir plus
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          {/* Card 4 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm shadow-primary/5 border border-slate-100 flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Project D"
                className="w-full h-full object-cover"
                data-alt="automated logistics warehouse with robotic arms and conveyor belts in a high-tech clean environment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuNqjywzo5HRvVjQMMsSQFSrbGxmzDOVCjNPlA3UUIWPiWYzAj9uz0IZVRL_ct46-sZghIqebN5owsox5SNHXa1Xiv7TQD52TsvpMV0kjZOsZbzu47Ln0CApDFloWfJzqxev5zQNYS9sTP27bFnNyVcZtHweUn8HBcRdHIGtVK0LwFjygUIAhgI1kJo9LnAIVRmYwkiqdWNW_SnOXBNqKUwjeT93J1DTCGDp8rOdrQU941bOnp3pqPldmT6OOeU3Wb8uUUVmTh0bk"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-semibold">Logistique</span>
              </div>
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Optimisation Supply Chain</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                Réduction des délais de livraison par l'automatisation intelligente des centres de tri.
              </p>
              <div className="pt-stack-md border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-bold text-2xl">24h</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline">Délai Gagné</span>
                </div>
                <a className="text-primary flex items-center gap-1 font-semibold group hover:gap-2 transition-all" href="#">
                  Voir plus
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          {/* Card 5 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm shadow-primary/5 border border-slate-100 flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Project E"
                className="w-full h-full object-cover"
                data-alt="close-up of a high-tech watch or precision instrument, symbolizing detail-oriented strategy and timing"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmHYCjNJIXed4qIWPuj91UpQBtJEz9q7L3a_Xxd_9SCfArJ5Cp7yAuIXqJdxisssEb2RgMoMmfhbSZp048liwdyQ7fFVBZ3vEzvzAoC0KOj47kIkbMMxGmOZnJuU1Y62Kp687OD7t-SO4uhzdL-lLYFNhRsaNdjzrunq4ax7O7cYGmgiFPeeTGuTNlWJztQIC3Rkk1wNispl8c78c6NnnD6X4G8cY2XDkOcqUbH7y8_4jRICY_ThsWtOA4x2h76Sp_zu-oqXfniVA"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-semibold">Stratégie</span>
              </div>
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Lancement Marché US</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                Accompagnement stratégique pour l'implantation d'une fintech européenne sur le sol américain.
              </p>
              <div className="pt-stack-md border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-bold text-2xl">$12M</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline">Levée de Fonds</span>
                </div>
                <a className="text-primary flex items-center gap-1 font-semibold group hover:gap-2 transition-all" href="#">
                  Voir plus
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          {/* Card 6 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm shadow-primary/5 border border-slate-100 flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Project F"
                className="w-full h-full object-cover"
                data-alt="abstract architectural geometry with light and shadow, clean white surfaces and sharp angles representing structure"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsk2PiLQYu8WfDQ10hXszMVKeNClD6Yj7gL3aWMfacLfgpQDQxaYmtEoDyV8BwKHn0F5nzlDtLp0b_L37p4cFJSwRvMQS8Pm0NIHC2BOkuaTEmctIvwnQAXScpvulV39W7gcC6x_Pvj2c6E8UoHIeQnaqgyNP7tg5COceGvyfJWzPZQoz_nsionxm9zt6IWWj35a6y_FtVUELOP796tt3W_VYRy1NJfhnglRBQqAQgjUERXm8NcTpJn8m30JENSwSO5QxzOhfTjw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-semibold">Audit</span>
              </div>
            </div>
            <div className="p-stack-lg flex flex-col flex-grow">
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Audit de Conformité ESG</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                Mise en conformité des standards extra-financiers pour un leader du secteur luxe.
              </p>
              <div className="pt-stack-md border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-bold text-2xl">AAA</span>
                  <span className="text-[10px] uppercase tracking-wider text-outline">Rating ESG</span>
                </div>
                <a className="text-primary flex items-center gap-1 font-semibold group hover:gap-2 transition-all" href="#">
                  Voir plus
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-section-gap">
        <div className="bg-primary rounded-xl p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-white mb-stack-md">Prêt à Transformer Votre Organisation ?</h2>
            <p className="font-body-lg text-body-lg text-white/80 mb-stack-lg">
              Nos experts sont prêts à analyser vos besoins et à construire une roadmap sur-mesure pour votre succès.
            </p>
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 active:scale-95 transition-all">
              Démarrer une collaboration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
