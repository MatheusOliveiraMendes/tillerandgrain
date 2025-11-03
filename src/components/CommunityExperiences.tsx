import { communityExperiences } from "../content";

const CommunityExperiences = () => {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[rgba(248,163,64,0.12)] to-[rgba(111,169,149,0.1)] py-24 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-[rgba(248,163,64,0.18)] blur-[160px]" />
      <div className="absolute -right-20 bottom-12 h-48 w-48 rounded-full bg-[rgba(111,169,149,0.2)] blur-[150px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <span className="mb-5 inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-contrast shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
            Community
          </span>
          <h2 className="font-serif text-3xl leading-snug text-contrast md:text-4xl">
            Experiences that bring growers, makers, and neighbours together.
          </h2>
          <p className="mt-4 text-[rgba(77,77,77,0.85)]">
            Join us beyond the cafe walls—from collaborative workshops to bespoke catering spreads
            and seasonal farm visits that deepen our connection to local producers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {communityExperiences.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2.75rem] border border-white/60 bg-white/85 shadow-[0_40px_110px_-65px_rgba(35,49,59,0.45)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_45px_120px_-55px_rgba(35,49,59,0.5)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,49,59,0.45)] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-contrast shadow-sm backdrop-blur">
                  Gather
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                <h3 className="font-serif text-2xl text-contrast">{item.title}</h3>
                <p className="text-sm text-[rgba(77,77,77,0.8)]">{item.description}</p>
                <div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(77,77,77,0.65)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  Let’s plan together
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityExperiences;
