type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

/**
 * B&K North brand mark.
 *
 * Replace the SVG markup below with the agency's actual logo file when
 * available. To use a raster/SVG asset from /public, swap this component's
 * body for an <img src="/bk-north-logo.svg" alt="B&K North" /> or import
 * the SVG as a component via vite-plugin-svgr.
 */
export default function Logo({ size = 28, withWordmark = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="B&K North">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M2 32 L14 14 L20 22 L28 10 L38 32 Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M2 32 L38 32"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
      </svg>
      {withWordmark && (
        <span className="flex items-baseline gap-1.5 font-serif text-[15px] tracking-tight">
          <span className="font-light">B&amp;K</span>
          <span className="font-mono text-[9px] uppercase tracking-micro text-bone/60 translate-y-[-1px]">
            North
          </span>
        </span>
      )}
    </span>
  );
}
