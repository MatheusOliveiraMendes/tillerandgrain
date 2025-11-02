import { contactDetails, operatingHours } from "../content";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-b from-transparent via-white/70 to-white" />
      <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute -left-28 bottom-8 h-56 w-56 rounded-full bg-support/25 blur-[140px]" />

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="w-full rounded-[2.75rem] border border-white/60 bg-white/85 p-6 shadow-[0_45px_110px_-50px_rgba(35,49,59,0.45)] backdrop-blur md:p-10">
          <div className="space-y-4">
            <span className="inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-contrast shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
              Visit us
            </span>
            <h2 className="font-serif text-3xl text-contrast md:text-4xl">
              Plan your sunny visit.
            </h2>
            <p className="max-w-2xl text-sm text-[rgba(77,77,77,0.78)]">
              We love welcoming people who crave vibrant food. Write, call, or drop by - the cafe is
              filled with natural light and friendly faces ready to help.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
                Address
              </span>
              <p className="mt-2 font-serif text-lg text-contrast">13 Pleasants Street</p>
              <p className="text-xs text-[rgba(77,77,77,0.7)]">Dublin 2, Ireland</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
                Phone
              </span>
              <a
                className="mt-2 block font-serif text-lg text-contrast underline decoration-primary/40 underline-offset-4"
                href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
              >
                {contactDetails.phone}
              </a>
              <p className="text-xs text-[rgba(77,77,77,0.7)]">Call us between 08:00-18:00</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
                Email
              </span>
              <a
                className="mt-2 block font-serif text-lg text-contrast underline decoration-primary/40 underline-offset-4"
                href={`mailto:${contactDetails.email}`}
              >
                {contactDetails.email}
              </a>
              <p className="text-xs text-[rgba(77,77,77,0.7)]">We reply within 24 hours</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-secondary/20 to-white/70 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
              <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
                Quick note
              </span>
              <p className="mt-2 text-sm text-[rgba(77,77,77,0.85)]">
                Seating is mostly walk in, but groups of 6+ can call ahead for a reserved table.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/60 bg-white/85 p-6 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
              <h3 className="font-serif text-xl text-contrast">Opening hours</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {operatingHours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex items-center justify-between rounded-xl border border-white/60 bg-white/70 px-4 py-2 shadow-[0_15px_45px_-35px_rgba(35,49,59,0.5)]"
                  >
                    <span>{slot.day}</span>
                    <span className="font-semibold text-contrast">{slot.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/60 bg-gradient-to-r from-[rgba(248,163,64,0.12)] via-white/80 to-[rgba(111,169,149,0.12)] p-6 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
                Private events
              </p>
              <p className="mt-2 text-sm text-[rgba(77,77,77,0.85)]">
                Planning a brunch, team meetup, or workshop? Share the details and we will plan a
                seasonal menu and space layout just for your group.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] px-6 py-3 text-sm font-semibold text-contrast shadow-[0_20px_45px_-24px_rgba(214,122,35,0.7)] transition hover:-translate-y-0.5"
              href="https://maps.google.com/?q=13+Pleasants+Street,+Dublin+2,+Ireland"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
            <a
              className="rounded-full border border-[rgba(35,49,59,0.12)] bg-white/85 px-6 py-3 text-sm font-semibold text-contrast shadow-[0_18px_50px_-35px_rgba(35,49,59,0.45)] transition hover:-translate-y-0.5 hover:border-primary/40"
              href={`mailto:${contactDetails.email}`}
            >
              Book a table
            </a>
          </div>

          <div className="mt-12 w-full overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 p-1 shadow-[0_50px_120px_-60px_rgba(35,49,59,0.45)]">
            <div className="relative aspect-[16/7] w-full min-h-[320px] overflow-hidden rounded-[2.25rem]">
              <iframe
                title="Tiller + Grain location"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.599014882828!2d-6.267625723381067!3d53.33750717145067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e04e81b5737%3A0xb9de50b051519f0b!2sDublin%202!5e0!3m2!1sen!2sie!4v1700000000000"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(35,49,59,0.25)] via-transparent to-[rgba(248,163,64,0.15)] mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-5 rounded-[2rem] border border-white/40" />
              <div className="pointer-events-none absolute left-10 top-10 flex max-w-xs flex-col gap-2 rounded-2xl bg-white/85 px-5 py-4 text-sm text-[color:var(--color-neutral-dark)] shadow-[0_20px_60px_-35px_rgba(35,49,59,0.55)] backdrop-blur">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(77,77,77,0.7)]">
                  Find us
                </span>
                <span className="font-serif text-lg text-contrast">Pleasants Street Corner</span>
                <span className="text-xs text-[rgba(77,77,77,0.75)]">Near Camden Street cafes</span>
              </div>
              <div className="pointer-events-none absolute bottom-9 right-10 flex items-center gap-3 rounded-full bg-white/85 px-5 py-2 text-xs font-medium text-[color:var(--color-neutral-dark)] shadow-[0_18px_50px_-30px_rgba(35,49,59,0.55)] backdrop-blur">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--color-primary)]" />
                4 min from St Stephens Green
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
