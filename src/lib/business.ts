export const business = {
  name: "LASH N' BROW By Fernanda",
  tagline: "PhiBrows lash & brow artist",
  description: "PhiBrows-certified lash and brow artist operating within the Anahata studio in Gränby.",
  category: "Beauty",
  address: {
    street: "Soldathemsvägen 1",
    postalCode: "752 37",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "070-162 86 00",
  phoneLink: "tel:+46701628600",
  email: "fernanda_imbia@icloud.com",
  emailLink: "mailto:fernanda_imbia@icloud.com",
  bookingUrl: "https://www.bokadirekt.se/places/lash-n-brow-by-fernanda-34514",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Fernanda",
  rating: 4.9,
  reviewCount: 204,
  foundedYear: null as number | null,
  coordinates: { lat: 59.862, lng: 17.625 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos LASH N' BROW By Fernanda.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 204 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Soldathemsvägen 1 i Uppsala.",
    },
  ],
  services: [
    {
      id: "volymfransar",
      name: "Volymfransar",
      description: "Professionell volymfransar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "lashlift",
      name: "Lashlift",
      description: "Professionell lashlift med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "browlift",
      name: "Browlift",
      description: "Professionell browlift med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "phibrows-microblading",
      name: "PhiBrows microblading",
      description: "Professionell phibrows microblading med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "mixfransar",
      name: "Mixfransar",
      description: "Professionell mixfransar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos LASH N' BROW By Fernanda. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar LASH N' BROW By Fernanda varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "fransförlängning Gränby",
    "microblading Uppsala",
    "lashlift Uppsala",
    "browlift Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
