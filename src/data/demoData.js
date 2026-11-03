export const products = [
  {
    id: "home-jersey",
    name: "Home Jersey 24/25",
    shortName: "Home Jersey",
    price: 1999,
    image: "/assets/home-jersey.png",
    badge: "Best seller",
    description:
      "The matchday silhouette, refined for the stands. Lightweight royal-blue performance knit with tonal chevrons and electric-teal detailing.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "training-hoodie",
    name: "Elite Training Hoodie",
    shortName: "Training Hoodie",
    price: 1499,
    image: "/assets/training-hoodie.png",
    badge: "New",
    description:
      "A structured technical layer built for cold sessions, away days, and understated club style.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "club-cap",
    name: "AFC Heritage Cap",
    shortName: "Club Cap",
    price: 449,
    image: "/assets/club-cap.png",
    badge: "Core",
    description:
      "A six-panel royal-blue cap finished with the Apex crest in raised teal embroidery and an adjustable back strap.",
    sizes: ["One size"],
  },
];

export const newsItems = [
  {
    id: "reserves",
    eyebrow: "Academy · 8 min read",
    title: "Reserves sharpen up for Saturday kick-off",
    image: "/assets/reserves-training.png",
    action: "match",
  },
  {
    id: "kit",
    eyebrow: "Club Store · New drop",
    title: "The new home kit has arrived",
    image: "/assets/home-jersey.png",
    action: "store",
  },
];

export const promptResponses = {
  "What time is the next derby match?":
    "The next derby kicks off at 19:30 on Saturday at Main Stadium. Gates open at 16:30, and I’d recommend arriving by 18:15 for the pre-match ceremony.",
  "Where can I buy the home kit in size Medium?":
    "The Home Jersey 24/25 is available in Medium in the Official Store for R1,999. I can take you straight to the product page—your 10% VIP Member discount will be applied at checkout.",
  "How do I upgrade to VIP membership?":
    "Open your Digital ID, choose Membership Options, then select VIP Elite. The upgrade unlocks priority ticket alerts, lounge access offers, and exclusive club content.",
  "Where can I get official match tickets?":
    "Official match tickets are sold outside the club app through Stadium Management South Africa and its authorised ticketing platform. I can open the official Stadium Management SA website for you.",
};

export const STADIUM_MANAGEMENT_URL = "https://stadiummanagement.co.za/";

export const featureGuide = [
  { label: "Fan identity", detail: "Digital ID, tier status, QR entry and synced member perks." },
  { label: "Matchday", detail: "Live scores, team stats, voting and a mobile ticket wallet." },
  { label: "Commerce", detail: "Headless product discovery and simulated one-tap checkout." },
  { label: "Club AI", detail: "Instant answers for fixtures, merchandise and memberships." },
];

export const formatRand = (amount) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(amount);
