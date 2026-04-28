export function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="text-xl font-bold text-blue-900">Expert Conseil</span>
          <p className="font-manrope text-sm text-slate-500 max-w-xs text-center md:text-left">
            L'excellence stratégique au service de vos ambitions les plus audacieuses.
          </p>
          <p className="font-manrope text-sm text-slate-500">© 2024 Expert Conseil. Tous droits réservés.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-manrope text-sm text-slate-500 hover:text-orange-500 transition-colors" href="#">Politique de Confidentialité</a>
          <a className="font-manrope text-sm text-slate-500 hover:text-orange-500 transition-colors" href="#">Conditions Générales</a>
          <a className="font-manrope text-sm text-slate-500 hover:text-orange-500 transition-colors" href="#">Contact</a>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-xl">person</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
