// MERIDIAN — Brand & content source of truth
// All copy lives here so editorial tone stays consistent.

export const brand = {
  name: "MERIDIAN",
  tagline: "The Apex Standard.",
  established: "EST. MMXIX",
  city: "NEW YORK · LONDON · TOKYO",
  promise:
    "Invitation-only training for those who refuse to plateau.",
};

export const nav = [
  { label: "Method", href: "#method" },
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Spaces", href: "#spaces" },
  { label: "Membership", href: "#membership" },
  { label: "Journal", href: "#journal" },
];

export const sitemap = [
  {
    group: "Train",
    items: ["The Method", "Programs", "Private Sessions", "Group Classes", "Recovery"],
  },
  {
    group: "Belong",
    items: ["Membership", "Apply", "Refer", "Member Login", "House Rules"],
  },
  {
    group: "Discover",
    items: ["Coaches", "Spaces", "Journal", "Press", "Careers"],
  },
  {
    group: "Contact",
    items: ["Concierge", "Locations", "Private Events", "FAQ", "Legal"],
  },
];

export const stats = [
  { value: "0.4%", label: "Acceptance rate" },
  { value: "1:3", label: "Coach to member" },
  { value: "94 NPS", label: "Member promoter score" },
  { value: "11", label: "Years, no plateau" },
];

export const pillars = [
  {
    no: "01",
    title: "Strength",
    body:
      "Compound, periodised, measured. Programming built around your lifts, not the calendar on the wall.",
  },
  {
    no: "02",
    title: "Conditioning",
    body:
      "Lactate-threshold zoned work. Engineered for capacity that translates: stairs, deadlines, time zones.",
  },
  {
    no: "03",
    title: "Recovery",
    body:
      "Cryo, sauna, contrast, sleep coaching. The half of training the rest of the industry skips.",
  },
  {
    no: "04",
    title: "Mind",
    body:
      "Breathwork, focus protocols and quarterly diagnostics. We treat attention like a trainable asset.",
  },
];

export const programs = [
  {
    code: "P—01",
    name: "Apex Strength",
    duration: "12 weeks",
    sessions: "4×/week",
    summary:
      "Hypertrophy and absolute strength on a periodised block. Bench, squat, pull — refined to a personal craft.",
  },
  {
    code: "P—02",
    name: "Executive Conditioning",
    duration: "8 weeks",
    sessions: "3×/week",
    summary:
      "Built for long-haul founders. Zone 2, threshold work, and travel-proof protocols across time zones.",
  },
  {
    code: "P—03",
    name: "Hybrid Athlete",
    duration: "16 weeks",
    sessions: "5×/week",
    summary:
      "Strength meets endurance. Lift heavy on Monday, run a half marathon on Saturday. Engineered.",
  },
  {
    code: "P—04",
    name: "Recomposition",
    duration: "10 weeks",
    sessions: "4×/week",
    summary:
      "Lean tissue up, body fat down — without crash protocols. Nutrition, sleep, and resistance, sequenced.",
  },
];

export const coaches = [
  {
    name: "Adrien Vasquez",
    role: "Head of Strength",
    bio:
      "Former national-level weightlifter. 14 years coaching C-suite athletes. NSCA-CSCS.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Mara Lindqvist",
    role: "Conditioning Lead",
    bio:
      "Olympic triathlon training squad. Builds engines that don't quit at the third meeting.",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Kenji Okafor",
    role: "Recovery & Performance",
    bio:
      "DPT. Sleep, mobility and parasympathetic recovery. The reason members stay 5+ years.",
    img: "https://images.unsplash.com/photo-1583454152393-9c2db1ac0177?w=900&q=80&auto=format&fit=crop",
  },
];

export const spaces = [
  {
    name: "The Floor",
    detail: "Eleiko platforms · custom rigs · climate engineered",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "The Lab",
    detail: "VO₂ max · DEXA · InBody · gait analysis",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80&auto=format&fit=crop",
  },
  {
    name: "The Bath",
    detail: "Cryo · contrast · infrared · sensory pool",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=80&auto=format&fit=crop",
  },
];

export const membership = [
  {
    tier: "Resident",
    price: "$450",
    cadence: "/month",
    blurb: "Full house access. Coach-led group sessions. Recovery suite.",
    perks: [
      "Unlimited floor access",
      "6 group sessions / week",
      "Recovery suite access",
      "Quarterly diagnostics",
    ],
    cta: "Apply",
    feature: false,
  },
  {
    tier: "Apex",
    price: "$1,200",
    cadence: "/month",
    blurb: "1:1 programming. Dedicated coach. Concierge nutrition.",
    perks: [
      "Everything in Resident",
      "Weekly 1:1 with head coach",
      "Custom programming",
      "Nutrition & sleep concierge",
      "Travel programs across cities",
    ],
    cta: "Apply",
    feature: true,
  },
  {
    tier: "Private Office",
    price: "On request",
    cadence: "",
    blurb: "For founders, athletes, and households. Bespoke, end-to-end.",
    perks: [
      "Dedicated training team",
      "Private floor windows",
      "On-call medical & physio",
      "Annual performance retreat",
    ],
    cta: "Enquire",
    feature: false,
  },
];

export const testimonials = [
  {
    quote:
      "I have trained at every flagship gym in three cities. Meridian is the first that felt like a private club run by clinicians.",
    name: "S. Park",
    title: "Founder, Series C SaaS",
  },
  {
    quote:
      "My VO₂ max is up 18% in a year. My weekends are mine again. That is what I am paying for.",
    name: "A. Devereux",
    title: "Managing Director, Investment Bank",
  },
  {
    quote:
      "The coaching is the closest thing I have found to working with a national team staff.",
    name: "Dr. R. Bhatt",
    title: "Cardiothoracic Surgeon",
  },
];

export const press = ["MONOCLE", "GQ", "FT WEEKEND", "WALLPAPER*", "BLOOMBERG", "ROBB REPORT", "THE TIMES"];

export const journal = [
  {
    kicker: "Method",
    title: "Why we program in 4-week blocks, not 12",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1517344800994-80b20463999c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    kicker: "Recovery",
    title: "The case against the morning ice bath",
    read: "4 min",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    kicker: "Travel",
    title: "A hotel-room protocol for the 14-hour traveller",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop",
  },
];

export const faqs = [
  {
    q: "Is membership really invitation-only?",
    a: "Yes. Every applicant is interviewed and the floor is capped at 320 active members per house. We protect the experience, not the topline.",
  },
  {
    q: "What is the application process?",
    a: "Submit an application, meet with our concierge, and complete a movement and diagnostic intake. Decisions are made within ten days.",
  },
  {
    q: "Do you offer day passes or trials?",
    a: "No day passes. Prospective members may book a single curated tour and trial session before applying.",
  },
  {
    q: "Can I train across cities?",
    a: "Apex and Private Office members have reciprocal access in New York, London and Tokyo, with programming continuity across houses.",
  },
  {
    q: "How is Meridian different from a private studio?",
    a: "We are a club, a clinic and a coaching team — under one roof, with shared data and a single standard.",
  },
];
