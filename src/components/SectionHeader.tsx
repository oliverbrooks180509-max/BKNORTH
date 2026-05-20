import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  kicker,
  title,
  lede,
  align = "left",
}: {
  index: string;
  kicker: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col gap-6 ${alignCls}`}>
      <Reveal className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-micro text-gold-500">
          {index}
        </span>
        <span className="h-px w-10 bg-gold-500/40" />
        <span className="label">{kicker}</span>
      </Reveal>
      <Reveal delay={0.05} as="h2" className="display text-balance text-4xl sm:text-5xl lg:text-6xl text-bone">
        {title}
      </Reveal>
      {lede && (
        <Reveal delay={0.1} as="p" className="max-w-2xl text-pretty text-base sm:text-lg text-bone/60 leading-relaxed">
          {lede}
        </Reveal>
      )}
    </div>
  );
}
