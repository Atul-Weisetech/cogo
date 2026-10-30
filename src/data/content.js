/**
 * Single source of truth for every piece of copy on the marketing page.
 * Keeping it here means section components stay pure layout.
 */

/* hrefs starting with "#/" are separate pages (see App.jsx); the rest are home-page anchors */
export const HOW_PAGE = "#/how-it-works";

export const DRIVE_PAGE = "#/drive";

export const FEATURES_PAGE = "#/features";

export const HELP_PAGE = "#/help";

export const WOMEN_PAGE = "#/women-mode";

export const PRICING_PAGE = "#/pricing";

/* "Features" overview page. #/features is the Safety page, so this one gets its own hash. */
export const COMMUTE_PAGE = "#/commute-features";

export const FAMILY_PAGE = "#/family-tracking";

export const ABOUT_PAGE = "#/about";

export const CONTACT_PAGE = "#/contact";

/* Primary nav. Copy and targets are placeholders pending final Figma links. */
export const navLinks = [
  { label: "How it works", href: HOW_PAGE },
  { label: "Offer a Ride", href: DRIVE_PAGE },
  { label: "Safety", href: FEATURES_PAGE },
  { label: "Features", href: COMMUTE_PAGE },
  { label: "Pricing", href: PRICING_PAGE },
  { label: "Help", href: HELP_PAGE },
];

export const navCta = { label: "Get the app", href: "#app" };

export const hero = {
  titleTop: "Move Smarter.",
  titleBottom: "Ride Together.",
  lead:
    "Share a ride with verified people going your way. Pay a fair contribution, not a cab fare or offer your empty seats and split the journey.",
  cards: [
    {
      key: "take",
      label: "Take a Ride",
      text: "Find a seat on a route that works for you.",
      cta: "Find rides",
      href: "#how-it-works",
    },
    {
      key: "offer",
      label: "Offer a Ride",
      text: "Share your empty seats and split the journey.",
      cta: "Start offering",
      href: DRIVE_PAGE,
    },
  ],
  badges: [
    { image: "id", label: "ID Verified Drivers" },
    { image: "vehicle", label: "Verified Vehicles" },
    { image: "women", label: "Women Mode" },
    { image: "sos", label: "One-tap SOS" },
    { image: "call", label: "Masked Call & Chat" },
  ],
};

export const howItWorks = [
  {
    key: "take",
    title: "Take a Ride",
    steps: [
      "Enter where you're going",
      "Pick a ride and see the fare upfront",
      "Board with a QR check and track live.",
    ],
  },
  {
    key: "offer",
    title: "Offer a Ride",
    steps: [
      "Add your vehicle and verify your licence",
      "Post your route, seats and contribution",
      "Approve riders or let them book instantly.",
    ],
  },
];

/* "How it works" page (#/how-it-works) */
export const howPage = {
  hero: {
    titleTop: "Two way to",
    titleBottom: "Ride Together.",
    lead:
      "Whether you need a seat or have one to share, COGO works the same way: transparent, verified, and on your route.",
    cta: [
      { label: "Need a seat", href: "#take-a-ride", icon: "need", variant: "primary" },
      { label: "Have a seat to share", href: "#offer-a-ride", icon: "share", variant: "ghost" },
    ],
  },
  take: {
    id: "take-a-ride",
    title: "Take a",
    highlight: "Ride",
    lead: "Find rides, share seats, and get there together. - in simple 5 steps",
    steps: [
      {
        title: "Tell us where you're going",
        text: "Enter pickup and destination, pick a date and time (or 'now'), and how many seats. Save Home and Work for one tap.",
      },
      {
        title: "Compare rides that match your route",
        text: "See the driver, vehicle, departure time, seats left and your exact contribution. Filter by instant booking, vehicle type or women-only.",
      },
      {
        title: "Check the fare breakdown",
        text: "Base contribution, platform fee and GST are itemised. The cancellation policy is shown before you confirm.",
      },
      {
        title: "Book instantly or request to join",
        text: "Some drivers confirm instantly; others approve requests. Pay by UPI, card, net banking or COGO Wallet.",
      },
      {
        title: "Board with a QR check and track live",
        text: "Scan the driver's QR to confirm you're in the right car. Share your live trip with family and chat or call with masked numbers.",
      },
    ],
    chip: { label: "Nearby", icon: "pin", text: "In a hurry? Nearby shows people within 5 km right now with a fixed, banded price." },
  },
  offer: {
    id: "offer-a-ride",
    title: "Offer a",
    highlight: "Ride",
    lead: "Share your ride, Save on fuel. Help others. Get rewarded.",
    steps: [
      {
        title: "Add your vehicle",
        text: "Model, colour, seats and plate. Takes two minutes.",
      },
      {
        title: "Verify once",
        text: "Your driving licence is checked automatically in seconds; your RC is reviewed by our team within 24–48 hours. You'll see each status separately.",
      },
      {
        title: "Post your route",
        text: "Pickup, destination, up to 5 stops, departure time, available seats.",
      },
      {
        title: "Set a fair contribution",
        text: "We suggest a contribution based on distance and typical fuel share, with a range. You decide.",
      },
      {
        title: "Choose instant booking or approve requests, then go",
        text: "Manage riders, confirm boarding, and get paid to your bank account in T+2 working days.",
      },
    ],
    chip: { label: "Smart Routine", icon: "calendar", text: "Offer the same commute every weekday? COGO prepares the ride for you to confirm each time." },
  },
  during: {
    title: "During the",
    highlight: "ride",
    items: [
      { image: "min", title: "Waiting Timer", text: "3 minutes free waiting, then a small per-minute charge - disclosed unfront." },
      { image: "live", title: "Live tracking", text: "See your driver's location in real time and get arrival updates." },
      { image: "chat", title: "Masked call & chat", text: "Your personal number stays private. Call and chat with masked IDs." },
      { image: "sos1", title: "SOS", text: "Need help? Tap SOS to quickly alert our team and your emergency contacts." },
    ],
  },
  after: {
    title: "After the",
    highlight: "ride",
    items: [
      { image: "gst", title: "Digital GST receipt", text: "Get GST compliant receipt instantly, straight to your email and in the app." },
      { image: "rating", title: "Two-way ratings", text: "Riders rate drivers, drivers rate riders" },
      { image: "easily", title: "Split the fare with co-riders.", text: "Travel together, share the cost, select and split easily in the app." },
    ],
  },
};

