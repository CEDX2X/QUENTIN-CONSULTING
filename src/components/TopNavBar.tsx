import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function TopNavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "font-manrope text-sm font-semibold tracking-wide text-orange-600 border-b-2 border-orange-600 pb-1 hover:text-blue-800 transition-all duration-300";
    }
    return "font-manrope text-sm font-semibold tracking-wide text-slate-600 hover:text-blue-800 transition-all duration-300";
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "block font-manrope text-base font-bold text-orange-600 bg-orange-50 px-4 py-3 rounded-lg transition-colors";
    }
    return "block font-manrope text-base font-semibold text-slate-600 px-4 py-3 hover:bg-slate-50 rounded-lg transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm shadow-blue-900/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4 md:py-5">
        <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setIsMenuOpen(false)}>
          <img
            alt="Quentin Marketing Logo"
            className="h-7 md:h-8 w-auto"
            src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2Fquentin%2FQuentin%20logo%20.png?alt=media&token=86ccc22d-74a5-45ce-ab92-1cca5f07bec0"
          />
          <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-tighter truncate max-w-[150px] sm:max-w-none">
            Quentin Marketing
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link className={getLinkClasses("/")} to="/">Accueil</Link>
          <Link className={getLinkClasses("/services")} to="/services">Services</Link>
          <Link className={getLinkClasses("/case-studies")} to="/case-studies">Études de Cas</Link>
          <Link className={getLinkClasses("/contact")} to="/contact">Contact</Link>
        </div>
        <div className="hidden md:block">
          <button className="active:scale-95 transition-transform bg-primary px-6 py-2.5 rounded-lg text-white font-manrope text-sm font-semibold tracking-wide hover:opacity-90">
            Consultation Gratuite
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-blue-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-2 max-h-[calc(100vh-70px)] overflow-y-auto">
          <Link className={getMobileLinkClasses("/")} to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link className={getMobileLinkClasses("/services")} to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link className={getMobileLinkClasses("/case-studies")} to="/case-studies" onClick={() => setIsMenuOpen(false)}>Études de Cas</Link>
          <Link className={getMobileLinkClasses("/contact")} to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          
          <div className="mt-4 pt-4 border-t border-slate-100">
            <button className="w-full active:scale-95 transition-transform bg-primary px-6 py-3.5 rounded-lg text-white font-manrope text-base font-semibold tracking-wide hover:opacity-90">
              Consultation Gratuite
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
