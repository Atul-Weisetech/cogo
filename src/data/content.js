/**
 * Single source of truth for every piece of copy on the marketing page.
 * Keeping it here means section components stay pure layout.
 */

/* hrefs starting with "#/" are separate pages (see App.jsx); the rest are home-page anchors */
export const HOW_PAGE = "#/how-it-works";

export const DRIVE_PAGE = "#/drive";

export const FEATURES_PAGE = "#/features";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: HOW_PAGE },
  { label: "Drive with COGO", href: DRIVE_PAGE },
  { label: "Features", href: FEATURES_PAGE },
  { label: "Help / FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

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
    title: "Women",
    highlight: "Mode",
    lead:
      "Rides matched only with women whose identity has been checked by our safety team - as riders and as drivers.",
    cta: "Start Offering",
    href: "#before-ride",
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
  links: [
    [
      { label: "Home", href: "#home" },
      { label: "How it works", href: HOW_PAGE },
      { label: "Drive with COGO", href: DRIVE_PAGE },
      { label: "Features", href: FEATURES_PAGE },
      { label: "Help / FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    [
      { label: "Customer Terms - Bike Taxi", href: "#contact" },
      { label: "Customer Terms - Cabs and Auto", href: "#contact" },
      { label: "Corporate Affairs", href: "#contact" },
      { label: "Captain Terms - Bike Taxi", href: "#contact" },
      { label: "Captain Terms - Cabs and Auto", href: "#contact" },
    ],
  ],
  socials: [
    { icon: "facebook", label: "Facebook" },
    { icon: "instagram", label: "Instagram" },
    { icon: "linkedin", label: "LinkedIn" },
  ],
};
