import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const services = [
  {
    slug: "appliance-repair",
    name: "Major Appliance Repair",
    navLabel: "Appliance Repair",
    title: "Appliance Repair in Orange County | QSS Home Services",
    description:
      "Major appliance repair in Orange County for washers, dryers, refrigerators, ovens, and dishwashers. Call QSS Home Services at (714) 884-9112.",
    h1: "Major appliance repair across Orange County.",
    lead: "When a washer, dryer, fridge, oven, or dishwasher stops cooperating, QSS diagnoses the issue carefully and gets it working again.",
    image: "service-kitchen",
    imageAlt: "QSS Home Services technician helping a homeowner with kitchen appliance and electrical service",
    bullets: [
      "Washers, dryers, refrigerators, ranges, ovens, and dishwashers",
      "Clear explanation of what failed and what repair options make sense",
      "Careful work in occupied homes — tidy, respectful, and communication-first",
      "Serving Newport Beach and communities across Orange County",
    ],
    body: [
      "Appliance breakdowns rarely wait for a convenient day. QSS Home Services provides major appliance repair for Orange County homeowners who want honest diagnostics and dependable workmanship.",
      "Owner Michael Holder shows up prepared, explains what he finds, and focuses on practical repairs that restore everyday comfort — from laundry day to a cold fridge.",
    ],
  },
  {
    slug: "appliance-installation",
    name: "Major Appliance Installations",
    navLabel: "Installations",
    title: "Appliance Installation in Orange County | QSS Home Services",
    description:
      "Professional major appliance installation in Orange County. Clean hookups for new washers, dryers, refrigerators, ovens, and more. Call (714) 884-9112.",
    h1: "Clean, careful appliance installations.",
    lead: "New appliances deserve a proper install — level, connected, tested, and ready for daily use.",
    image: "service-kitchen",
    imageAlt: "QSS technician supporting appliance and electrical work in a modern Orange County kitchen",
    bullets: [
      "Installations for major kitchen and laundry appliances",
      "Attention to fit, connections, leveling, and basic startup checks",
      "Less stress after delivery day — we handle the setup details",
      "Orange County service based in Newport Beach",
    ],
    body: [
      "A new appliance only feels finished when it is installed correctly. QSS Home Services helps Orange County homeowners with major appliance installations that are neat, secure, and ready to run.",
      "Whether you are replacing a washer and dryer or setting up kitchen equipment, we focus on careful connections and a clean job site.",
    ],
  },
  {
    slug: "appliance-maintenance",
    name: "Major Appliance Maintenance",
    navLabel: "Maintenance",
    title: "Appliance Maintenance in Orange County | QSS Home Services",
    description:
      "Preventive major appliance maintenance in Orange County to extend equipment life and reduce surprise failures. Call QSS at (714) 884-9112.",
    h1: "Maintenance that helps appliances last longer.",
    lead: "Small upkeep now can prevent bigger repair bills later — and keep laundry, cooking, and cooling running smoothly.",
    image: "service-garage",
    imageAlt: "QSS Home Services technician discussing home maintenance with a homeowner",
    bullets: [
      "Preventive care for major household appliances",
      "Helpful checks that catch wear before it turns into downtime",
      "Guidance on safer, smarter everyday use",
      "Ideal for busy Orange County households",
    ],
    body: [
      "Regular appliance maintenance is one of the simplest ways to protect your investment. QSS Home Services offers major appliance maintenance for Orange County homes that want fewer surprises.",
      "We help keep equipment cleaner, safer, and more reliable — so you spend less time dealing with unexpected breakdowns.",
    ],
  },
  {
    slug: "dryer-fire-prevention",
    name: "Dryer Fire Prevention",
    navLabel: "Dryer Fire Prevention",
    title: "Dryer Fire Prevention in Orange County | QSS Home Services",
    description:
      "Dryer fire prevention service in Orange County. Reduce lint buildup and overheating risk. Call QSS Home Services at (714) 884-9112.",
    h1: "Dryer fire prevention for safer homes.",
    lead: "Lint buildup is a leading dryer fire risk. QSS helps Orange County families reduce that hazard with thorough dryer safety service.",
    image: "service-garage",
    imageAlt: "QSS technician explaining home equipment maintenance to a homeowner",
    bullets: [
      "Focus on lint-related fire risk around dryers and vents",
      "Pairs naturally with dryer duct cleaning for better airflow",
      "Practical safety guidance for homeowners",
      "Serving Newport Beach and Orange County",
    ],
    body: [
      "Dryers work hard — and trapped lint can create serious heat and fire risk. QSS Home Services provides dryer fire prevention support so Orange County homeowners can feel more confident every laundry day.",
      "We combine careful inspection mindset with duct-cleaning capability to help restore safer operating conditions.",
    ],
  },
  {
    slug: "dryer-duct-cleaning",
    name: "Dryer Duct Cleaning",
    navLabel: "Dryer Duct Cleaning",
    title: "Dryer Duct Cleaning in Orange County | QSS Home Services",
    description:
      "Dryer duct cleaning in Orange County to restore airflow, improve efficiency, and reduce overheating risk. Call (714) 884-9112.",
    h1: "Dryer duct cleaning that restores airflow.",
    lead: "Clogged dryer ducts make dryers work harder, run hotter, and take longer. We clear them thoroughly.",
    image: "service-electrical-panel",
    imageAlt: "QSS Home Services technician explaining outdoor home systems to a family",
    bullets: [
      "Thorough clearing of dryer duct pathways",
      "Better airflow for faster, more efficient drying",
      "Supports dryer fire prevention goals",
      "Available across Orange County",
    ],
    body: [
      "If clothes take forever to dry or the dryer feels unusually hot, the duct may be restricted. QSS Home Services provides dryer duct cleaning for Orange County homes that need clearer airflow and safer operation.",
      "Clean ducts help your dryer run more efficiently and reduce the lint buildup that contributes to overheating risk.",
    ],
  },
  {
    slug: "whole-home-duct-cleaning",
    name: "Whole Home Duct Cleanings",
    navLabel: "Whole-Home Ducts",
    title: "Whole Home Duct Cleaning in Orange County | QSS Home Services",
    description:
      "Whole home duct cleaning in Orange County to support cleaner air and better HVAC performance. Call QSS at (714) 884-9112.",
    h1: "Whole-home duct cleaning for cleaner airflow.",
    lead: "Dust and debris in ductwork can affect comfort and system performance. QSS provides whole-home duct cleanings across Orange County.",
    image: "service-electrical-pool",
    imageAlt: "QSS technician reviewing outdoor home systems in an Orange County backyard",
    bullets: [
      "Whole-home duct cleaning service",
      "Supports cleaner-feeling air circulation",
      "Helpful for homes with visible dust or reduced airflow concerns",
      "Newport Beach–based, Orange County–wide",
    ],
    body: [
      "Your duct system moves air through the whole house. When it collects dust and debris, comfort and performance can suffer. QSS Home Services offers whole home duct cleanings for Orange County residences.",
      "We treat duct cleaning as home care — careful, clear, and focused on practical results for everyday living.",
    ],
  },
  {
    slug: "light-plumbing",
    name: "Light Plumbing",
    navLabel: "Light Plumbing",
    title: "Light Plumbing in Orange County | QSS Home Services",
    description:
      "Light plumbing help for Orange County homes — everyday household plumbing support without waiting on a full remodel crew. Call (714) 884-9112.",
    h1: "Light plumbing help when you need it.",
    lead: "Not every plumbing need is a full renovation. QSS handles practical light plumbing support for Orange County homeowners.",
    image: "service-kitchen",
    imageAlt: "QSS Home Services technician assisting a homeowner in a modern kitchen",
    bullets: [
      "Everyday light plumbing support around the home",
      "Helpful for smaller household needs and service calls",
      "Clear communication and tidy work",
      "Serving Orange County from Newport Beach",
    ],
    body: [
      "Light plumbing issues can disrupt a whole day. QSS Home Services provides light plumbing support for Orange County homes that need reliable help without the complexity of a major remodel project.",
      "If you are unsure whether a job fits light plumbing, call us — we will tell you honestly what we can handle.",
    ],
  },
  {
    slug: "light-electrical",
    name: "Light Electrical",
    navLabel: "Light Electrical",
    title: "Light Electrical in Orange County | QSS Home Services",
    description:
      "Light electrical service in Orange County for outlets, fixtures, and everyday electrical needs. Call QSS Home Services at (714) 884-9112.",
    h1: "Light electrical service done carefully.",
    lead: "From outlets to fixtures and practical electrical checks, QSS helps Orange County homes with clear, careful light electrical work.",
    image: "service-electrical-panel",
    imageAlt: "Michael Holder of QSS Home Services explaining an electrical panel to a family",
    bullets: [
      "Outlets, fixtures, and other light electrical needs",
      "Clear walkthroughs so homeowners understand the work",
      "Professional, customer-focused service",
      "Orange County coverage including Newport Beach",
    ],
    body: [
      "Electrical issues need care and clarity. QSS Home Services provides light electrical work for Orange County homeowners — the kind of practical jobs that keep rooms usable and systems understandable.",
      "Owner Michael Holder explains what he sees and keeps the focus on safe, tidy results.",
    ],
  },
];

