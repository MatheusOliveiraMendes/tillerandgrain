import { galleryShowcase } from "../content";

const GalleryShowcase = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[rgba(255,231,196,0.32)] to-white py-24 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute -top-10 right-1/4 hidden h-32 w-32 rounded-full border border-white/60 bg-white/70 shadow-[0_25px_80px_-45px_rgba(35,49,59,0.4)] backdrop-blur md:block" />
      <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-primary/20 blur-[160px]" />
      <div className="absolute -left-24 top-14 h-48 w-48 rounded-full bg-support/20 blur-[150px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <span className="mb-5 inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-contrast shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
            Gallery
          </span>
          <h2 className="font-serif text-3xl leading-snug text-contrast md:text-4xl">
            Scenes from our kitchen, cafe, and community moments.
          </h2>
          <p className="mt-4 text-[rgba(77,77,77,0.85)]">
            A peek at the colours, textures, and friendly faces that shape each visit to Tiller +
            Grain throughout the seasons.
          </p>
        </div>

        <div className="grid auto-rows-[210px] gap-4 sm:grid-cols-2 sm:auto-rows-[240px] lg:grid-cols-3 lg:auto-rows-[260px]">
          {galleryShowcase.map((item, index) => {
            const layoutVariants = [
              "sm:col-span-2 lg:col-span-2 lg:row-span-2",
              "",
              "lg:row-span-2",
              "",
              "",
            ];
            const layoutClass = layoutVariants[index] ?? "";

            return (
              <figure
                key={item.label}
                className={`group relative flex h-full overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/80 shadow-[0_35px_100px_-65px_rgba(35,49,59,0.45)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_40px_110px_-55px_rgba(35,49,59,0.48)] ${layoutClass}`}
              >
                <img
                  alt={item.label}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.image}
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-[rgba(35,49,59,0.65)] via-[rgba(35,49,59,0.35)] to-transparent px-5 pb-5 pt-20 text-xs uppercase tracking-[0.3em] text-white">
                  <span className="font-semibold">{item.label}</span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-[rgba(248,163,64,0.9)]" />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
