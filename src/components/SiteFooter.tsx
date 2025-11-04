
const icons = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <path d="M17.5 6.5h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8 12h3v9h4v-9h3l1-4h-4V6.5a1.5 1.5 0 0 1 1.5-1.5H19V1h-3a5 5 0 0 0-5 5v2H8z" />
      </svg>
    ),
  },
];

const SiteFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--color-accent)] py-14 text-[color:var(--color-neutral-light)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(248,163,64,0.2)] via-transparent to-[rgba(111,169,149,0.25)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg font-semibold text-primary">
            Tiller + Grain
          </div>
          <p className="max-w-sm text-sm text-[rgba(250,248,242,0.8)]">
            Seasonal salads, sandwiches, bakery treats, and catering crafted with Dublin hospitality.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {icons.map((icon) => (
            <a
              key={icon.name}
              aria-label={icon.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgba(250,248,242,0.3)] text-[color:var(--color-neutral-light)] transition hover:border-primary hover:text-primary"
              href={icon.href}
              target="_blank"
              rel="noreferrer"
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <p className="text-xs text-[rgba(250,248,242,0.65)]">
          © {new Date().getFullYear()} Tiller + Grain. Crafted with seasonal joy in Dublin.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