function relatedLinks(currentSlug) {
  return services
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 4)
    .map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`)
    .join("\n            ");
}

function pageShell({
  title,
  description,
  canonical,
  h1,
  lead,
  eyebrow,
  bodyHtml,
  image,
  imageAlt,
  jsonLd,
  activePath,
}) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="QSS Home Services" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="https://qsshomeservices.com/assets/images/og-share.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://qsshomeservices.com/assets/images/og-share.jpg" />
    <link rel="icon" type="image/png" href="/assets/images/favicon-32.png" />
    <link rel="apple-touch-icon" href="/assets/images/logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/styles.css?v=20260728b" />
    <script type="application/ld+json">${jsonLd}</script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="QSS Home Services home">
          <img src="/assets/images/logo.png" alt="QSS Home Services" width="160" height="52" />
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a href="/services/"${activePath === "/services/" ? ' aria-current="page"' : ""}>Services</a>
          <a href="/#about">About</a>
          <a href="/#work">Our Work</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a class="header-phone" href="tel:+17148849112">(714) 884-9112</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
      <div id="mobile-nav" class="mobile-nav" hidden>
        <a href="/services/">Services</a>
        <a href="/#about">About</a>
        <a href="/#work">Our Work</a>
        <a href="/#contact">Contact</a>
        <a class="btn btn-primary" href="tel:+17148849112">Call (714) 884-9112</a>
      </div>
    </header>

    <main id="main">
      <section class="page-hero">
        <div class="page-hero-inner page-hero-split">
          <div class="page-hero-copy">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/services/">Services</a>
              <span aria-hidden="true">/</span>
              <span>${eyebrow}</span>
            </nav>
            <p class="eyebrow">${eyebrow}</p>
            <h1>${h1}</h1>
            <p class="page-lead">${lead}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:+17148849112">Call (714) 884-9112</a>
              <a class="btn btn-secondary dark" href="/#contact">Request a callback</a>
            </div>
          </div>
          <figure class="page-hero-media">
            <picture>
              <source srcset="/assets/images/${image}.webp" type="image/webp" />
              <img src="/assets/images/${image}.jpg" alt="${imageAlt}" width="1600" height="1067" fetchpriority="high" />
            </picture>
          </figure>
        </div>
      </section>

      <section class="service-detail">
        <div class="service-detail-inner">
          ${bodyHtml}
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/assets/images/logo.png" alt="QSS Home Services" width="160" height="56" />
          <p>QSS Home Services · Owned by Michael Holder</p>
        </div>
        <p class="footer-meta">
          Servicing Orange County <span aria-hidden="true">🍊</span> · Newport Beach, CA 92663 ·
          <a href="tel:+17148849112">(714) 884-9112</a>
        </p>
        <p class="footer-copy">&copy; <span id="year"></span> QSS Home Services. All rights reserved.</p>
      </div>
    </footer>
    <a class="mobile-call" href="tel:+17148849112">Call (714) 884-9112</a>
    <script src="/assets/js/main.js" defer></script>
  </body>
</html>
`;
}

