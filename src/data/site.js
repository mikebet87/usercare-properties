// Central content configuration for UserCare Properties.
// Edit values here — pages and components read from this file.

export const site = {
  name: "UserCare Properties",
  tagline: "Fine Addresses in Kenya & Dubai",
  phoneIntl: "+254712197440",
  phoneDisplay: "+254 712 197 440",
  whatsapp: "254712197440",
  email: "info@usercareproperties.com",
  locations: "Nairobi · Dubai",
  hours: "Mon – Sat, 8:00 – 18:00 EAT",
  kenyaOffice: "Joska, Kangundo Road, Nairobi East",
  dubaiDesk: "Dubai Investment Desk — by appointment",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of Advisory" },
  { value: 480, suffix: "+", label: "Families & Investors Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 2, suffix: "", label: "World-Class Markets" },
];

export const properties = [
  {
    slug: "joska-palms",
    name: "Joska Palms",
    badge: "Kenya",
    location: "Joska, Kangundo Road",
    region: "Nairobi East",
    type: "Gated Family Community",
    price: "From KES 6.9M",
    payment: "20% deposit · balance in 12 months",
    heroImage: "/images/kenya-home.jpg",
    heroAlt: "Modern family home inside the Joska Palms gated community",
    tagline:
      "A walled, guarded enclave of modern family homes along Nairobi's fastest-growing eastern corridor.",
    overview: [
      "Joska Palms is our Kenyan flagship — a master-planned gated community crafted for families who want space, security and permanence without leaving Nairobi's orbit. Tree-lined internal roads, landscaped green pockets and homes designed for the East African climate come together in an address that feels like a retreat and appreciates like an investment.",
      "Every plot is sold with a ready individual freehold title deed, and our team walks buyers through conveyancing — including diaspora clients purchasing entirely remotely. A flexible payment plan keeps ownership within reach: reserve with 20% and clear the balance across 12 months.",
    ],
    facts: [
      { label: "Location", value: "Joska, Kangundo Rd" },
      { label: "Home Types", value: "3–4 BR Bungalows & Maisonettes" },
      { label: "Plot Sizes", value: "50 × 100 ft" },
      { label: "Entry Price", value: "KES 6.9M" },
      { label: "Payment Plan", value: "20% deposit · 12 months" },
      { label: "Title", value: "Freehold, individual deeds" },
    ],
    amenities: [
      "Perimeter wall with electric fence",
      "24/7 guarded gatehouse & patrols",
      "Cabro-paved internal roads",
      "Borehole & county water supply",
      "Landscaped parks & playgrounds",
      "Full street lighting",
      "School & shopping centre minutes away",
      "Ready individual title deeds",
    ],
    gallery: [
      { src: "/images/family-home.jpg", alt: "Contemporary maisonette with private garden" },
      { src: "/images/kitchen.jpg", alt: "Modern fitted kitchen in a Joska Palms home" },
      { src: "/images/bedroom.jpg", alt: "Bright master bedroom" },
      { src: "/images/suburb-aerial.jpg", alt: "Aerial view of the master-planned estate" },
    ],
    featured: true,
    highlight: true,
  },
  {
    slug: "damac-islands-2",
    name: "DAMAC Islands 2",
    badge: "Dubai",
    location: "Dubai Land",
    region: "Dubai",
    type: "Waterfront Residences",
    price: "From AED 2.1M",
    payment: "Developer payment plan available",
    heroImage: "/images/island.jpg",
    heroAlt: "Resort-style lagoon and poolscape",
    tagline:
      "Dubai's island-inspired waterfront community — resort living engineered for capital growth.",
    overview: [
      "DAMAC Islands 2 brings a Maldives sensibility to Dubai: turquoise lagoons, white-sand edges and residences arranged around an aquatic amenity core. As an authorised channel partner, UserCare secures allocations in each release before public sell-out — often within days.",
      "With projected rental yields of 6–8% and a structured developer payment plan, this is the Dubai entry point our investors ask for by name.",
    ],
    facts: [
      { label: "Location", value: "Dubai Land" },
      { label: "Residences", value: "1–5 BR apartments & villas" },
      { label: "Entry Price", value: "AED 2.1M" },
      { label: "Payment Plan", value: "Developer plan available" },
    ],
    amenities: [
      "Lagoon-inspired amenity core",
      "Waterfront promenade",
      "Floating cinema & island dining",
      "Branded residences collection",
      "Family & wellness facilities",
      "Private beach access points",
    ],
    gallery: [
      { src: "/images/dubai-marina.jpg", alt: "Dubai Marina towers at golden hour" },
      { src: "/images/interior.jpg", alt: "Refined waterfront apartment interior" },
      { src: "/images/hero-dubai.jpg", alt: "Dubai skyline at sunset" },
    ],
    featured: true,
  },
  {
    slug: "azure-2",
    name: "Azure 2",
    badge: "Dubai",
    location: "Business Bay",
    region: "Dubai",
    type: "Designer Apartments",
    price: "From AED 1.3M",
    payment: "Developer payment plan available",
    heroImage: "/images/tower.jpg",
    heroAlt: "Sculpted residential tower facade",
    tagline:
      "Sculpted high-rise living on the Business Bay canal, minutes from Downtown Dubai.",
    overview: [
      "Azure 2 pairs a confident, glass-sculpted facade with interiors finished to a designer brief. Floor-to-ceiling glazing frames the canal on one side and the Burj-lined skyline on the other — a front-row address for professionals and a high-occupancy asset for investors.",
      "Business Bay's tenant demand is among the strongest in the emirate, making Azure 2 a favourite for buyers prioritising immediate rental performance.",
    ],
    facts: [
      { label: "Location", value: "Business Bay" },
      { label: "Residences", value: "1–3 BR apartments" },
      { label: "Entry Price", value: "AED 1.3M" },
      { label: "Payment Plan", value: "Developer plan available" },
    ],
    amenities: [
      "Canal & skyline views",
      "Resort-grade pool deck",
      "Fitness centre & sauna",
      "Minutes to Downtown Dubai",
      "High rental-occupancy district",
    ],
    gallery: [
      { src: "/images/facade.jpg", alt: "Architectural facade detail" },
      { src: "/images/burj.jpg", alt: "Burj Khalifa above Downtown Dubai" },
      { src: "/images/interior.jpg", alt: "Designer apartment interior" },
    ],
    featured: false,
  },
  {
    slug: "chelsea-residences",
    name: "Chelsea Residences",
    badge: "Dubai",
    location: "Motor City",
    region: "Dubai",
    type: "Signature Collection",
    price: "From AED 1.6M",
    payment: "Developer payment plan available",
    heroImage: "/images/interior.jpg",
    heroAlt: "Refined apartment interior with skyline view",
    tagline:
      "Spacious, family-scaled residences in one of Dubai's most established communities.",
    overview: [
      "Chelsea Residences answers the question Dubai renters ask most: space. Generous one-to-three-bedroom layouts, green courtyards below and an established Motor City infrastructure around it — schools, retail and the Autodrome — make this a lifestyle purchase as much as a financial one.",
      "For end-users and long-hold investors alike, it is the definition of a sensible luxury buy.",
    ],
    facts: [
      { label: "Location", value: "Motor City" },
      { label: "Residences", value: "1–3 BR apartments" },
      { label: "Entry Price", value: "AED 1.6M" },
      { label: "Payment Plan", value: "Developer plan available" },
    ],
    amenities: [
      "Generous family-sized layouts",
      "Landscaped courtyards",
      "Covered resident parking",
      "Schools & retail on doorstep",
      "Established, mature community",
    ],
    gallery: [
      { src: "/images/interior2.jpg", alt: "Sunlit living room with designer furnishings" },
      { src: "/images/hero-dubai.jpg", alt: "Dubai skyline at sunset" },
      { src: "/images/facade.jpg", alt: "Architectural facade detail" },
    ],
    featured: false,
  },
];

export const kenyaBullets = [
  "Freehold title deeds, transferred to your name",
  "Walled, guarded and lit — built for family life",
  "Corridor land values compounding year on year",
  "Full remote-purchase support for the diaspora",
];

export const whyKenya = [
  { value: "KES 6.9M", label: "Entry Price at Joska Palms" },
  { value: "±15% p.a.", label: "Corridor Land Appreciation" },
  { value: "$4B+", label: "Annual Diaspora Inflows" },
  { value: "45 min", label: "Drive to Nairobi CBD" },
];

export const whyDubai = [
  { value: "0%", label: "Income & Capital Gains Tax" },
  { value: "6–8%", label: "Projected Annual Rental Yields" },
  { value: "10yr", label: "Golden Visa Eligibility" },
  { value: "24/7", label: "World-Class Security & Lifestyle" },
];

export const destinations = [
  {
    name: "Kenya",
    title: "Rooted in Home",
    image: "/images/suburb-aerial.jpg",
    alt: "Aerial view of a master-planned Kenyan estate",
    copy: "Secure, family-first gated communities on Nairobi's fastest-growing corridor — and a seamless path home for the diaspora.",
    href: "/properties/joska-palms",
    bullets: kenyaBullets,
  },
  {
    name: "Dubai",
    title: "The City of Tomorrow",
    image: "/images/dubai-marina.jpg",
    alt: "Dubai Marina towers at golden hour",
    copy: "Tax-free yields, off-plan masterpieces and the world's most audacious skyline. We open doors to Dubai's finest developer launches.",
    href: "/properties",
    stats: whyDubai,
  },
];

export const services = [
  {
    index: "01",
    title: "Investment Advisory",
    market: "Dubai & Kenya",
    copy: "Data-driven portfolio strategy across premium and high-growth corridors, with projected rental yields of 6–8% in Dubai and structured off-plan entry points.",
    image: "/images/facade.jpg",
  },
  {
    index: "02",
    title: "Residential Sales",
    market: "Family Home Acquisition",
    copy: "From first site visit to key handover — a transparent, guided journey into secure, amenity-rich communities matched to your family's lifestyle.",
    image: "/images/handover.jpg",
  },
  {
    index: "03",
    title: "Diaspora Services",
    market: "Kenyans Abroad",
    copy: "Streamlined, fully remote acquisition back home or in Dubai. Virtual viewings, secure escrow, and portfolio care from tenant placement to maintenance.",
    image: "/images/savanna-giraffe.jpg",
  },
  {
    index: "04",
    title: "Legal & Financial Facilitation",
    market: "End-to-End",
    copy: "Trusted conveyancing counsel and top-tier mortgage partners handle the paperwork — full compliance, zero red tape, complete peace of mind.",
    image: "/images/interior2.jpg",
  },
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    copy: "A focused conversation about your goals, budget and timeline — in person, on call or over WhatsApp.",
  },
  {
    step: "02",
    title: "Curated Shortlist",
    copy: "We present only what fits: vetted properties with honest numbers on yield, appreciation and total cost.",
  },
  {
    step: "03",
    title: "Reservation & Legal",
    copy: "Offers, reservations, sale agreements and conveyancing — handled with our trusted legal partners.",
  },
  {
    step: "04",
    title: "Handover & Aftercare",
    copy: "Keys, title transfer, and optional letting or management. Our relationship starts at handover, it doesn't end there.",
  },
];

