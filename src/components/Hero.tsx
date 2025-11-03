import heroImage from "../assets/Screenshot 2025-10-29 at 23.19.26.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-28 pt-28 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-[rgba(255,231,196,0.65)]" />
      <div className="absolute -right-28 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute -bottom-32 -left-28 h-[26rem] w-[26rem] rounded-full bg-support/20 blur-[140px]" />
      <div className="absolute right-1/4 top-24 hidden h-24 w-24 rounded-full border border-white/60 bg-white/50 shadow-[0_10px_40px_-25px_rgba(15,24,32,0.35)] backdrop-blur md:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-contrast shadow-[0_15px_35px_-30px_rgba(15,24,32,0.6)]">
              Dublin - Ireland
            </span>
            <h1 className="font-serif text-4xl leading-tight text-contrast md:text-[3.25rem] lg:text-[3.75rem]">
              Seasonal cooking with a contemporary soul.
            </h1>
            <p className="max-w-xl text-base text-[color:var(--color-neutral-mid)] md:text-lg">
              At Tiller + Grain, Dublin sunlight meets vibrant vegetarian plates made fresh each
              morning. Every dish shines a light on the independent growers who inspire our kitchen.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="w-fit rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] px-6 py-3 font-semibold text-contrast shadow-lg shadow-primary/50 transition hover:-translate-y-0.5"
              >
                Explore Menu
              </a>
              <a
                href="#contact"
                className="w-fit rounded-full border border-[rgba(15,24,32,0.12)] bg-white/80 px-6 py-3 font-semibold text-contrast shadow-[0_18px_60px_-40px_rgba(15,24,32,0.6)] transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                Talk with our team
              </a>
            </div>
            <div className="grid gap-4 text-xs text-[rgba(77,77,77,0.65)] sm:grid-cols-2 sm:text-sm">
              <div className="flex items-center gap-3 rounded-2xl border border-[rgba(15,24,32,0.05)] bg-white/70 px-4 py-3 shadow-sm shadow-[rgba(15,24,32,0.08)] backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-support/70 font-semibold text-white">
                  30+
                </span>
                Local and seasonal sourcing all year long
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[rgba(15,24,32,0.05)] bg-white/70 px-4 py-3 shadow-sm shadow-[rgba(15,24,32,0.08)] backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/80 font-semibold text-contrast">
                  2018
                </span>
                Smiling vegetarians since opening day
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full border border-white/60 bg-white/70 shadow-[0_35px_80px_-50px_rgba(15,24,32,0.65)] backdrop-blur sm:block" />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-white shadow-[0_50px_120px_-60px_rgba(15,24,32,0.55)] transition duration-700 hover:-translate-y-1 hover:shadow-[0_50px_120px_-40px_rgba(15,24,32,0.55)]">
              <img
                alt="Press feature spotlighting Tiller + Grain"
                className="h-full w-full object-cover"
                src={heroImage}
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/85 px-5 py-4 text-sm text-[color:var(--color-neutral-dark)] shadow-lg backdrop-blur">
                <p className="font-semibold text-contrast">Featured Press Spotlight</p>
                <p className="text-xs text-[rgba(94,94,94,0.7)]">
                  Celebrated among Dublin&apos;s top vegetarian cafes for seasonal creativity.
                </p>
              </div>
            </div>
            <div className="absolute -left-7 top-8 hidden w-44 rounded-2xl border border-white/60 bg-white/85 px-5 py-4 text-sm text-[color:var(--color-neutral-dark)] shadow-lg backdrop-blur md:block">
              <p className="font-semibold text-contrast">Chef Clair Dowling</p>
              <p className="text-xs text-[rgba(94,94,94,0.7)]">“Every dish begins with a local grower.”</p>
            </div>
            <div className="absolute -bottom-6 right-4 hidden rounded-3xl bg-[color:var(--color-accent)]/90 px-5 py-4 text-xs font-medium text-[color:var(--color-neutral-light)] shadow-xl shadow-[rgba(35,49,59,0.45)] md:flex md:flex-col md:gap-1">
              <span className="text-sm font-semibold">Currently in season</span>
              <span>- Wicklow asparagus</span>
              <span>- Boyne Valley goat cheese</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