for (const service of services) {
  const dir = path.join(root, "services", service.slug);
  fs.mkdirSync(dir, { recursive: true });

  const bodyHtml = `
            ${service.body.map((p) => `<p>${p}</p>`).join("\n            ")}
            <h2>What this service covers</h2>
            <ul class="check-list">
              ${service.bullets.map((b) => `<li>${b}</li>`).join("\n              ")}
            </ul>
            <h2>Related services</h2>
            <ul class="related-services">
              ${relatedLinks(service.slug)}
            </ul>
            <p class="service-cta-note">
              Ready to book? Call <a href="tel:+17148849112">(714) 884-9112</a> or
              <a href="/#contact">send a message</a>.
            </p>`;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://qsshomeservices.com/services/${service.slug}/`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Orange County, California",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "QSS Home Services",
      telephone: "+17148849112",
      url: "https://qsshomeservices.com/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Newport Beach",
        addressRegion: "CA",
        postalCode: "92663",
        addressCountry: "US",
      },
    },
  });

  const html = pageShell({
    title: service.title,
    description: service.description,
    canonical: `https://qsshomeservices.com/services/${service.slug}/`,
    h1: service.h1,
    lead: service.lead,
    eyebrow: service.name,
    bodyHtml,
    image: service.image,
    imageAlt: service.imageAlt,
    jsonLd,
    activePath: "/services/",
  });

  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log("wrote", service.slug);
}

