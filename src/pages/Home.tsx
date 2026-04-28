
export function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="md:col-span-7 flex flex-col gap-stack-lg">
            <span className="inline-flex items-center gap-2 text-secondary font-label-sm uppercase">
              <span className="w-12 h-[1px] bg-secondary"></span>
              Expertise Digitale & Stratégie
            </span>
            <h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-[1.05]">
              Accélérez votre <span className="text-secondary">Croissance Business</span> avec une Stratégie Basée sur la Donnée.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              J'accompagne les entreprises ambitieuses dans leur transformation digitale pour maximiser leur impact et leur rentabilité sur le long terme.
            </p>
            <div className="flex flex-wrap gap-stack-md mt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-sm hover:opacity-90 active:scale-95 transition-all premium-shadow">
                Démarrer un Projet
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-label-sm hover:bg-primary/5 active:scale-95 transition-all">
                Voir mes résultats
              </button>
            </div>
            <div className="flex items-center gap-8 mt-8 grayscale opacity-60">
              <span className="text-label-sm font-label-sm">CONFIANCE DE :</span>
              <div className="flex gap-6 items-center">
                <span className="font-bold text-xl font-headline-md tracking-tighter italic">TECH-CORP</span>
                <span className="font-bold text-xl font-headline-md tracking-tighter italic">LUMINA</span>
                <span className="font-bold text-xl font-headline-md tracking-tighter italic">AETHER</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden premium-shadow transform rotate-1">
              <img
                className="w-full h-full object-cover"
                data-alt="Modern high-end office interior with minimalist wooden furniture and large windows during soft morning daylight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaonj6c-y8mT6_JTnAjuDDEoVgp17_L9-uF3AOSqHy5gnz2PcMJieYg-3TrgMsYTmj5_P4D8rmWJLBZ-dfxn60oYaDK1cQkqO7925HS5V_vR4iwpsw73CiT9GP-QtdazbgAz92iO7OsClXfmyefQ9YR355yHbaT_zFMSqMMjIXfYx2Vxh9CkYb2LT_qJVEVQ363YFaQL-4zuLyq1qfvYDRMS_j5SZ04ykQlPXCapEhbrgI0Pi_tt2WZ9-MjeyKNQaJJSYwGIrqzMU"
                alt="Modern high-end office interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-12 bg-white p-6 rounded-xl premium-shadow border border-surface-container-high hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    trending_up
                  </span>
                </div>
                <div>
                  <p className="text-display-lg text-secondary leading-none">+124%</p>
                  <p className="text-label-sm text-on-surface-variant">ROI Moyen Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background abstraction */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 skew-x-12 transform translate-x-24"></div>
      </section>

      {/* Services Section (Bento Style) */}
      <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Une expertise 360° pour votre succès</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl">
              Solutions stratégiques sur mesure conçues pour transformer vos défis numériques en avantages compétitifs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {/* Bento Main */}
            <div className="md:col-span-2 bg-white p-10 rounded-xl premium-shadow flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                  insights
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Stratégie de Croissance & Data</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Analyse approfondie de votre marché et mise en place de KPIs précis pour piloter votre expansion de manière prédictive et rentable.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-4 text-label-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span> Audit de performance
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span> Modélisation de revenus
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span> Analyse concurrentielle
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span> Reporting automatisé
                </li>
              </ul>
            </div>
            {/* Bento Side 1 */}
            <div className="bg-primary text-on-primary p-10 rounded-xl premium-shadow group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary-fixed-dim mb-6">ads_click</span>
                <h3 className="font-headline-md text-headline-md mb-4">Marketing Digital</h3>
                <p className="text-on-primary-container opacity-90 font-body-md">
                  Acquisition multi-canale optimisée pour le ROI via Google Ads, Meta et SEO technique.
                </p>
              </div>
              <a className="mt-8 flex items-center gap-2 font-label-sm text-secondary-fixed-dim hover:gap-4 transition-all" href="#">
                Découvrir <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            {/* Bento Side 2 */}
            <div className="bg-white p-10 rounded-xl premium-shadow group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-secondary/20">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">devices</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">UX Strategy</h3>
              <p className="font-body-md text-on-surface-variant">
                Optimisation des taux de conversion par l'amélioration de l'expérience utilisateur sur vos plateformes.
              </p>
            </div>
            {/* Bento Bottom */}
            <div className="md:col-span-2 bg-white p-10 rounded-xl premium-shadow flex flex-col md:flex-row gap-8 items-center border border-transparent hover:border-secondary/20 transition-all">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">campaign</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Brand Consulting</h3>
                <p className="font-body-md text-on-surface-variant">
                  Définition de votre ADN de marque et positionnement premium pour dominer votre niche de marché.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-surface-container-highest rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Minimalist abstract digital graphic showing growth lines and dots in deep blue and vibrant orange tones"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1_QYdXCQCjXfHRtCLIie5zdbF_NN-UgRO8xH1OBv-66qT2M9BEV7DN9Pz_OsVhjSgRswruN2QITJox50HqxpgCXkVAY552J7755NE_J7Vq6UypEIdXr7_mpflVIv20PU2JaZl4s7owW1t_1LcOdctk-Rha54LvB-2jZYntZFZMV3mOnlkX_6F4QIJA5my1VW1_DfiWLG7L2KGn8oEZmlTAVsybPNM507nJy9VP9ye10KGUvqpOAIKDJ2wjolHsrOnP8nuoK1TOxc"
                  alt="Minimalist abstract digital graphic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-section-gap bg-white px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden premium-shadow bg-surface-container">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-alt="Professional portrait of a male business consultant in a dark navy suit with soft cinematic lighting against a grey wall"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbbDnNdXYWa1UsKuPKiQYPGp1zloDQYgnpOa70nxjdGGKgEcTK0RUz5_BJ0ZONAKgw29uPWMORg_HN8KiCm1IZwv4midEoWXCOcIuvCb_qqa4_bnRMHEyG5Lq1nPEisLrUBl2qcZBa8hR5vqQV2HUW3E09JGnXAtz8BmsW5uFjD1CFuLuAKiKJMZiSM1g0r6ihljCnORNB2Y23GtzVuQKVMqWPYbtxgjBpZUxHG1s-go1C31nUp2gx2I9McIxsvdn7NdF7R4Rfszg"
                alt="Professional portrait"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-8 rounded-xl shadow-2xl">
              <p className="text-display-lg leading-none">12+</p>
              <p className="text-label-sm font-label-sm opacity-70">Années d'expérience</p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-stack-md">
            <span className="text-secondary font-label-sm uppercase tracking-widest">L'architecte de votre succès</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Plus qu'un consultant, un partenaire stratégique.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Depuis plus de 10 ans, j'aide les dirigeants à naviguer dans la complexité du paysage numérique. Mon approche combine rigueur analytique et créativité marketing pour générer des résultats tangibles.
            </p>
            <div className="grid grid-cols-2 gap-stack-lg mt-4">
              <div>
                <p className="text-secondary font-bold text-headline-md mb-1">50M€+</p>
                <p className="text-label-sm text-on-surface-variant">Budget Ad géré</p>
              </div>
              <div>
                <p className="text-secondary font-bold text-headline-md mb-1">200+</p>
                <p className="text-label-sm text-on-surface-variant">Projets livrés</p>
              </div>
            </div>
            <div className="mt-8">
              <img
                className="h-12 w-auto object-contain opacity-40 grayscale"
                data-alt="Scrawled signature on clean white background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj13VPMo4IkcJUsG1K5ehMCaGUtNMaMQ7IQ_PA-fn8WLiL9Sv5aRZwvo1p5Fkvu1jYc7343uFTxOMAMlSZl2g3xE0AFr9y99-d5jf7z39YJbMi2VMWYFsYHDxIrIdQxZ_l_nrTux3yfnZBfeOBLdx5WyK-0jcQ93lmdE7O3Z3Y10yID7cDxx7TIU0wNnYnGGEDdUd-ad-tMr0epgIwO8LhN7YU6H9soHGfoe4eVk9peS0XQxCNaXeCvs-VZ-9JBuFy96J4PvB5VZ4"
                alt="Signature"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section (Premium Dark) */}
      <section className="py-section-gap bg-primary text-on-primary px-margin-mobile md:px-margin-desktop relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            <div className="border-r border-white/20"></div>
            <div className="border-r border-white/20"></div>
            <div className="border-r border-white/20"></div>
            <div className="border-r border-white/20"></div>
            <div className="border-r border-white/20"></div>
            <div></div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6">format_quote</span>
            <h2 className="font-display-lg text-headline-lg text-on-primary">Ils ont transformé leur vision en réalité</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-sm">
              <p className="font-body-lg italic mb-8">
                "L'impact sur notre chiffre d'affaires a été immédiat. En seulement 6 mois, nous avons doublé notre acquisition client tout en réduisant nos coûts publicitaires de 30%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Headshot of a middle-aged male executive smiling softly with city background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoQ7FlrJIrJQDO9y9lYN8QzyLO4d5NzVbX2jpo8ZPRDcJN4MgG138b-Wjk2pdKxJRQKqjho3gCMfLFShbN2hHR8KV-FiX2xJnzp97hLDgNZu6at3WfZ4NKrFgD6Q70r-YWjE3SlMyqTQ8GowgvUf3RPiqEv4EpQiLB_FNffHAR1u9xMYyVgIZ-tvTvsXn-t4K6P-dJjjOTHtgX1QXs97haLnfK7x31TYAX2AlqblOHvqwIZK2YgeKqANb0i_xkrIxjJur62MIZFOs"
                    alt="Jean-Marc Leroy"
                  />
                </div>
                <div>
                  <p className="font-headline-md text-body-md font-bold">Jean-Marc Leroy</p>
                  <p className="text-label-sm opacity-60">CEO, TechLumina Labs</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-sm">
              <p className="font-body-lg italic mb-8">
                "Un sens aigu de la stratégie et une capacité rare à expliquer des concepts complexes de manière simple. Un atout majeur pour notre comité de direction."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a professional young woman in a blazer with blurred office background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD02yU8GcaJohFMd5n4wu2M_kO6vEZwDPx32XQ4FazDqiN1LGz1n8VBO0apAiuNOcKydf1YDppvFBvBQ4_tGm6vGPL_w_qZmpCb1x0bvKTqMWgh3JWyX8CC1GrOuIi1V1HOfiTFIKLh2jWXfsxvSG69Hn4Eugtj2UAGC_pDEgWOSw-vYGn0adNWBh1gE8hRFQ1hmg1djruzD7T0CpGOOC24kpZjmvGAbV1AjNzQVPjkjTSUQwfUHDooWM8TfgAzQcCqWVYwPZuti4"
                    alt="Sophie Vallet"
                  />
                </div>
                <div>
                  <p className="font-headline-md text-body-md font-bold">Sophie Vallet</p>
                  <p className="text-label-sm opacity-60">Directrice Marketing, Aether Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-background px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto bg-secondary-container p-12 md:p-20 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="font-display-lg text-display-lg text-on-secondary-container mb-6 relative z-10">Prêt à franchir un palier ?</h2>
          <p className="font-body-lg text-on-secondary-container/80 max-w-2xl mb-10 relative z-10">
            Réservez votre audit stratégique offert de 30 minutes. Sans engagement, juste de la valeur pure.
          </p>
          <div className="flex flex-col md:flex-row gap-4 relative z-10">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-label-sm hover:scale-105 active:scale-95 transition-all premium-shadow">
              Réserver mon audit offert
            </button>
            <button className="bg-transparent border border-on-secondary-container text-on-secondary-container px-10 py-5 rounded-lg font-label-sm hover:bg-white/10 transition-all">
              Me contacter par email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
