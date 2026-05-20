import { Reveal, RevealLines } from "../components/Reveal";
import { site } from "../data/site";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-bone/5 bg-ink-950 py-32 sm:py-44 lg:py-52"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="label">⟨ 06 ⟩ Contact</span>
            <RevealLines
              as="h2"
              text={"Start your\nwebsite."}
              className="display mt-8 text-[clamp(2.5rem,6.5vw,5.5rem)]"
              stagger={0.12}
            />
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-md text-bone/70 leading-relaxed">
                Tell us a little about your brand, your timeline, and what
                you're trying to elevate. We reply within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-14 space-y-10">
                <div>
                  <span className="label">Direct line</span>
                  <a
                    href={site.contact.phoneHref}
                    className="mt-3 block font-serif text-3xl sm:text-4xl font-light text-bone link-underline"
                  >
                    {site.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="label">Email</span>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="mt-3 block font-serif text-xl font-light text-bone link-underline"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
