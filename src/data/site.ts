export const site = {
  brand: {
    name: "B&K North",
    short: "B&K",
    tagline: "Websites. Built to elevate.",
    description:
      "A modern web design agency building luxury, minimalist websites for brands that want a stronger online presence.",
  },
  contact: {
    phone: "07769933787",
    phoneHref: "tel:+447769933787",
    emails: ["oliverbrooks@bknorth.studio", "kevinkrasnichi@bknorth.studio"],
  },
  nav: [
    { label: "Work", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      tier: "01",
      name: "Standard",
      tagline: "A clean, considered website. Built to perform.",
      price: "£300",
      hosting: "£79 / month",
      features: [
        "Up to 5 pages, fully responsive",
        "Custom design, no templates",
        "Mobile, tablet and desktop tuned",
        "Basic SEO foundation",
        "Contact form & analytics",
        "Hosting & ongoing edits included with monthly plan",
      ],
    },
    {
      tier: "02",
      name: "Luxury",
      tagline: "A flagship presence. Built to elevate.",
      price: "£500",
      hosting: "£129 / month",
      features: [
        "Unlimited pages within scope",
        "Bespoke design system & motion",
        "Premium animations & scroll storytelling",
        "Advanced SEO & performance budget",
        "Custom integrations (CMS, forms, bookings)",
        "Priority support & ongoing edits with 1 week's notice",
      ],
      featured: true,
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      copy: "We start with the brand — the audience, the positioning, the proof. Strategy first, pixels later.",
    },
    {
      step: "02",
      title: "Design",
      copy: "A bespoke visual system, drawn in dark mode. Typography, motion and detail tuned for first impressions.",
    },
    {
      step: "03",
      title: "Build",
      copy: "Hand-built, performant front-ends. Accessible, responsive, SEO-aware. No bloat, no boilerplate.",
    },
    {
      step: "04",
      title: "Elevate",
      copy: "We ship fast — and stay close. Edits, changes and refinements handled with one week's notice.",
    },
  ],
} as const;