/* "Drive with COGO" page (#/drive). Figures are illustrative placeholders. */
export const drivePage = {
  hero: {
    titleTop: "Your empty seats",
    titleBottom: "can pay for your commute.",
    lead: "You're already making the trip. Share the empty seats, split the fuel and tolls, and get paid to your bank account.",
    cta: [
      { label: "Start offering", href: "#verification", variant: "primary" },
      { label: "Get notified when rides are confirmed", href: "#getting-paid", variant: "ghost" },
    ],
  },
  earnings: {
    title: "Your earnings,",
    highlight: "Made simple",
    /* illustrative examples */
    tabs: [
      { key: "ex1", label: "Fare Example 1", from: "Ahmedabad", to: "Gandhinagar", km: 28, seats: 3, suggested: 80, max: 240 },
      { key: "ex2", label: "Fare Example 2", from: "Ahmedabad", to: "Sanand", km: 32, seats: 3, suggested: 90, max: 270 },
    ],
  },
  checklist: {
    title: "Who can offer",
    highlight: "- Checklist",
    items: [
      { image: "age", tone: "green", text: "18+" },
      { image: "licence", tone: "blue", text: "Valid driving licence" },
      { image: "rc", tone: "purple", text: "Vehicle RC in your name or with permission" },
      { image: "puc", tone: "yellow", text: "State requirements (where applicable): insurance, PUC" },
    ],
    note: "Requirements can vary by state. The app shows exactly what’s needed where you drive.",
  },
  verification: {
    title: "Verification",
    highlight: "- step by step",
    items: [
      { image: "driving", icon: "id", title: "Driving licence", text: "Verified automatically in seconds.", status: "Instant" },
      { image: "certificate", icon: "shield", title: "Registration certificate", text: "Reviewed by our team, typically within 24–48 hours.", status: "24–48 hrs" },
      { image: "doc", icon: "check", title: "Additional documents", text: "Only where your city requires them.", status: "If needed" },
    ],
    note: "You'll always see each status separately, so nothing is hidden while you wait.",
  },
  control: {
    title: "You're in",
    highlight: "control",
    items: [
      { image: "booking", title: "Instant booking or approve each rider" },
      { image: "rules", title: "Set your rules", text: "(luggage, music, pets, smoking)" },
      { image: "only", title: "Women-only rides", text: "(for verified women drivers)" },
      { image: "cancel", title: "Cancel with clear policies." },
    ],
  },
  paid: {
    title: "Getting",
    highlight: "Paid",
    items: [
      { image: "pays", title: "Rider pays in app" },
      { image: "cogo", title: "Cogo holds securely" },
      { image: "payout", title: "Payout to your bank in T+2 working days" },
      { image: "gst", title: "GST receipts for every ride" },
    ],
    note: "Payments are processed through an RBI-authorised payment aggregator; COGO holds funds untill settlement.",
  },
  reliability: {
    title: "Your reliability",
    highlight: "transparent",
    items: [
      { image: "track", label: "Completed rides", value: "Shows your track records" },
      { image: "rating", label: "Rating", value: "Built on real experiences" },
      { image: "ontime", label: "On-time rate", value: "Shows your reliability" },
      { image: "cancelation", label: "Cancelation rate", value: "Reflects your commitment" },
    ],
  },
  feedback: {
    title: "Explore our",
    highlight: "feedback",
  },
};

/* "Pricing" page (#/pricing). Every rupee figure, rate and plan price here is an
   illustrative placeholder until the final fare and policy numbers are confirmed. */
