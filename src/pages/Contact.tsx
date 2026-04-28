
export function Contact() {
  return (
    <div className="pt-32 pb-section-gap px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Branding & Info */}
        <div className="lg:col-span-5 space-y-stack-lg">
          <div className="space-y-stack-md">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Travaillons Ensemble</span>
            <h1 className="font-display-lg text-display-lg text-primary">Let's Design Your Path to Scale</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Our strategic consulting services empower leaders to transform complex challenges into sustainable growth trajectories.
            </p>
          </div>
          {/* Contact Info */}
          <div className="space-y-stack-md pt-stack-md">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm shadow-primary/5">
                <span className="material-symbols-outlined" data-icon="mail">mail</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Email</p>
                <p className="font-body-md text-body-md font-semibold text-primary">contact@expertconseil.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm shadow-primary/5">
                <span className="material-symbols-outlined" data-icon="call">call</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Téléphone</p>
                <p className="font-body-md text-body-md font-semibold text-primary">+33 (0)1 45 67 89 00</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm shadow-primary/5">
                <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Siège Social</p>
                <p className="font-body-md text-body-md font-semibold text-primary">24 Avenue de la Défense, 92800 Paris</p>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className="pt-stack-md">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">Suivez-nous</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:border-secondary transition-all" href="#">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:border-secondary transition-all" href="#">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>link</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center hover:bg-secondary-fixed hover:border-secondary transition-all" href="#">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>group</span>
              </a>
            </div>
          </div>
          {/* Small Map Visual */}
          <div className="pt-stack-lg">
            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-surface-container-highest shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-alt="Clean minimal map of Paris business district with soft grey and blue tones"
                data-location="Paris"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUXII7KmmFoff_WR8e6_7j0FimqOM7KSoyL2xmqO-QOwPSCpvjW5P4YXLWL78DiZv6BYJ8ORfnlFgueRGJWgmFT7cQPnOGFmzdxo67LWNk7Dta4tKXu_vIw5I1eyRDqu5lnGMx12uKPi7dNI4z3VoC1ylhEJBJ1CgANyGW2HAeWCJAfrlmn4XA02NEeeN8ENEBCLAzsVpz23nDoqFBHnEYvR_zsBjEpvig2Gle1IEbWt91q8FpLvfRX_FGkgzb6M411aVp7MTLpVU')" }}
              ></div>
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary/20 blur-sm rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Project Brief Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-12 rounded-[24px] shadow-[0_32px_64px_-16px_rgba(0,32,95,0.08)] border border-slate-50 relative overflow-hidden">
            {/* Decorative subtle gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 space-y-stack-lg">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Project Brief</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Parlez-nous de vos objectifs. Nous reviendrons vers vous sous 24h.</p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-primary">Nom Complet</label>
                    <input
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-3 font-body-md focus:bg-white focus:border-primary focus:ring-0 transition-all placeholder:text-outline-variant"
                      placeholder="Jean Dupont"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-primary">Email Professionnel</label>
                    <input
                      className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-3 font-body-md focus:bg-white focus:border-primary focus:ring-0 transition-all placeholder:text-outline-variant"
                      placeholder="jean@entreprise.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-primary">Service Souhaité</label>
                  <select className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-3 font-body-md focus:bg-white focus:border-primary focus:ring-0 transition-all text-on-surface-variant">
                    <option>Audit Stratégique</option>
                    <option>Optimisation des Processus</option>
                    <option>Transformation Digitale</option>
                    <option>Coaching Exécutif</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-primary">Votre Message</label>
                  <textarea
                    className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-3 font-body-md focus:bg-white focus:border-primary focus:ring-0 transition-all placeholder:text-outline-variant resize-none"
                    placeholder="Décrivez votre projet ou vos défis actuels..."
                    rows={5}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full bg-primary text-white font-manrope font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-primary-container hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98]"
                    type="submit"
                  >
                    <span>Envoyer le Brief</span>
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                  <p className="text-center mt-6 font-label-sm text-label-sm text-on-surface-variant opacity-70">
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* Trust Badges */}
          <div className="mt-stack-lg grid grid-cols-3 gap-8 px-8">
            <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
              <img
                alt="Airbus logo"
                className="h-6 grayscale object-contain"
                data-alt="Professional gray scale logo of a major aerospace company on a transparent background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeLcMpaXSy7TK1HWBXrqhcwmF1oGrTU53Zp2Q5Qtj4xyRhNHxYRRONgpe04TglQ75TZNzn83cwwCjPcB21ZDMtpuRE0Tap4KAClavTTJGFqaSy_hx1LBtebR0w4CUwsHFWVn-IR1Lqn9sui7t6n_-dt53liRnCxUMyx14jgDnMBcUExuncl9CHL9_jhewxcuDExV8Y4wVwtuQP70cfCegpKcliBc3ABtokweEhcgPH5tP06wKFjUsrE7gTK4MIN4mHlOMUKtRBm5M"
              />
            </div>
            <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
              <img
                alt="LVMH logo"
                className="h-6 grayscale object-contain"
                data-alt="Professional gray scale logo of a luxury goods conglomerate on a transparent background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5eyrWE-ag7UTM_gzllIeZNOs9zC4WvPVj6UsUpI786V40L4ykPQej67LGM4BrXMyMsQhUGuTxwRnueFssQmLeQSpdoVbx0ob2QB9rvJYGZpAqZc_YHR6ZAwIMYb6mES9bkZEYDbk7KWgN5w_7nH31RcGU-Bvs0UKtdmptM347Oo-AB95iFnnbRy_TaaWFz7MKs3cu0MQy84XE0CeW33CR6pB2EuBaqDxJx1gvXAJpBnx8vvStL3bAvn79-7vx6roWyvBtHtF1uz4"
              />
            </div>
            <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
              <img
                alt="Sanofi logo"
                className="h-6 grayscale object-contain"
                data-alt="Professional gray scale logo of a healthcare company on a transparent background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwAkmzHPYyGxC5BbBWjgMWJ2HdHOJ59stVSNCwI5vb7eXYEa9nxCCqujgi-TSl8e3Xm4V_3_voBXW0s4HF4CEPSsXHvE9elLZ3wHdJ7kJQU-jZQxkJ9fJy_qStXvg5hFiFvUCmfwNhFYJc42zkQKaftibfGAjlQW71ytNwxx_7xAhtLdRwXU2LEHvXkmCpUh2kLF4hQUE3BSTL5A9Q1FHpDNf5k0ypw-5kcZTpRVCkxdZ9-s5wvYlHdD3L2ciyJOY2oXaZqgYO9lc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
