import { menuHighlights } from "../content";

const MenuHighlights = () => {
  return (
    <section id="menu" className="bg-transparent py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <div className="max-w-2xl">
          <span className="mb-5 inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-contrast shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
            Menu
          </span>
          <h2 className="font-serif text-3xl leading-snug text-contrast md:text-4xl">
            Daily salads, hearty mains, and bakery favourites.
          </h2>
          <p className="mt-4 text-[rgba(77,77,77,0.85)]">
            The counter changes with the Irish harvest - think roasted vegetables, sustainable fish,
            free-range meats, and breads baked in-house alongside clearly marked allergens.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {menuHighlights.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_40px_100px_-60px_rgba(35,49,59,0.45)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_45px_110px_-45px_rgba(35,49,59,0.45)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,49,59,0.45)] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute top-5 left-5 inline-flex items-center rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-contrast shadow-sm backdrop-blur">
                  Signature
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                <h3 className="font-serif text-2xl text-contrast">{item.name}</h3>
                <p className="text-sm text-[rgba(77,77,77,0.8)]">{item.description}</p>
                <div className="mt-auto flex items-center gap-3 text-xs text-[rgba(77,77,77,0.6)]">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Made each morning
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-support" />
                    Local ingredients
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] px-6 py-3 font-semibold text-contrast shadow-lg shadow-primary/40 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(214,122,35,0.7)] focus-visible:-translate-y-1 focus-visible:shadow-[0_20px_45px_-24px_rgba(214,122,35,0.7)]"
          >
            View full menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