export const pricingPage = {
  hero: {
    title: "Fair contributions,",
    highlight: "shown before you book.",
    lead: "COGO is cost-sharing. Drivers set a contribution within a suggested range, so you see every line before paying.",
  },
  fare: {
    title: "How a fare is",
    highlight: "built",
    lead: "Every fare starts from the distance band, then adds the same few lines, in the same order.",
    bands: [
      { key: "A", label: "Short ride", range: "0–5 km" },
      { key: "B", label: "Medium ride", range: "5–20 km" },
      { key: "C", label: "Intercity ride", range: "20 km +" },
    ],
    breakdownTitle: "Sample fare · 15 km",
    /* The medium ride below is the sample shown in the breakdown. */
    sample: "medium",
  },
  examples: {
    title: "Fare",
    highlight: "examples",
    lead: "Total = open contribution + distance + platform fee + GST − discounts.",
    /* GST is 18% of the platform fee. `total` is derived in the component. */
    rides: [
      { key: "short", name: "Short ride", route: "Within the city", km: 4, open: 20, distance: 8, fee: 5, gst: 1, discount: 0 },
      { key: "medium", name: "Medium ride", route: "Across the city", km: 15, open: 35, distance: 30, fee: 8, gst: 1, discount: 5 },
      { key: "intercity", name: "Intercity ride", route: "Between cities", km: 28, open: 60, distance: 56, fee: 12, gst: 2, discount: 10 },
    ],
    note: "Illustrative fares. Your exact total is always shown in the app before you confirm.",
  },
  compare: {
    title: "How COGO",
    highlight: "compares",
    columns: ["COGO", "Cabs", "Autos", "Buses"],
    /* Each cell is [good?, text]. Column order matches `columns`. */
    rows: [
      { label: "Surge pricing", cells: [[true, "Never"], [false, "Can apply"], [true, "Rare"], [true, "No"]] },
      { label: "Comfort", cells: [[true, "Car seat"], [true, "Car seat"], [false, "Basic"], [false, "Crowded"]] },
      { label: "Door-to-door", cells: [[true, "Yes"], [true, "Yes"], [true, "Yes"], [false, "Stops only"]] },
      { label: "Price known upfront", cells: [[true, "Always"], [true, "Usually"], [false, "Negotiated"], [true, "Fixed"]] },
      { label: "Verified people", cells: [[true, "ID checked"], [false, "Driver only"], [false, "Varies"], [false, "No"]] },
    ],
    note: "A general comparison of how each option usually works.",
  },
  pay: {
    title: "Ways to",
    highlight: "pay",
    methods: [
      { icon: "upi", name: "UPI", text: "Pay with any UPI app in a couple of taps." },
      { icon: "card", name: "Cards", text: "Credit and debit cards, saved securely for next time." },
      { icon: "bank", name: "Net banking", text: "Pay straight from your bank account." },
      { icon: "wallet", name: "COGO wallet", text: "Top up once, then pay and get refunds instantly." },
    ],
    note: "Payments run through an RBI-authorised payment aggregator. COGO holds the amount until the ride is complete.",
  },
  cancel: {
    title: "Waiting &",
    highlight: "cancellation",
    lead: "Short waits are free and early cancellations cost nothing. Clear rules keep it fair for riders and drivers.",
    cta: { label: "Read the Cancellation & Refund Policy", href: "#contact" },
    rows: [
      { label: "Waiting at pickup (first 5 min)", value: "Free" },
      { label: "Cancel 24+ hours before departure", value: "Free" },
      { label: "Cancel 2–24 hours before", value: "25% fee" },
      { label: "Cancel within 2 hours", value: "50% fee" },
      { label: "Refund timeline", value: "5–7 working days" },
    ],
  },
  plans: {
    title: "Our",
    highlight: "Plans",
    items: [
      {
        key: "free",
        tone: "free",
        name: "Free",
        price: "₹0",
        blurb: "Everything you need to ride and offer rides.",
        features: [
          "Book and offer rides",
          "Fare shown before you pay",
          "Verified riders and drivers",
          "Women Mode, live tracking and SOS",
          "Digital GST receipts",
        ],
        cta: { label: "Current Plan", current: true },
      },
      {
        key: "rider",
        tone: "rider",
        name: "Rider Plus",
        price: "₹99",
        per: "/mo",
        blurb: "For people who ride most days.",
        features: [
          "Zero platform fee on rides",
          "Priority booking on popular routes",
          "Longer free waiting time",
          "More flexible cancellations",
          "Priority support",
        ],
        cta: { label: "Get Rider Plus", href: "#app" },
      },
      {
        key: "driver",
        tone: "driver",
        name: "Driver Pro",
        price: "₹199",
        per: "/mo",
        blurb: "For drivers who share their seats often.",
        features: [
          "Lower platform fee on every ride",
          "Faster payouts to your bank",
          "Priority placement in search",
          "Earnings insights",
          "Priority support",
        ],
        cta: { label: "Get Driver Pro", href: "#app" },
      },
    ],
  },
  faq: {
    title: "Pricing",
    highlight: "questions",
  },
};

export const pricingFaqs = [
  {
    icon: "price",
    q: "Is there surge pricing?",
    a: "No. COGO is cost-sharing, so the contribution comes from distance, fuel and tolls, never from demand. The price you see does not rise because it is busy or raining.",
  },
  {
    icon: "car",
    q: "Who decides the contribution?",
    a: "We suggest a contribution for every route. The driver can keep it or lower it, but never raise it, so you will not be asked for more than the suggested amount.",
  },
  {
    icon: "team",
    q: "Are there any hidden fees?",
    a: "No. The fare breaks down into the open contribution, distance, a platform fee, GST and any discounts. You see each line before you confirm the booking.",
  },
  {
    icon: "safes",
    q: "When am I charged?",
    a: "You pay in the app when you confirm a ride. COGO holds the amount securely and releases it to the driver once the ride is complete.",
  },
  {
    icon: "location",
    q: "How do refunds work?",
    a: "If a ride is cancelled and a refund applies, it goes back to your original payment method in 5–7 working days, or instantly to your COGO wallet.",
  },
];

export const whyCogo = [
  {
    image: "fair",
    title: "Fair, upfront contribution",
    text: "See the full fare and how it's split before you book. No surge, no surprises.",
  },
  {
    image: "trust",
    title: "People you can trust",
    text: "Every driver's licence is verified automatically and every vehicle's RC is checked by our team.",
  },
  {
    image: "saferdesign",
    title: "Safer by design",
    text: "SOS with 112, live trip sharing with family, masked phone numbers.",
  },
  {
    image: "routine",
    title: "Made for routines",
    text: "COGO learns your Home ↔ Office pattern and suggests rides — you always confirm.",
  },
];

