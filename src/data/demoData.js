export const products = [
  {
    id: "home-jersey",
    name: "Youth Home Stadium Jersey 2026/27",
    shortName: "Home Jersey",
    price: 1199.95,
    image: "/assets/kc-home-kit-2026-27.png",
    badge: "Home kit",
    description:
      "The official Kappa Kaizer Chiefs 2026/27 yellow-and-black youth stadium jersey, presented in the club’s iconic home colours.",
    sizes: ["7-8Y", "9-10Y", "11-12Y", "13-14Y"],
    fit: "contain",
    official: true,
  },
  {
    id: "away-jersey",
    name: "Men’s Away Jersey 2026/27",
    shortName: "Away Jersey",
    price: 1399,
    image: "/assets/kc-away-kit-2026-27.png",
    badge: "Away kit",
    description:
      "The official black 2026/27 away jersey with gold shoulder panels and a bold lightning-inspired chest graphic.",
    sizes: ["S", "M", "L", "XL", "2XL", "4XL", "5XL"],
    fit: "contain",
    official: true,
  },
  {
    id: "club-cap",
    name: "Supporter Cap Concept",
    shortName: "Club Cap",
    price: 449,
    image: "/assets/kc-club-cap-official.png",
    badge: "Core",
    description:
      "A six-panel black cap finished with warm-gold piping and an adjustable back strap.",
    sizes: ["One size"],
    fit: "cover",
    official: false,
  },
];

export const newsItems = [
  {
    id: "reserves",
    eyebrow: "Academy · 8 min read",
    title: "Amakhosi sharpen up for Saturday kick-off",
    image: "/assets/reserves-training.png",
    action: "match",
  },
  {
    id: "kit",
    eyebrow: "Club Store · New drop",
    title: "The new home kit has arrived",
    image: "/assets/kc-home-kit-2026-27.png",
    action: "store",
  },
];

export const promptResponses = {
  "What time is the next derby match?":
    "The next derby kicks off at 19:30 on Saturday at Main Stadium. Gates open at 16:30, and I’d recommend arriving by 18:15 for the pre-match ceremony.",
  "Where can I buy the home kit in size Medium?":
    "The 2026/27 home and away jerseys are available in the Store prototype. I can take you straight there—your 10% supporter discount will be applied at checkout.",
  "How do I join the R250 supporter membership?":
    "Open the Join tab and choose your cap or bucket hat plus your T-shirt size. The annual R250 supporter membership includes a size 5 ball, headwear, supporter card and branded T-shirt.",
  "Where can I get official match tickets?":
    "Official match tickets are sold outside the club app through Stadium Management South Africa and its authorised ticketing platform. I can open the official Stadium Management SA website for you.",
};

export const STADIUM_MANAGEMENT_URL = "https://stadiummanagement.co.za/";

export const featureGuide = [
  { label: "Annual membership", detail: "R250 commitment, welcome pack choices, recognition and renewal." },
  { label: "Fan identity", detail: "Digital supporter card, tier status, QR entry and synced member perks." },
  { label: "Matchday", detail: "Live scores, team stats, voting and a mobile ticket wallet." },
  { label: "Commerce", detail: "Headless product discovery and simulated one-tap checkout." },
  { label: "Club AI", detail: "Instant answers for fixtures, merchandise and memberships." },
];

export const formatRand = (amount) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
