const highlights = [
  {
    title: "Salads, sandwiches & bakery",
    description: "Daily menu of colourful salads, warm mains, and pastries baked in-house.",
    accent: "🥗",
  },
  {
    title: "Staycation boxes",
    description: "Tiller + Trip Boxes feed two, four, or six people with 48 hours' notice.",
    accent: "🧺",
  },
  {
    title: "Catering expertise",
    description: "Celebration spreads crafted for gatherings of up to fifty guests.",
    accent: "🍽️",
  },
];

const HighlightsStrip = () => {
  return (
    <section className="mx-auto -mt-16 w-full max-w-6xl px-6">
      <div className="grid gap-4 rounded-[2.75rem] border border-[rgba(255,255,255,0.5)] bg-white/70 p-8 shadow-[0_40px_120px_-70px_rgba(15,24,32,0.65)] backdrop-blur md:grid-cols-3 md:gap-6">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col gap-4 rounded-2xl border border-[rgba(255,255,255,0.6)] bg-white/80 px-5 py-6 shadow-[0_20px_60px_-35px_rgba(15,24,32,0.25)] transition duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(248,163,64,0.12)] text-2xl transition group-hover:bg-[rgba(248,163,64,0.18)]">
              {item.accent}
            </span>
            <h3 className="font-serif text-xl text-contrast group-hover:text-[color:var(--color-primary-dark)]">
              {item.title}
            </h3>
            <p className="text-sm text-[rgba(77,77,77,0.8)]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsStrip;