export const stats = [
  { image: "ride", value: 12, suffix: "k+", label: "Rides Shared" },
  { image: "verified", value: 3.2, suffix: "k+", label: "Verified Drivers", decimals: 1 },
  { image: "co2", value: 210, suffix: "k+", label: "kg CO2 Saved" },
  { image: "cities", value: 48, suffix: "+", label: "Cities" },
];

export const womenMode = {
  eyebrow: "Women Mode",
  title: "Women Mode: rides matched only with verified women.",
  text:
    "Women Mode isn't a checkbox. It's unlocked by a live selfie and ID check reviewed by our safety team, so the women-only label means exactly that — for riders and for drivers.",
  cta: "Learn about Women Mode",
};

/* "Features" page (#/features): the safety story, before / during / after a ride. Copy is placeholder pending final Figma text. */
export const featuresPage = {
  hero: {
    title: "Safety you can see,",
    highlight: "before and during every ride.",
    lead: "Verification, live tracking, SOS and masked contact — built into every screen, not hidden in a menu.",
    cta: [
      { label: "Get the app", href: "#app", variant: "dark" },
      { label: "Learn about Women Mode", href: WOMEN_PAGE, variant: "ghost" },
    ],
  },
  before: {
    id: "before-ride",
    title: "Safety starts",
    highlight: "before the ride",
    items: [
      { icon: "id", title: "Verified Identity", text: "We check driver licences for a safer, trusted ride." },
      { icon: "car", title: "Verified Vehicle", text: "We review RC details and show the plate number masked until booking." },
      { icon: "user", title: "Transparent profiles", text: "See real ratings, completed rides, cancelation rates and member since." },
    ],
  },
  during: {
    title: "During the",
    highlight: "Ride",
    heading: "Real-time safety,",
    headingAccent: "while you move.",
    lead: "Stay informed, stay in control - with live tracking, instant support and privacy, all in one place.",
    items: [
      { title: "QR boarding check", text: "\"Confirm it's the right car.\"" },
      { title: "Live tracking with route deviation alerts", text: "We notify you if the car leaves the planned route." },
      { title: "One-tap SOS", text: "Calls 112 and alerts your trusted contacts with your live location." },
      { title: "Masked call and in-app chat.", text: "Your number stays private." },
    ],
  },
  family: {
    title: "Family",
    highlight: "tracking",
    text: "Share a live link with family - no app needed. It expire when you arrive.",
    cta: "Family Tracking",
    strip: {
      text: "Women Mode. Verified, not self-declared.",
      sub: "Rides matched only with women whose identity has been checked by our safety team.",
      cta: "Learn about Women Mode",
    },
  },
  after: {
    title: "After the",
    highlight: "ride",
    lead: "Your feedback matters. We're here to help.",
    items: [
      { icon: "ratings", title: "Two-way ratings.", text: "Rate your ride. Drivers can rate you too. A fairer experience for everyone." },
      { icon: "issue", title: "Report an issue with evidence", text: "Share details, photos or video. We take it seriously." },
      { icon: "response", title: "24-48 h response commitment", text: "We'll review and get back to you within 24-48 hours." },
      { icon: "grievance", title: "Grievance officer link", text: "Need more help? Reach our grievance officer directly, anytime." },
    ],
  },
  commitments: {
    title: "Our safety",
    highlight: "commitments",
    items: [
      { image: "human", title: "Human Verification", text: "Human review for RC and Women Mode." },
      { image: "privacy", title: "Data Privacy Protected", text: "We never sell personal data" },
      { image: "expiry", title: "ID data expiry", text: "raw ID documents stored longer than needed." },
      { image: "emergency", title: "Emergency Contacts", text: "Emergency contacts are only used for SOS and trip sharing" },
      { image: "clear", title: "Data Clear", text: "We never sell personal data" },
      { image: "zero", title: "Zero Tolerance", text: "Zero tolerance harassment policy community guidelines." },
    ],
  },
  tips: {
    title: "Safety tip for",
    highlight: "Riders & Drivers",
    items: [
      { image: "verifyRide", title: "Verified your ride", text: "Match license plate, vehicle model, and driver photo before getting in." },
      { image: "shareTrip", title: "Share your trip", text: "Use real-time location tracking for peace of mind." },
      { image: "sit", title: "Sit where comfortable", text: "Choose the front or back seat based on your preference." },
      { image: "chat", title: "Keep chat in-app", text: "Protect personal details by communicating through the platform." },
      { image: "safetyTools", title: "Know safety tools", text: "Familiarize yourself with emergency contacts and features in the app." },
      { image: "driveRes", title: "Drive Responsibly", text: "Follow all traffic rules, stay focused, and wear a seatbelt always." },
    ],
  },
};

/* "Family Tracking" page (#/family-tracking). The "One link" body copy is Figma
   placeholder text, so swap it for the final wording. */
export const familyTrackingPage = {
  hero: {
    title: "Know they're",
    highlight: "on their way.",
    lead: "Riders can share a live link. Open it in any browser — no app, no account.",
    cta: { label: "Get the app", href: "#app" },
  },
  share: {
    title: "Share your ride",
    highlight: "with family",
    cards: [
      { icon: "map", title: "Live Map", text: "Your route, live in the real time." },
      { icon: "driver", title: "Driver & Vehicle", text: "Know who's driving and what to look for." },
      { icon: "expires", title: "Expires on arrival", text: "The link automatically expires when you reach." },
    ],
  },
  link: {
    title: "One link,",
    highlight: "nothing to install",
    text: [
      "When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!",
      "When it comes to barbequing, there are two main schools of thought for the techniques that you can use.",
    ],
    cta: { label: "Know more", href: FEATURES_PAGE },
  },
};

