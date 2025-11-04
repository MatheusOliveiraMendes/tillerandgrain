import chefImage from "../assets/Layer-12-1-scaled.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[rgba(255,231,196,0.35)] to-white py-24 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute -left-16 top-12 hidden h-52 w-52 rounded-full bg-primary/25 blur-[140px] lg:block" />
      <div className="absolute -right-16 bottom-0 hidden h-64 w-64 rounded-full bg-support/25 blur-[140px] md:block" />
      <div className="absolute right-12 top-14 hidden h-16 w-16 rounded-full border border-white/60 bg-white/70 shadow-[0_20px_70px_-40px_rgba(15,24,32,0.55)] backdrop-blur md:block" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="relative order-2 w-full md:order-1">
          <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-secondary/50 blur-sm" />
          <div className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-[0_45px_110px_-60px_rgba(35,49,59,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_45px_110px_-40px_rgba(35,49,59,0.45)]">
            <img
              alt="Chef Clair Dowling of Tiller + Grain"
              className="h-full w-full object-cover"
              src={chefImage}
            />
          </div>
        </div>

        <div className="order-1 w-full md:order-2">
          <span className="mb-5 inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-contrast shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
            About us
          </span>
          <h2 className="font-serif text-3xl leading-snug text-contrast md:text-4xl">
            "Take the best of fresh, seasonal Irish produce... treat it simply."
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[rgba(77,77,77,0.85)]">
            The mission at Tiller + Grain is to cook with taste and nutrition at the heart, giving
            due credit to the Irish farmers and independent makers who shape our pantry every day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[rgba(77,77,77,0.85)]">
            Expect salads layered with Airfield Farm greens, slow-cooked meats from JJ Young & Sons,
            sustainable fish from Sustainable Seafood Ireland, and artisan pantry goods from Lilliput
            Stores, served with warm Dublin hospitality.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/80 px-4 py-6 text-center shadow-[0_20px_60px_-40px_rgba(15,24,32,0.45)]">
              <span className="font-serif text-xl text-contrast">Airfield Farm</span>
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.65)]">
                Seasonal vegetables
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/80 px-4 py-6 text-center shadow-[0_20px_60px_-40px_rgba(15,24,32,0.45)]">
              <span className="font-serif text-xl text-contrast">JJ Young & Sons</span>
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.65)]">
                Free-range meats
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/80 px-4 py-6 text-center shadow-[0_20px_60px_-40px_rgba(15,24,32,0.45)]">
              <span className="font-serif text-xl text-contrast">Sustainable Seafood Ireland</span>
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.65)]">
                Irish fish
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
