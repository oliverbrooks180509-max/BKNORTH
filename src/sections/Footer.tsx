import { brand, sitemap } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink-900 pt-20 pb-10 border-t border-bone/10">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-serif text-3xl tracking-tight text-bone">
              {brand.name}
            </span>
            <p className="mt-6 max-w-xs text-bone/55 leading-relaxed">
              A private training club for those who refuse to plateau. Founded {brand.established.replace("EST. ", "")}, three houses, one standard.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex max-w-sm items-center border-b border-bone/20 focus-within:border-gold-500 transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent py-3 text-bone placeholder:text-bone/30 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-3 font-mono text-[10px] uppercase tracking-micro text-gold-500 hover:text-bone transition-colors"
              >
                Subscribe →
              </button>
            </form>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-micro text-bone/30">
              The Dispatch · Monthly · 4,200 readers
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {sitemap.map((s) => (
              <div key={s.group}>
                <h3 className="font-mono text-[10px] uppercase tracking-micro text-gold-500">
                  {s.group}
                </h3>
                <ul className="mt-5 flex flex-col gap-3 text-sm text-bone/65">
                  {s.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="link-underline hover:text-bone transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-bone/10 pt-8 md:grid-cols-3 items-center">
          <p className="font-mono text-[10px] uppercase tracking-micro text-bone/40">
            © {new Date().getFullYear()} {brand.name} Athletic Club Ltd.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-micro text-bone/40 md:text-center">
            {brand.city}
          </p>
          <div className="flex gap-6 md:justify-end font-mono text-[10px] uppercase tracking-micro text-bone/40">
            <a href="#" className="hover:text-bone transition-colors">Instagram</a>
            <a href="#" className="hover:text-bone transition-colors">Spotify</a>
            <a href="#" className="hover:text-bone transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Outsized wordmark */}
        <div aria-hidden className="mt-12 select-none overflow-hidden">
          <span className="block font-serif text-bone/[0.04] text-[20vw] leading-[0.85] tracking-tighter text-center">
            {brand.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
