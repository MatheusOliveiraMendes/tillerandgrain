import { useEffect, useState } from "react";
import logoMark from "../assets/TG-Logo.png";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact" },
];

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyles = isScrolled
    ? "border-white/70 bg-white/95 shadow-[0_15px_40px_-25px_rgba(35,49,59,0.45)]"
    : "border-white/60 bg-white/90 shadow-none";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-all duration-300 ${headerStyles}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a className="flex items-center gap-2" href="#home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-[0_12px_30px_-18px_rgba(35,49,59,0.45)]">
            <img alt="Tiller + Grain logo" className="h-8 w-8 object-contain" src={logoMark} />
          </span>
          <div>
            <p className="font-serif text-lg text-contrast leading-none">Tiller + Grain</p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[rgba(77,77,77,0.6)]">
             Vegetarian Cafe
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[rgba(77,77,77,0.75)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-contrast"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="rounded-2xl bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-contrast">
            <span className="block">Open Mon-Fri: 8am-4pm</span>
            <span className="block text-[9.5px] tracking-[0.3em] text-[rgba(77,77,77,0.7)]">Sat & Sun: Closed</span>
          </div>
          <a
            className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-contrast transition hover:bg-primary hover:text-contrast"
            href="#contact"
          >
            Book Catering
          </a>
        </div>

        <a
          className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-contrast transition hover:bg-primary hover:text-contrast lg:hidden"
          href="#menu"
        >
          Menu
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
