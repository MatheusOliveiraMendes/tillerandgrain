import { sustainabilityHighlights } from "../content";

const SustainabilitySection = () => {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-gradient-to-br from-[rgba(111,169,149,0.12)] via-white to-white py-24 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute -right-24 top-16 h-48 w-48 rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-secondary/30 blur-[140px]" />
      <div className="absolute right-12 bottom-16 hidden h-16 w-16 rounded-full border border-white/60 bg-white/70 shadow-[0_20px_70px_-40px_rgba(15,24,32,0.55)] backdrop-blur lg:block" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <span className="mb-5 inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-support shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
            Sustainability
          </span>
          <h2 className="font-serif text-3xl leading-snug text-contrast md:text-4xl">
            A commitment to plates that care for you and the planet.
          </h2>
          <p className="mt-4 text-[rgba(77,77,77,0.8)]">
            From soil to service, every decision at Tiller + Grain is rooted in community,
            traceability, and respect for the land that feeds us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {sustainabilityHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_35px_90px_-55px_rgba(35,49,59,0.45)] backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_45px_110px_-45px_rgba(35,49,59,0.45)]"
            >
              <h3 className="font-serif text-xl text-contrast">{item.title}</h3>
              <p className="mt-3 text-sm text-[rgba(77,77,77,0.8)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2.25rem] border border-white/60 bg-white/85 px-8 py-10 shadow-[0_40px_100px_-60px_rgba(35,49,59,0.45)] backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl text-contrast">Meet our producers</h3>
              <p className="mt-2 text-sm text-[rgba(77,77,77,0.75)]">
                We host seasonal visits to the farms and workshops of our partners. See firsthand how
                each ingredient arrives at Tiller + Grain.
              </p>
            </div>
            <a
              className="w-fit rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] px-6 py-3 text-sm font-semibold text-contrast shadow-lg shadow-primary/40 transition hover:-translate-y-0.5"
              href="#contact"
            >
              Join the next visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