const hub = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Home Services in Orange County | QSS Home Services</title>
    <meta
      name="description"
      content="Browse QSS Home Services in Orange County: appliance repair, installations, maintenance, dryer fire prevention, duct cleaning, light plumbing, and light electrical."
    />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="https://qsshomeservices.com/services/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Home Services in Orange County | QSS Home Services" />
    <meta property="og:description" content="Appliance repair, installs, dryer safety, duct cleaning, light plumbing &amp; electrical across Orange County." />
    <meta property="og:url" content="https://qsshomeservices.com/services/" />
    <meta property="og:image" content="https://qsshomeservices.com/assets/images/og-share.jpg" />
    <link rel="icon" type="image/png" href="/assets/images/favicon-32.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/styles.css?v=20260728b" />
    <script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "QSS Home Services — Services",
        url: "https://qsshomeservices.com/services/",
        isPartOf: { "@type": "WebSite", url: "https://qsshomeservices.com/" },
        about: services.map((s) => ({
          "@type": "Service",
          name: s.name,
          url: `https://qsshomeservices.com/services/${s.slug}/`,
        })),
      })}
    </script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="QSS Home Services home">
          <img src="/assets/images/logo.png" alt="QSS Home Services" width="160" height="52" />
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a href="/services/" aria-current="page">Services</a>
          <a href="/#about">About</a>
          <a href="/#work">Our Work</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a class="header-phone" href="tel:+17148849112">(714) 884-9112</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
      <div id="mobile-nav" class="mobile-nav" hidden>
        <a href="/services/">Services</a>
        <a href="/#about">About</a>
        <a href="/#work">Our Work</a>
        <a href="/#contact">Contact</a>
        <a class="btn btn-primary" href="tel:+17148849112">Call (714) 884-9112</a>
      </div>
    </header>
    <main id="main">
      <section class="page-hero">
        <div class="page-hero-inner">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Services</span>
          </nav>
          <p class="eyebrow">Orange County</p>
          <h1>Services for the systems your home depends on.</h1>
          <p class="page-lead">
            Appliance repair, installs, maintenance, dryer safety, duct cleaning, light plumbing, and light electrical — from Newport Beach across Orange County.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="tel:+17148849112">Call (714) 884-9112</a>
            <a class="btn btn-secondary dark" href="/#contact">Request a callback</a>
          </div>
        </div>
      </section>
      <section class="services">
        <div class="section-inner">
          <ul class="service-list service-list-links">
            ${services
              .map(
                (s) => `<li>
              <h2><a href="/services/${s.slug}/">${s.name}</a></h2>
              <p>${s.lead}</p>
            </li>`
              )
              .join("\n            ")}
          </ul>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/assets/images/logo.png" alt="QSS Home Services" width="160" height="56" />
          <p>QSS Home Services · Owned by Michael Holder</p>
        </div>
        <p class="footer-meta">
          Servicing Orange County <span aria-hidden="true">🍊</span> · Newport Beach, CA 92663 ·
          <a href="tel:+17148849112">(714) 884-9112</a>
        </p>
        <p class="footer-copy">&copy; <span id="year"></span> QSS Home Services. All rights reserved.</p>
      </div>
    </footer>
    <a class="mobile-call" href="tel:+17148849112">Call (714) 884-9112</a>
    <script src="/assets/js/main.js" defer></script>
  </body>
</html>
`;

fs.mkdirSync(path.join(root, "services"), { recursive: true });
fs.writeFileSync(path.join(root, "services", "index.html"), hub);
console.log("wrote services hub");