/* "About" page (#/about). The Figma screenshot was too low-res to read the small copy and
   the team names/roles are Figma placeholders, so check all of it against the final design. */
export const aboutPage = {
  hero: {
    title: "We're building India's",
    highlight: "most trusted way to share a ride.",
    lead: "People going the same way. Fewer empty seats. Cheaper rides. Happier commutes.",
    cta: { label: "Get the app", href: "#app" },
  },
  mission: {
    title: "Our",
    highlight: "Mission",
    subtitle: "More people together, a better tomorrow.",
    text: "We make everyday travel more affordable, convenient and sustainable by helping people share rides. Fewer cars on the road, cleaner air and a safer, more social way to commute — together.",
    cta: { label: "Read more", target: "#about-problem" },
  },
  problem: {
    title: "The",
    highlight: "problem",
    items: [
      { image: "seat", title: "Empty seats", text: "Most cars carry one person while the other seats go unused." },
      { image: "car", title: "Growing congestion", text: "More vehicles mean longer commutes and busier cities." },
      { image: "cost", title: "Rising travel costs", text: "Solo rides are getting too expensive for many." },
    ],
  },
  principles: {
    title: "Our",
    highlight: "principles",
    items: [
      { image: "trust", title: "Trust is a design material", text: "We design for verifiability, transparency and accountability." },
      { image: "fairness", title: "Fairness over surge", text: "Predictable, transparent pricing for everyone." },
      { icon: "shieldCheck", title: "Safety first", text: "Every ride is verified, tracked and built around rider safety." },
      { icon: "shieldLock", title: "Privacy by default", text: "Your data is yours. We collect only what we need." },
    ],
  },
  journey: {
    title: "Our",
    highlight: "journey",
    steps: [
      { icon: "sprout", color: "#1d7bff", title: "2026 Founded", text: "A small team with a big belief in shared mobility." },
      { icon: "pin", color: "#ff7a00", title: "Pilot in Ahmedabad–Gandhinagar", text: "Launched with early riders and drivers to validate and learn." },
      { icon: "users", color: "#4ca85c", title: "Expanded and improved", text: "Added more features, fine-tuned safety and grew our community." },
      { icon: "rocket", color: "#7c3aed", title: "Onwards", text: "Bringing shared rides to more cities across India." },
    ],
  },
  team: {
    title: "Our",
    highlight: "Team",
    lead: "A diverse team building a brighter way.",
    members: [
      { name: "Aarav", role: "Co-founder & CEO" },
      { name: "Kimberly Branch", role: "Marketing" },
      { name: "Orlando Diggs", role: "Customer success lead" },
      { name: "Jessica Dobrev", role: "Specialist support" },
    ],
  },
  reach: [
    { image: "press", title: "Press Kit", text: "Logos, product screenshots, key facts and our story.", cta: "Download press kit", href: "#contact" },
    { image: "careers", title: "Careers", text: "Help us make shared mobility simple, safe and accessible across India.", cta: "See open roles", href: "#contact" },
    { image: "contact", title: "Contact", text: "For media, partnerships or general enquiries, we'd love to hear from you.", cta: "Contact us", href: CONTACT_PAGE },
  ],
};

/* "Features" overview page (#/commute-features). The tile and lead copy was read off a
   low-resolution Figma screenshot, so check it against the final design. */
export const commutePage = {
  hero: {
    title: "Features built for",
    highlight: "real commutes",
    lead:
      "Cogo is a community of people already making the trip. Find a ride nearby, travel with a private group, post your own trip or set a routine once. You always see the price first and you always confirm.",
    chips: [
      { label: "Nearby", href: "#nearby" },
      { label: "Ride Groups", href: "#groups" },
      { label: "Marketplace", href: "#marketplace" },
      { label: "Smart Routine", href: "#routine" },
    ],
  },
  nearby: {
    id: "nearby",
    title: "Rides within 5 km,",
    highlight: "right now.",
    lead: "See who is heading your way and the suggested contribution before you send a request. Request expires in 45 seconds if nobody accepts.",
    tiles: [
      { icon: "km", text: "Within 5 km" },
      { icon: "fixed", text: "Fixed, shown price before request" },
      { icon: "sec", text: "Request expires in 45 seconds" },
    ],
  },
  groups: {
    id: "groups",
    title: "Private circles for your",
    highlight: "office, campus or society.",
    lead: "Ride only with people from your own circle. Invite colleagues, classmates or neighbours and keep every trip inside the group.",
    tiles: [
      { icon: "km", text: "Verified circle" },
      { icon: "fixed", text: "Fixed, shown price before request" },
      { icon: "sec", text: "Request expires in 45 seconds" },
    ],
    cta: { label: "COGO for Groups & Companies", href: "#contact" },
  },
  marketplace: {
    id: "marketplace",
    title: "Post your trip.",
    highlight: "Let verified drivers offer.",
    lead: "Post your route once and let verified drivers offer. Compare offers, price and rating, then pick the one you like.",
    tiles: [
      { icon: "km", text: "Within 5 km" },
      { icon: "fixed", text: "Fixed, shown price before request" },
      { icon: "sec", text: "Request expires in 45 seconds" },
    ],
    callout: "Great for weekend Ahmedabad ↔ Mumbai or college-home runs",
  },
  routine: {
    id: "routine",
    title: "Set it once.",
    highlight: "Confirm each time.",
    lead: "COGO notices your commute pattern, like Home ↔ Office, and suggests rides at the right time. Nothing is booked or published without your say.",
    tiles: [
      { icon: "km", text: "Instant fix" },
      { icon: "fixed", text: "Fixed, shown price before request" },
      { icon: "sec", text: "Request expires in 45 seconds" },
    ],
  },
  included: {
    title: "Also",
    highlight: "included",
    items: [
      { icon: "wallet", label: "Wallet" },
      { icon: "split", label: "Split fare" },
      { icon: "coupon", label: "Coupons" },
      { icon: "subscription", label: "Subscriptions (Rider Plus, Driver Pro)" },
      { icon: "multistop", label: "Multi-stop rides" },
      { icon: "join", label: "Join a ride already on the way" },
      { icon: "receipt", label: "Digital receipts" },
    ],
  },
  faq: {
    title: "Feature",
    highlight: "questions",
  },
};

