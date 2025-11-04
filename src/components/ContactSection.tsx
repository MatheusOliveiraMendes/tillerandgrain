import { contactDetails, operatingHours } from "../content";
import facadeImage from "../assets/tiller-and-grain-restaurant-exterior-yellow-facade.jpg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 text-[color:var(--color-neutral-dark)]"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-b from-transparent via-white/70 to-white" />
      <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute -left-28 bottom-8 h-56 w-56 rounded-full bg-support/25 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <span className="inline-block rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-contrast shadow-[0_12px_35px_-28px_rgba(15,24,32,0.6)]">
              Visit us
            </span>
            <h2 className="font-serif text-3xl text-contrast md:text-4xl">Plan your visit.</h2>
            <p className="max-w-2xl text-sm text-[rgba(77,77,77,0.78)]">
              Pop in Monday to Friday from 8am to 4pm for salads, sandwiches, and bakery treats.
              Prefer delivery or collection? We offer that Monday to Friday too.
            </p>
          </div>

          <figure className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 shadow-[0_40px_100px_-55px_rgba(35,49,59,0.45)]">
            <img
              alt="Tiller + Grain facade dressed for the holidays"
              className="h-full w-full object-cover"
              src={facadeImage}
            />
            <figcaption className="absolute bottom-4 left-4 rounded-2xl bg-white/85 px-4 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(35,49,59,0.7)] shadow-[0_15px_40px_-25px_rgba(35,49,59,0.5)] backdrop-blur">
              Frederick St South facade
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
            <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
              Address
            </span>
            <p className="mt-2 font-serif text-lg text-contrast">{contactDetails.address}</p>
            <p className="text-xs text-[rgba(77,77,77,0.7)]">{contactDetails.locality}</p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
            <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
              General enquiries
            </span>
            <a
              className="mt-2 block font-serif text-lg text-contrast underline decoration-primary/40 underline-offset-4"
              href={`mailto:${contactDetails.email}`}
            >
              {contactDetails.email}
            </a>
            <p className="text-xs text-[rgba(77,77,77,0.7)]">Drop us a note about daily menus or workshops.</p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
            <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
              Catering enquiries
            </span>
            <a
              className="mt-2 block font-serif text-lg text-contrast underline decoration-primary/40 underline-offset-4"
              href={`mailto:${contactDetails.cateringEmail}`}
            >
              {contactDetails.cateringEmail}
            </a>
            <p className="text-xs text-[rgba(77,77,77,0.7)]">
              Tell us about your celebration for up to fifty guests.
            </p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-secondary/20 to-white/70 p-5 shadow-[0_22px_60px_-40px_rgba(35,49,59,0.45)]">
            <span className="text-xs uppercase tracking-[0.3em] text-[rgba(77,77,77,0.6)]">
              Quick note
            </span>
            <p className="mt-2 text-sm text-[rgba(77,77,77,0.85)]">
              Trip Boxes need 48 hours' notice and Deliveroo orders run Monday to Friday.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-primary-dark)] px-6 py-3 text-sm font-semibold text-contrast shadow-[0_20px_45px_-24px_rgba(214,122,35,0.7)] transition hover:-translate-y-0.5"
            href="https://maps.google.com/?q=23+Frederick+St+S,+Dublin,+D02+KT21"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
          <a
            className="rounded-full border border-[rgba(35,49,59,0.12)] bg-white/85 px-6 py-3 text-sm font-semibold text-contrast shadow-[0_18px_50px_-35px_rgba(35,49,59,0.45)] transition hover:-translate-y-0.5 hover:border-primary/40"
            href={`mailto:${contactDetails.cateringEmail}`}
          >
            Request catering menu
          </a>
        </div>

        <div className="w-full overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 p-1 shadow-[0_50px_120px_-60px_rgba(35,49,59,0.45)]">
          <div className="relative aspect-[16/7] w-full min-h-[320px] overflow-hidden rounded-[2.25rem]">
            <iframe
              title="Tiller + Grain location"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=23+Frederick+St+S,+Dublin,+D02+KT21&output=embed"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(35,49,59,0.25)] via-transparent to-[rgba(248,163,64,0.15)] mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-5 rounded-[2rem] border border-white/40" />
            <div className="pointer-events-none absolute bottom-9 right-10 flex items-center gap-3 rounded-full bg-white/85 px-5 py-2 text-xs font-medium text-[color:var(--color-neutral-dark)] shadow-[0_18px_50px_-30px_rgba(35,49,59,0.55)] backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--color-primary)]" />
              6 min from Trinity College
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