export const values = [
  {
    title: "Precision",
    copy: "Every recommendation is backed by data on pricing, absorption and rental depth — never by commission size.",
  },
  {
    title: "Candour",
    copy: "If a deal doesn't serve you, we say so. Advisory means telling you what you need to hear.",
  },
  {
    title: "Care",
    copy: "Property is personal. We treat your purchase with the diligence we'd demand for our own families.",
  },
  {
    title: "Permanence",
    copy: "Title deeds, long-term value, relationships measured in decades. We build for the long run.",
  },
];

export const testimonials = [
  {
    quote:
      "We bought our family home in Joska without setting foot in the country. Every viewing, payment and document was handled with total transparency.",
    name: "Wanjiru M.",
    role: "Diaspora Investor, United Kingdom",
  },
  {
    quote:
      "Their advisory turned my first Dubai off-plan purchase into the easiest investment I've ever made. Clear numbers, no pressure, constant updates.",
    name: "David K.",
    role: "Portfolio Investor, Nairobi",
  },
  {
    quote:
      "From shortlist to handover in Business Bay, everything was choreographed. The team treats your purchase like their own investment.",
    name: "Sarah A.",
    role: "Homeowner, Dubai Marina",
  },
];

export const marqueePhrases = [
  "Joska Palms",
  "Gated Communities",
  "Diaspora Investment",
  "Ready Title Deeds",
  "Off-Plan Dubai",
  "Trusted Developers",
  "Nairobi · Dubai",
];