/* "Women Mode" page (#/women-mode): how Women Mode verification works. */
export const womenPage = {
  hero: {
    title: "Women Mode.",
    /* the word joiner stops the title wrapping at the hyphen */
    highlight: "Verified, not self-⁠declared.",
    lead:
      "Rides matched only with women whose identity has been checked by our safety team — as riders and as drivers.",
    cta: "Start Offering",
    href: DRIVE_PAGE,
  },
  steps: {
    title: "How",
    highlight: "verification works",
    items: [
      { image: "selfie", title: "Take a live selfie in the app" },
      { image: "id", title: "Add your ID" },
      { image: "team", title: "Our safety team reviews Typically within 24–48 hours." },
      { image: "unlock", title: "Women Mode unlocks in Preferences" },
    ],
    note:
      "Your ID image is used only for this check and is deleted after the decision. It is never reused for anything else without a fresh consent.",
  },
  changes: {
    title: "What changes when",
    highlight: "Women Mode is on",
    items: [
      { image: "filter", title: "Women-only filter in Take a Ride" },
      { image: "offer", title: "Women-only rides when you offer" },
      { image: "badge", title: "Women Mode badge on your profile" },
    ],
  },
  privacy: {
    title: "Your",
    highlight: "privacy",
    items: [
      { image: "used", title: "Used only for this check", text: "Your selfie and ID are used only to verify your identity for Women Mode." },
      { image: "deleted", title: "Deleted after the decision", text: "Your ID image and selfie are permanently deleted after the verification decision is complete." },
      { image: "private", title: "Not shared with other riders", text: "Your ID and selfie are never shared with other riders. Others only see a Women Mode badge on your profile." },
    ],
  },
  feedback: {
    title: "Explore our",
    highlight: "feedback",
  },
  faq: {
    title: "Women Mode",
    highlight: "questions",
  },
};

/* "Help Centre" page (#/help). Only "Taking a ride" is in the Figma; the other categories
   are short placeholders built from copy already on the site, to be replaced by the app
   FAQ database. Each category takes any number of { q, a } pairs. */
