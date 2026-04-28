
export function Services() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-12 md:mb-20">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-4xl md:text-display-lg text-primary mb-6">
            Expertise Stratégique pour <span className="text-secondary">Croissance Durable.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            Accompagnement sur mesure alliant rigueur organisationnelle et performance numérique pour transformer votre vision en résultats tangibles.
          </p>
        </div>
      </section>

      {/* Services Section: Management Business */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-section-gap">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                corporate_fare
              </span>
              <span className="font-label-sm text-secondary uppercase tracking-widest">Pôle Excellence Opérationnelle</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-8">Management Business</h2>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary-container text-3xl">strategy</span>
                <div>
                  <h3 className="font-headline-md text-body-lg font-bold mb-1">Stratégie d'Entreprise</h3>
                  <p className="text-on-surface-variant">Définition de la vision long-terme et identification des leviers de croissance prioritaires.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary-container text-3xl">settings_account_box</span>
                <div>
                  <h3 className="font-headline-md text-body-lg font-bold mb-1">Optimisation des Processus</h3>
                  <p className="text-on-surface-variant">Audit et restructuration des flux de travail pour maximiser l'efficacité opérationnelle.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-primary-container text-3xl">groups</span>
                <div>
                  <h3 className="font-headline-md text-body-lg font-bold mb-1">Gouvernance & Leadership</h3>
                  <p className="text-on-surface-variant">Accompagnement des dirigeants dans la prise de décision et le management d'équipes.</p>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold group">
              Explorer le conseil business
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              alt="Management"
              className="w-full h-[300px] md:h-[500px] object-cover"
              data-alt="professional corporate boardroom with high-end furniture, soft morning light hitting architectural details, professional and calm atmosphere"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-1j-lCMQhHDiVy-dTMU5xgXZOUDOWoK3JAeWS5Qi1wrBxrLZM8TnwXaxxy457dWIu8K8bb1mlGEJwcSGavULYvqQWq3Uwj6yLNz9GmDDEi2SL1R-XkRAhyAjRb4lFuDRM5_KyEXWNTKLJ29bqXyyriGQv80BbyO2bar3fsQkRxWOEMMVwNS03mvnHFIMewZbr_D9JjUwf1kmxgkeeI1QPG_63HeeL7uJ4xZuks5RfRxC3StF2YEfmSaLLBCwB68wGLFcKXPv7NWc"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl border border-white/20">
              <p className="font-headline-md text-primary font-bold">"La clarté structurelle est le fondement de toute réussite commerciale."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: Marketing Digital */}
      <section className="bg-surface-container-low py-section-gap mb-section-gap">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 relative">
              <img
                alt="Digital Marketing"
                className="w-full h-[300px] md:h-[500px] object-cover"
                data-alt="modern tech workspace with high-end displays showing analytics and data visualizations, vibrant blue and orange UI elements, futuristic vibe"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtomP4MAKxAox0IL1jDkjsQiH1V7Y-E42-DP4biYpcBmiXHMi0HvhO3rzSUD0CkYwArSWBis490gEAVdy5tXpdUnB6yfYSE9kx8Wz4DpwwhfLGzBT-Aj2WpKdAnXrXL-yJ3Z0LbLKTcPoYaONiabVFpqrHSpGwgylvhxBfVtLwdkrlea0KBexTp7ucxriivm3Xuo4xALc4ZnSHS5Z8clTNMA1JJgiTpkkqlHFlTWwx0BoX4Eeqi6Is-4hJV56zrvae_OaqAEUC4Zk"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-sm">
                Performance Digitale
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  ads_click
                </span>
                <span className="font-label-sm text-secondary uppercase tracking-widest">Pôle Acquisition & Visibilité</span>
              </div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-8">Marketing Digital</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-4">search_insights</span>
                  <h3 className="font-bold mb-2">SEO & SEA</h3>
                  <p className="text-sm text-on-surface-variant">Positionnement stratégique sur les moteurs de recherche pour capturer l'intention d'achat.</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-4">share_reviews</span>
                  <h3 className="font-bold mb-2">Social Strategy</h3>
                  <p className="text-sm text-on-surface-variant">Engager votre audience là où elle se trouve avec une ligne éditoriale percutante.</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-4">monitoring</span>
                  <h3 className="font-bold mb-2">Data Analytics</h3>
                  <p className="text-sm text-on-surface-variant">Analyse rigoureuse du tunnel de conversion pour optimiser chaque euro investi.</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-4">contact_mail</span>
                  <h3 className="font-bold mb-2">CRM & Automation</h3>
                  <p className="text-sm text-on-surface-variant">Fidélisation automatisée pour transformer vos prospects en ambassadeurs.</p>
                </div>
              </div>
              <button className="w-full sm:w-auto text-center bg-primary text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors">
                Booster ma présence en ligne
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-section-gap">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-3xl md:text-headline-lg text-primary mb-4">Notre Méthodologie</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Un processus rigoureux en 4 étapes pour garantir l'alignement stratégique et le succès opérationnel de chaque projet.
          </p>
        </div>
        <div className="relative">
          {/* Decorative Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="bg-background flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xl mb-6 shadow-xl border-4 border-background">01</div>
              <h4 className="font-bold text-lg mb-3">Diagnostic</h4>
              <p className="text-sm text-on-surface-variant">Audit complet de l'existant, analyse de marché et identification des points de friction.</p>
            </div>
            <div className="bg-background flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-xl mb-6 shadow-xl border-4 border-background">02</div>
              <h4 className="font-bold text-lg mb-3">Conception</h4>
              <p className="text-sm text-on-surface-variant">Élaboration d'une feuille de route personnalisée avec indicateurs de performance (KPIs).</p>
            </div>
            <div className="bg-background flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xl mb-6 shadow-xl border-4 border-background">03</div>
              <h4 className="font-bold text-lg mb-3">Exécution</h4>
              <p className="text-sm text-on-surface-variant">Mise en œuvre agile des solutions techniques et stratégiques par nos experts.</p>
            </div>
            <div className="bg-background flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-xl mb-6 shadow-xl border-4 border-background">04</div>
              <h4 className="font-bold text-lg mb-3">Optimisation</h4>
              <p className="text-sm text-on-surface-variant">Suivi continu, ajustements basés sur la donnée et transfert de compétences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-section-gap">
        <div className="bg-primary-container rounded-3xl p-8 md:p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <span className="material-symbols-outlined text-[300px] text-white">trending_up</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display-lg text-3xl md:text-headline-lg text-white mb-6">Prêt à franchir une nouvelle étape ?</h2>
            <p className="text-on-primary-container text-body-lg mb-10">
              Réservez un créneau de 30 minutes pour discuter de vos enjeux actuels. Sans engagement, juste de la valeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto text-center bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Prendre Rendez-vous
              </button>
              <button className="w-full sm:w-auto text-center border border-on-primary-container text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Voir nos études de cas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
