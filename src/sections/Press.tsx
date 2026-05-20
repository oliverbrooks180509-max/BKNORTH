import Marquee from "../components/Marquee";
import { press } from "../data/content";

export default function Press() {
  return (
    <section className="border-y border-bone/10 bg-ink-900 py-6">
      <Marquee speed={42}>
        {press.concat(press).map((p, i) => (
          <div key={`${p}-${i}`} className="flex items-center gap-12 px-8">
            <span className="font-serif text-xl tracking-wider text-bone/40">{p}</span>
            <span className="h-1 w-1 rounded-full bg-gold-500/40" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