export const helpCenter = {
  hero: {
    title: "How can",
    highlight: "we help?",
    searchLabel: "Search help",
    placeholder: "Search help",
    cta: "Search",
  },
  defaultCategory: "taking",
  categories: [
    {
      id: "getting-started",
      label: "Getting started",
      faqs: [
        {
          q: "What is Cogo?",
          a: "Cogo is a ride-sharing community, not a taxi service. Drivers are regular commuters already making the trip, and riders share the cost of the journey instead of paying a cab fare.",
        },
        {
          q: "How do I get started?",
          a: "Download the app and sign up. Then either find a ride with Take a Ride, or add your vehicle, verify once and post your route with Offer a Ride.",
        },
        {
          q: "Which cities is Cogo in?",
          a: "Cogo is rolling out in Ahmedabad and Gandhinagar first, with Bengaluru, Mumbai, Pune, Delhi NCR and Hyderabad coming soon.",
        },
      ],
    },
    {
      id: "taking",
      label: "Taking a ride",
      faqs: [
        {
          q: "How do I know the price?",
          a: "You see the full fare before you request or confirm a ride. It is itemised into the open contribution, distance, a platform fee and GST, less any discounts. Nearby rides show a fixed, banded price, and there is no surge pricing.",
        },
        {
          q: "What is 'request to join'?",
          a: "Some drivers confirm bookings instantly; others approve each rider. With request to join you send a request and the driver accepts or declines it. Nearby requests expire in 45 seconds if nobody accepts.",
        },
        {
          q: "What if the driver is late?",
          a: "Follow the driver live on the map, and chat or call through masked numbers. If you would rather not wait you can cancel, and the cancellation policy shown before you confirmed applies. Still stuck? Contact support and we will look into it.",
        },
        {
          q: "How do I cancel?",
          a: "Cancel the ride from the app. Cancelling 24+ hours before departure is free, 2–24 hours before carries a 25% fee, and within 2 hours a 50% fee. The policy is shown before you confirm.",
        },
        {
          q: "How do refunds work?",
          a: "If a ride is cancelled and a refund applies, it goes back to your original payment method in 5–7 working days, or instantly to your COGO wallet.",
        },
        {
          q: "What is the QR check?",
          a: "When you board, scan the driver's QR code in the app. It confirms you are getting into the right car before the ride starts.",
        },
        {
          q: "Can I bring luggage or pets?",
          a: "Drivers set their own rules for luggage, music, pets and smoking, and you can see them on the ride before you book. If you are unsure, check the rules or message the driver first.",
        },
        {
          q: "How do I share my trip?",
          a: "Share your live trip from the ride screen so family can follow along in real time and have peace of mind.",
        },
      ],
    },
    {
      id: "offering",
      label: "Offering a ride",
      faqs: [
        {
          q: "Who can offer rides?",
          a: "Any verified driver with a valid licence and a vehicle whose registration (RC) has been checked by our team. Add your vehicle, verify once, and post your route, seats and contribution.",
        },
        {
          q: "How is the contribution set?",
          a: "We suggest a contribution for every route based on distance, fuel and tolls. You can keep it or lower it, but never raise it.",
        },
        {
          q: "When do I get paid?",
          a: "Payouts go to your bank account in T+2 working days, and you get a GST receipt for every ride.",
        },
      ],
    },
    {
      id: "verification",
      label: "Verification",
      faqs: [
        {
          q: "How are drivers verified?",
          a: "Your driving licence is checked automatically in seconds, and your RC is reviewed by our team. You see the status of each separately.",
        },
        {
          q: "How long does verification take?",
          a: "Your licence check takes seconds. Registration certificate (RC) reviews are typically done within 24–48 hours.",
        },
        {
          q: "What happens to my ID after the check?",
          a: "Your ID image is used only for the check and is deleted once the decision is made. It is never reused for anything else without fresh consent.",
        },
      ],
    },
    {
      id: "payments",
      label: "Payments & wallet",
      faqs: [
        {
          q: "Which payment methods can I use?",
          a: "Pay by UPI, credit or debit card, net banking or your COGO wallet. Payments run through an RBI-authorised payment aggregator.",
        },
        {
          q: "When am I charged?",
          a: "You pay in the app when you confirm a ride. COGO holds the amount securely and releases it to the driver once the ride is complete.",
        },
        {
          q: "How does the COGO wallet work?",
          a: "Top up once, then pay for rides and get refunds instantly. Refunds to the wallet are immediate.",
        },
        {
          q: "Do I get a receipt?",
          a: "Yes. A GST-compliant digital receipt is sent to your email and kept in the app straight after every ride.",
        },
      ],
    },
    {
      id: "safety",
      label: "Safety",
      faqs: [
        {
          q: "What safety features does Cogo have?",
          a: "Verified drivers and vehicles, a QR boarding check, one-tap SOS, live trip sharing with family, masked phone numbers and two-way ratings.",
        },
        {
          q: "How does SOS work?",
          a: "Tap SOS to call 112 and alert your trusted contacts with your live location.",
        },
        {
          q: "How are my emergency contacts used?",
          a: "Emergency contacts are only used for SOS and trip sharing.",
        },
      ],
    },
    {
      id: "women",
      label: "Women Mode",
      faqs: [
        {
          q: "What is Women Mode?",
          a: "Women Mode matches you only with women whose ID and selfie are verified. It applies both ways, to the rides you see and the riders who can book your seats, and stays on until you switch it off.",
        },
        {
          q: "How do I turn on Women Mode?",
          a: "Take a live selfie and add your ID in the app. Our safety team reviews it, typically within 24–48 hours, and Women Mode then unlocks in Preferences.",
        },
        {
          q: "Is my ID shared with other riders?",
          a: "No. Your ID and selfie are never shared with other riders, and are deleted after the decision. Others only see a Women Mode badge on your profile.",
        },
      ],
    },
    {
      id: "account",
      label: "Account & privacy",
      faqs: [
        {
          q: "Is my phone number shared?",
          a: "No. Chat and calls between riders and drivers go through masked numbers.",
        },
        {
          q: "How do ratings work?",
          a: "Riders rate drivers and drivers rate riders, so the experience is fairer for everyone. You can see real ratings, completed rides and cancellation rates on profiles.",
        },
        {
          q: "Who can see my verification documents?",
          a: "Our safety team reviews them for the check. They are used only for that, and are never shared with other riders.",
        },
      ],
    },
    {
      id: "groups",
      label: "Groups & Marketplace",
      faqs: [
        {
          q: "What are Ride Groups?",
          a: "Private circles for your office, campus or society. Invite colleagues, classmates or neighbours and keep every trip inside the group.",
        },
        {
          q: "What is the Marketplace?",
          a: "Post your trip once and let verified drivers make offers. Compare offers, price and rating, then pick the one you like.",
        },
        {
          q: "Is anything booked automatically?",
          a: "No. COGO can suggest rides for your regular commute, but nothing is booked or published without your say.",
        },
      ],
    },
  ],
  contact: [
    {
      title: "Still need help?",
      text: "Our team usually replies within a day.",
      cta: "Contact support",
      href: CONTACT_PAGE,
    },
    {
      title: "Safety concern?",
      /* word joiners + a no-break space keep "24–48 h" on one line */
      text: "Report it and we'll respond within 24⁠–⁠48 h.",
      cta: "Report a safety concern",
      href: CONTACT_PAGE,
    },
  ],
};

/* "Contact & Support" page (#/contact). The grievance officer's name and email are
   "[Name] · [email]" placeholders in the Figma, so fill them in before launch. */
