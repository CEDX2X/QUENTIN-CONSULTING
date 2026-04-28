import { Link, useLocation } from "react-router-dom";

export function TopNavBar() {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "font-manrope text-sm font-semibold tracking-wide text-orange-600 border-b-2 border-orange-600 pb-1 hover:text-blue-800 transition-all duration-300";
    }
    return "font-manrope text-sm font-semibold tracking-wide text-slate-600 hover:text-blue-800 transition-all duration-300";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm shadow-blue-900/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-16 py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            alt="Expert Conseil Logo"
            className="h-8 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxtG8Qd4R678qYI8fSxgtDQZ4oFV_HZUfwTNN_vu_t2w50PnZ_-qc8aBZoqOj4Cjo3l6YmVk5Pnas_BuSE0k6DuGoLWhGi8s6zgP4DBF_QhIcoUXnw677NidrDRuWSsJU8R500GlRdgWVY-tvZlGShr7aOpulE96C9NQbFxUqbdcly38iaIpmZsvEyTXrQnZAictfyF4WHOwBfMm4wKaRW623kNGWuSy48hpBsibiz6SKfFNkUj_tcjpfJSjBjd7lZ_leiwjJ80tI"
          />
          <span className="text-2xl font-extrabold text-blue-900 tracking-tighter">Consultant Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link className={getLinkClasses("/")} to="/">Accueil</Link>
          <Link className={getLinkClasses("/services")} to="/services">Services</Link>
          <Link className={getLinkClasses("/case-studies")} to="/case-studies">Études de Cas</Link>
          <Link className={getLinkClasses("/contact")} to="/contact">Contact</Link>
        </div>
        <button className="active:scale-95 transition-transform bg-primary px-6 py-2.5 rounded-lg text-white font-manrope text-sm font-semibold tracking-wide hover:opacity-90">
          Consultation Gratuite
        </button>
      </div>
    </nav>
  );
}