export const contactPage = {
  hero: { title: "Contact &", highlight: "Support" },
  channels: [
    {
      icon: "phone",
      title: "In-app support",
      text: "Open the app → Profile → Help → Chat with us.",
    },
    {
      icon: "mail",
      title: "Email support",
      text: "support@cogo.app",
      href: "mailto:support@cogo.app",
    },
    {
      icon: "grievance",
      title: "Grievance Officer",
      text: "[Name] · [email] Acknowledgement within [24 h], resolution within [15 days] (IT Rules 2021).",
    },
  ],
  form: {
    title: "Contact",
    highlight: "form",
    lead: "Fill in the details below and we'll get back to you.",
    topics: [
      "Trip or booking",
      "Payments & refunds",
      "Safety concern",
      "Account & verification",
      "Offering a ride",
      "Press & partnerships",
      "Something else",
    ],
    maxFileMb: 10,
    consent: "I agree COGO may use these details to respond.",
    privacyLabel: "Privacy Policy",
    /* same placeholder target as the footer's Privacy Policy link */
    privacyHref: "#contact",
    submit: "Send message",
    success: {
      title: "Thanks, we've got your message.",
      text: "Our team usually replies within a day.",
      again: "Send another message",
    },
  },
  office: {
    title: "Registered office",
    address: "E-620, Ganesh Glory 11, Jagatpur Rd, near BSNL Office, off Sarkhej – Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470",
    mapTitle: "Map showing the COGO registered office in Jagatpur, Ahmedabad",
    /* Google's keyless embed, satellite view (t=k) */
    mapSrc: "https://maps.google.com/maps?q=E-620%2C%20Ganesh%20Glory%2011%2C%20Jagatpur%2C%20Ahmedabad%20382470&t=k&z=17&output=embed",
  },
  extras: [
    { title: "Press kit", cta: "press@cogo.app", href: "mailto:press@cogo.app" },
    { title: "Partnerships", cta: "Groups & Companies", href: "mailto:partnerships@cogo.app" },
  ],
};

export const testimonials = [
  {
    quote:
      "I was spending almost a third of my salary getting to work. Two months on Cogo and that bill is down to a tenth — with the same three people every morning.",
    name: "Aditi Shah",
    role: "Product Designer, Ahmedabad",
    rating: 5,
  },
  {
    quote:
      "I drive Gandhinagar to Ahmedabad daily anyway. Filling three seats covers my fuel and I have company for the drive. Setup took about four minutes.",
    name: "Rohit Mehta",
    role: "Civil Engineer, Gandhinagar",
    rating: 5,
  },
  {
    quote:
      "Women Mode is the reason I stayed. Knowing every co-rider is verified — and that my family can watch the trip live — makes the late shift feel normal again.",
    name: "Priya Nair",
    role: "Nurse, Ahmedabad",
    rating: 5,
  },
];

export const cities = {
  eyebrow: "Available Cities",
  titleLead: "Now rolling out in",
  titleHighlight: "Ahmedabad - Gandhinagar",
  titleTail: "- more soon",
  prompt: "Want COGO in your city ?",
  cta: "Contact",
  live: ["Ahmedabad", "Gandhinagar"],
  soon: ["Bengaluru", "Mumbai", "Pune", "Delhi NCR", "Hyderabad"],
};

export const faqs = [
  {
    icon: "car",
    q: "Is COGO a taxi?",
    a: "No. Cogo is a ride-sharing community, not a taxi service. Drivers are regular commuters already making the trip, and riders share the cost of the journey instead of paying a cab fare.",
  },
  {
    icon: "price",
    q: "How is the price decided?",
    a: "Cogo is cost-sharing, not a taxi fare. We calculate a suggested contribution from distance, fuel and tolls, and the driver can only lower it. You see the exact amount and the split before you confirm — there is no surge pricing, ever.",
  },
  {
    icon: "team",
    q: "Who can offer rides?",
    a: "Any verified driver with a valid licence and a vehicle whose registration (RC) has been checked by our team. Add your vehicle, verify once, and post your route, seats and contribution.",
  },
  {
    icon: "safes",
    q: "Is it safe for women?",
    a: "Turn on Women Mode and you will only be matched with women whose ID and selfie are verified. It applies to both directions — the rides you see and the riders who can book your seats — and stays on until you switch it off.",
  },
  {
    icon: "location",
    q: "Which cities?",
    a: "Cogo is rolling out in Ahmedabad and Gandhinagar first, with Bengaluru, Mumbai, Pune, Delhi NCR and Hyderabad coming soon. Contact us to request your city.",
  },
];

export const footer = {
  about:
    "Share a ride with verified people going your way. Pay a fair contribution, not a cab fare or offer your empty seats and split the journey.",
  columns: [
    {
      title: "Company",
      items: [
        { label: "About", href: ABOUT_PAGE },
        { label: "Blog", href: "#contact" },
        { label: "Careers", href: "#contact" },
        { label: "Press kit", href: "#contact" },
        { label: "Contact", href: CONTACT_PAGE },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Terms of Service", href: "#contact" },
        { label: "Privacy Policy", href: "#contact" },
        { label: "Cancellation & Refund", href: "#contact" },
        { label: "Grievance Officer", href: CONTACT_PAGE },
        { label: "Cookie Notice", href: "#contact" },
      ],
    },
    {
      title: "Products",
      items: [
        { label: "How it works", href: HOW_PAGE },
        { label: "Take a Ride", href: "#home" },
        { label: "Offer a Ride", href: DRIVE_PAGE },
        { label: "Features", href: COMMUTE_PAGE },
        { label: "Pricing", href: PRICING_PAGE },
        { label: "Download", href: "#app" },
      ],
    },
    {
      title: "Trust",
      items: [
        { label: "Safety", href: FEATURES_PAGE },
        { label: "Women Mode", href: WOMEN_PAGE },
        { label: "Family Tracking", href: FAMILY_PAGE },
        { label: "Community Guidelines", href: "#contact" },
        { label: "Verification", href: FEATURES_PAGE },
      ],
    },
  ],
  socials: [
    { icon: "facebook", label: "Facebook" },
    { icon: "instagram", label: "Instagram" },
    { icon: "linkedin", label: "LinkedIn" },
  ],
};
