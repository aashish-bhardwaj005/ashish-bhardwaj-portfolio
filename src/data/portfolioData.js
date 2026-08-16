export const PERSONAL_INFO = {
  name: "Ashish Bhardwaj",
  title: "Senior Frontend & eCommerce Developer",
  tagline: "10+ Years of Experience Building Fast, Pixel-Perfect Shopify Stores, WordPress Websites & Modern React Apps",
  experienceYears: "10+",
  websitesDelivered: "100+",
  liveProjectsCount: "30+",
  clientSatisfaction: "99%",
  location: "Mohali, Punjab, India",
  email: "ashishsharma00345@gmail.com",
  phonePrimary: "+91 9878405955",
  phoneSecondary: "+91 9418800449",
  whatsapp: "+919878405955",
  linkedin: "https://linkedin.com/in/ashish-sharma-uiux",
  github: "https://github.com",
  summary: `Senior Frontend Developer with over a decade of hands-on experience creating responsive, high-performing websites and eCommerce solutions. I specialize in Shopify Liquid, WordPress/WooCommerce, HTML5/CSS3/SCSS, modern JavaScript, and React.

Whether converting complex Figma and Adobe XD designs into pixel-perfect pages, optimizing stores for faster load times, or mentoring frontend teams, I focus on delivering clean, reliable code that drives real business results.`
};

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Code2",
    description: "Creating responsive, fast, and accessible web experiences for all devices.",
    skills: [
      { name: "HTML5 & Semantic Markup", level: 98 },
      { name: "CSS3 / SCSS / Tailwind CSS", level: 96 },
      { name: "JavaScript (ES6+) & Modern Web APIs", level: 92 },
      { name: "React (Component Architecture & Hooks)", level: 88 },
      { name: "Bootstrap & Modular UI Systems", level: 95 },
      { name: "Cross-Browser & Device Compatibility", level: 98 },
      { name: "Mobile-First UX & Layouts", level: 99 },
      { name: "jQuery & Legacy Code Updates", level: 90 }
    ]
  },
  {
    id: "cms-ecommerce",
    title: "Shopify & WordPress Development",
    icon: "ShoppingBag",
    description: "Building custom Shopify themes, WooCommerce setups, and easy-to-manage client websites.",
    skills: [
      { name: "Shopify Liquid Theme Development (Store 2.0)", level: 98 },
      { name: "Shopify App Setup & Store Customization", level: 95 },
      { name: "WordPress Custom Theme & Plugin Development", level: 94 },
      { name: "WooCommerce Store Setup & Checkout Flows", level: 92 },
      { name: "Page Builders (Elementor, WPBakery, Gutenberg)", level: 95 },
      { name: "Speed & Core Web Vitals Optimization", level: 96 }
    ]
  },
  {
    id: "design-tools",
    title: "Design-to-Code Implementation",
    icon: "Palette",
    description: "Translating Figma, Adobe XD, and Photoshop designs into 100% pixel-perfect live pages.",
    skills: [
      { name: "Figma to HTML / SCSS / React", level: 98 },
      { name: "Adobe XD to Production Code", level: 95 },
      { name: "Adobe Photoshop & PSD to HTML", level: 94 },
      { name: "Design System & Component Consistency", level: 94 },
      { name: "Accessibility Standards (WCAG & ARIA)", level: 90 }
    ]
  },
  {
    id: "backend-devops",
    title: "Integrations & Engineering Tools",
    icon: "Server",
    description: "Connecting REST APIs, managing version control with Git, and reliable deployments.",
    skills: [
      { name: "PHP & WordPress Custom Functions", level: 85 },
      { name: "Laravel (Blade Views & Frontend Integration)", level: 80 },
      { name: "REST APIs & JSON Data Handling", level: 88 },
      { name: "Git, GitHub & Branching Workflows", level: 92 },
      { name: "cPanel, Web Hosting & SEO Audits", level: 90 }
    ]
  }
];

export const PROJECT_CATEGORIES = [
  { id: "All", label: "All Projects" },
  { id: "Shopify", label: "Shopify" },
  { id: "WordPress", label: "WordPress" },
  { id: "Laravel", label: "Laravel" },
  { id: "React", label: "React" },
  { id: "Others", label: "Others" }
];

export const PROJECTS_LIST = [
  {
    id: "reskin-cosmetics",
    title: "Reskin Cosmetics",
    url: "https://reskin-cosmetics.com/",
    category: "Shopify",
    badge: "Shopify Store",
    region: "Global / Europe",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "High-end skincare & cosmetics eCommerce brand featuring custom product sliders, shade selectors, and optimized mobile checkout experience.",
    tech: ["Shopify Liquid", "HTML5", "SCSS", "JavaScript", "CSS3"],
    highlights: ["Custom shade selector UI", "Mobile-first checkout optimization", "Fast page loads"],
    featured: true
  },
  {
    id: "rollz-europe",
    title: "Rollz Europe",
    url: "https://rollzeurope.com/",
    category: "Shopify",
    badge: "Shopify Flagship",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Premium mobility & rollator manufacturer store with multi-currency layout, custom product video integrations, and interactive accessory builder.",
    tech: ["Shopify Liquid", "JavaScript (ES6)", "SCSS", "Responsive Design"],
    highlights: ["Multi-language ready", "Interactive accessory customizer", "Smooth animations"],
    featured: true
  },
  {
    id: "befa-limburg",
    title: "BEFA Limburg",
    url: "https://befa-limburg.de/",
    category: "Shopify",
    badge: "E-Commerce / Web",
    region: "Germany",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "Corporate services platform in Germany featuring modern responsive layout, appointment request workflow, and accessibility standards.",
    tech: ["Shopify / Web", "PHP", "CSS3", "JavaScript", "SEO Optimization"],
    highlights: ["Pixel-perfect desktop & mobile design", "Custom inquiry forms", "High PageSpeed score"],
    featured: true
  },
  {
    id: "dr-dr-troll-cosmetics",
    title: "Dr. Dr. Troll Cosmetics",
    url: "https://dr-dr-troll-cosmetics.de/",
    category: "Shopify",
    badge: "E-Commerce Store",
    region: "Germany",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    description: "Dermatology-grade cosmetic brand website with bespoke product pages, clinical trial showcases, and custom checkout workflow.",
    tech: ["Shopify", "E-Commerce", "SCSS", "JavaScript"],
    highlights: ["Custom product gallery", "German tax & legal compliance", "Clean minimalist layout"],
    featured: true
  },
  {
    id: "arcaya-cosmetics",
    title: "Arcaya Cosmetics",
    url: "https://arcaya.de/",
    category: "Shopify",
    badge: "Luxury Store",
    region: "Germany",
    image: "https://images.unsplash.com/photo-1608248597263-0057e43a4522?auto=format&fit=crop&w=800&q=80",
    description: "Luxury skincare ampoules & cosmetics site with interactive ampoule finder, B2B/B2C portal presentation, and rich animations.",
    tech: ["Shopify", "JavaScript", "Custom CSS", "Figma to Code"],
    highlights: ["Interactive skin finder tool", "B2B client portal theme", "Speed optimized"],
    featured: true
  },
  {
    id: "umwelt-plakette",
    title: "Umwelt Plakette",
    url: "https://umwelt-plakette.at/",
    category: "Shopify",
    badge: "Custom Web Solution",
    region: "Austria",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    description: "Official eco-badge ordering portal for Austria & Germany featuring automated vehicle registration checker, multi-step order wizard, and clean UI.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap"],
    highlights: ["Multi-step form wizard", "Instant validation", "Mobile-optimized workflow"],
    featured: true
  },
  {
    id: "handicrafts-home-in",
    title: "Handicrafts Home (India)",
    url: "https://handicraftshome.in/",
    category: "Shopify",
    badge: "Shopify Store",
    region: "India",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description: "Artisanal home decor store presenting handcrafted bone inlay frames, trays, and boxes with custom collection filters and razorpay integration.",
    tech: ["Shopify Liquid", "CSS3", "JavaScript", "Custom Theme"],
    highlights: ["Rich collection mega-menu", "Custom product gallery zoom", "Fast mobile experience"],
    featured: false
  },
  {
    id: "handicrafts-home-com",
    title: "Handicrafts Home (Global)",
    url: "https://handicraftshome.com/",
    category: "Shopify",
    badge: "Shopify Store",
    region: "Global (US/UK)",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    description: "Global flagship store for luxury handcrafted home accent pieces serving international buyers with multi-currency pricing and fast shipping calculator.",
    tech: ["Shopify Liquid", "JavaScript", "SCSS", "Responsive Design"],
    highlights: ["Global currency switcher", "Custom review widgets", "High conversion landing pages"],
    featured: true
  },
  {
    id: "cockroach-janata-mall",
    title: "Cockroach Janata Mall",
    url: "https://cockroach-janata-mall.myshopify.com/",
    category: "Shopify",
    badge: "Shopify Custom Theme",
    region: "India",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    description: "High-volume retail store customized for rapid product search, promotional banners, and seamless cart drawer functionality.",
    tech: ["Shopify Liquid", "JavaScript", "CSS3", "jQuery"],
    highlights: ["Slide-out AJAX cart drawer", "Promotional countdown timers", "Responsive grid layout"],
    featured: false
  },
  {
    id: "feed-fido",
    title: "Feed Fido",
    url: "https://feedfido.myshopify.com/",
    category: "Shopify",
    badge: "Shopify Store",
    region: "Global",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant pet nutrition & organic dog food subscription store with custom plan calculator and interactive product benefits showcase.",
    tech: ["Shopify Liquid", "Tailwind CSS", "JavaScript", "Flexbox"],
    highlights: ["Pet nutrition calculator UI", "Subscription widget theme", "Playful brand design"],
    featured: false
  },
  {
    id: "dads-on-the-glass",
    title: "Dads On The Glass",
    url: "https://dadsontheglass.com/",
    category: "Shopify",
    badge: "Shopify Store",
    region: "USA",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    description: "Hockey podcast & apparel lifestyle shop featuring merchandise pre-orders, custom sizing charts, and media player embedding.",
    tech: ["Shopify Liquid", "HTML5", "SCSS", "JavaScript"],
    highlights: ["Podcast media embed integration", "Merch pre-order layout", "Dark theme aesthetics"],
    featured: false
  },
  {
    id: "miss-lavish-london",
    title: "Miss Lavish London",
    url: "https://misslavishlondon.com/",
    category: "Shopify",
    badge: "Shopify Fashion Store",
    region: "UK / International",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    description: "Leading UK fashion brand store showcasing bohemian kaftans, dresses, and resortwear with instant lookbook preview and filterable collections.",
    tech: ["Shopify Liquid", "JavaScript", "CSS Grid", "Custom Theme"],
    highlights: ["Interactive visual lookbook", "Filterable size & pattern grid", "Fast image lazy-loading"],
    featured: true
  },
  {
    id: "believe-roc",
    title: "Believe ROC",
    url: "https://believeroc.com/",
    category: "Shopify",
    badge: "Shopify Store",
    region: "USA",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    description: "Community fitness & activewear brand website featuring custom drop releases, member discount integrations, and high-impact hero banners.",
    tech: ["Shopify Theme", "Liquid", "JavaScript", "Bootstrap"],
    highlights: ["Custom drop countdown", "Social feed integration", "Seamless checkout"],
    featured: false
  },
  {
    id: "mystery-guides",
    title: "Mystery Guides",
    url: "https://www.mysteryguides.co.uk/",
    category: "Shopify",
    badge: "Interactive E-Commerce",
    region: "UK",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    description: "Interactive treasure hunt & mystery storybook store in the UK with custom trail selection map, gift voucher builder, and mystery quiz UI.",
    tech: ["Shopify / Custom Frontend", "JavaScript", "HTML5", "SCSS"],
    highlights: ["Interactive map trail selector", "Gift customization wizard", "Rich interactive story UI"],
    featured: true
  },
  {
    id: "peace-bicycles",
    title: "Peace Bicycles",
    url: "#",
    category: "Shopify",
    badge: "Shopify Theme Dev",
    region: "USA",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
    description: "Shopify theme development and custom bike builder interface implementation for comfortable city bikes.",
    tech: ["Shopify Liquid", "HTML5", "CSS3", "JavaScript"],
    highlights: ["Bike customization widget", "Responsive product presentation"],
    featured: false
  },
  {
    id: "coromal-australia",
    title: "Coromal Australia",
    url: "#",
    category: "Shopify",
    badge: "Shopify Customization",
    region: "Australia",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80",
    description: "Shopify store customization for iconic Australian caravan & camper trailer manufacturer.",
    tech: ["Liquid", "HTML5", "SCSS", "JavaScript"],
    highlights: ["Caravan feature comparison table", "Dealer locator UI"],
    featured: false
  },
  {
    id: "yoga-flame",
    title: "Yoga Flame Australia",
    url: "#",
    category: "Shopify",
    badge: "E-Commerce & Schedule",
    region: "Australia",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    description: "Responsive web store development and timetable schedule integration for premier Melbourne yoga studio.",
    tech: ["Shopify / Web", "CSS3", "JavaScript"],
    highlights: ["Interactive class timetable", "Instructor profiles grid"],
    featured: false
  },
  {
    id: "art-central",
    title: "Art Central",
    url: "#",
    category: "Shopify",
    badge: "Art E-Commerce",
    region: "International",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    description: "Frontend implementation and custom store integration for contemporary art gallery and exhibition portal.",
    tech: ["Shopify", "HTML5", "SCSS", "jQuery"],
    highlights: ["Art exhibition gallery filter", "Virtual art tour presentation"],
    featured: false
  },

  /* ---------------- WORDPRESS PROJECTS ---------------- */
  {
    id: "artcube-nation",
    title: "ArtCube Nation",
    url: "https://artcubenation.com/",
    category: "WordPress",
    badge: "WordPress Platform",
    region: "USA / Global",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    description: "Premier creative community network and rental marketplace platform for artists, filmmakers, and stage professionals with custom directory workflows.",
    tech: ["WordPress", "PHP", "JavaScript", "Custom Directory", "SCSS"],
    highlights: ["Member marketplace & rental listings", "Custom category search filtering", "Responsive user dashboard"],
    featured: true
  },
  {
    id: "elenas-models",
    title: "Elena's Models Matchmaking",
    url: "https://elenasmodelsmatchmaking.com/",
    category: "WordPress",
    badge: "Custom Theme & Plugin",
    region: "International",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    description: "High-traffic international dating & matchmaking platform featuring bespoke WordPress plugin development, custom user verification, and subscription gateways.",
    tech: ["WordPress", "Custom Plugin Development", "PHP", "MySQL", "JavaScript", "SCSS"],
    highlights: ["Custom matchmaking membership plugin", "Advanced multi-criteria profile filters", "Secure subscriber payment portal"],
    featured: true
  },
  {
    id: "valley-rock-inn",
    title: "Valley Rock Inn & Mountain Club",
    url: "https://valleyrockinn.com/",
    category: "WordPress",
    badge: "Luxury Resort & Hotel",
    region: "New York, USA",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Luxury boutique retreat & mountain club destination in Hudson Valley, NY featuring lodge booking workflows, organic dining, and event venue booking.",
    tech: ["WordPress", "Booking Engine Integration", "PHP", "SCSS", "JavaScript"],
    highlights: ["Luxury lodge & retreat reservation UI", "Seasonal restaurant & garden showcase", "High-performance visual storytelling"],
    featured: true
  },
  {
    id: "anticimex-global",
    title: "Anticimex",
    url: "https://www.anticimex.com/",
    category: "WordPress",
    badge: "Global Enterprise",
    region: "Global / Sweden",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Modern enterprise platform for global smart preventive pest control & hygiene corporation active across 20+ countries with localized regional hubs.",
    tech: ["WordPress Enterprise", "PHP", "Multi-Region / WPML", "Modern CSS", "JavaScript"],
    highlights: ["Multi-country localization architecture", "Enterprise accessibility & compliance", "Interactive smart service solution showcase"],
    featured: true
  },
  {
    id: "uvs-hospitality",
    title: "UVS Hospitality",
    url: "https://uvshospitality.com/",
    category: "WordPress",
    badge: "Hospitality & Dining",
    region: "USA / India",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: "Premier hospitality management & dining portfolio website showcasing fine-dining destinations, event catering reservations, and custom culinary menus.",
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Custom CSS"],
    highlights: ["Digital interactive dining menus", "Online table & event reservation flow", "Rich photography hero layouts"],
    featured: true
  },
  {
    id: "nanche-group",
    title: "Nanche Group",
    url: "https://nanchegroup.com.au/",
    category: "WordPress",
    badge: "Corporate Website",
    region: "Australia",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "Commercial property development & investment corporate website in Australia featuring real estate asset portfolios and investor relations layout.",
    tech: ["WordPress", "PHP", "SCSS", "JavaScript", "Responsive Design"],
    highlights: ["Interactive real estate asset gallery", "Corporate investor relations section", "Ultra-fast page speed performance"],
    featured: false
  },
  {
    id: "rf-comtech",
    title: "RF Comtech",
    url: "https://rfcomtech.com/",
    category: "WordPress",
    badge: "Engineering & Tech",
    region: "International",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "RF and microwave engineering solutions portal showcasing telecommunications hardware, product specifications, and B2B RFQ pipeline.",
    tech: ["WordPress", "PHP", "Custom Theme", "JavaScript", "SEO"],
    highlights: ["Technical product spec sheet viewer", "Instant RFQ quote request pipeline", "Engineered for B2B search visibility"],
    featured: false
  },
  {
    id: "seebesitzerverband-simssee",
    title: "Seebesitzerverband Simssee",
    url: "https://seebesitzerverband-simssee.de/",
    category: "WordPress",
    badge: "German Regional Portal",
    region: "Germany",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Official German lake owners association portal with member noticeboards, environmental documentation archives, and responsive layout.",
    tech: ["WordPress", "PHP", "SCSS", "Responsive Web", "German Compliance"],
    highlights: ["Document library & download portal", "German DSGVO privacy compliance", "Clean alpine design aesthetics"],
    featured: false
  },
  {
    id: "karv-group",
    title: "Karv Group",
    url: "https://karvgroup.biz/",
    category: "WordPress",
    badge: "Corporate Services",
    region: "UAE / Global",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    description: "Business consulting and enterprise investments portal showcasing corporate advisory services, case studies, and lead generation forms.",
    tech: ["WordPress", "PHP", "JavaScript", "SCSS", "Bootstrap"],
    highlights: ["Executive practice area showcases", "Lead capture & consultation forms", "Optimized mobile experience"],
    featured: false
  },

  /* ---------------- LARAVEL PROJECTS ---------------- */
  {
    id: "electrolysis-electropro",
    title: "ElectroPro Software (Electrolysis)",
    url: "https://electrolysis.electroprosoftware.com/",
    category: "Laravel",
    badge: "Laravel SaaS Web App",
    region: "USA",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    description: "Specialized clinical practice management & electrolysis scheduling SaaS solution with client records, booking workflows, and automated billing.",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "REST APIs", "Bootstrap"],
    highlights: ["Electronic client & clinical records", "Automated billing & schedule wizard", "HIPAA compliant architecture"],
    featured: true
  },
  {
    id: "electropro-zaptime",
    title: "ElectroPro ZapTime",
    url: "https://electroprozaptime.com/",
    category: "Laravel",
    badge: "Laravel Web App",
    region: "Global / USA",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    description: "Cloud-based appointment scheduling and time tracking enterprise portal for service practitioners with automated alerts and calendar syncing.",
    tech: ["Laravel", "PHP", "MySQL", "Vue.js", "REST APIs", "Tailwind CSS"],
    highlights: ["Real-time multi-calendar synchronization", "Client self-service booking portal", "Custom automated reminder workflow"],
    featured: true
  },
  {
    id: "watch-web-ch",
    title: "Watch-Web Switzerland",
    url: "https://watch-web.ch/",
    category: "Laravel",
    badge: "Swiss Laravel App",
    region: "Switzerland",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Swiss luxury horology and timepiece catalog platform featuring bespoke search filters, dealer listings, and multi-currency data processing.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"],
    highlights: ["Bespoke luxury timepiece search & filters", "Swiss multi-currency structure", "Dealer inquiry management portal"],
    featured: true
  },

  /* ---------------- REACT PROJECTS ---------------- */
  {
    id: "cybernauticstech-agency",
    title: "CybernauticsTech",
    url: "https://cybernauticstech.com/",
    category: "React",
    badge: "React & Next.js Agency",
    region: "India / Global",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    description: "Modern digital technology solutions and enterprise development agency platform built with high-performance React component architecture, interactive animations, and responsive layouts.",
    tech: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Next.js", "Figma to React"],
    highlights: ["Ultra-fast React frontend architecture", "Interactive service showcase", "Mobile-first responsive optimization"],
    featured: true
  },

  /* ---------------- OTHERS / HYBRID ---------------- */
  {
    id: "bukio-io",
    title: "Bukio.io",
    url: "https://bukio.io/",
    category: "Others",
    badge: "Hybrid / Multi-Stack",
    region: "International",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Modern digital business platform and booking ecosystem integrated with WordPress, Laravel API backend, and Shopify eCommerce workflows.",
    tech: ["WordPress", "Laravel", "Shopify API", "Vue.js / React", "Tailwind CSS"],
    highlights: ["Multi-platform API integration", "High conversion landing flow", "Seamless checkout integration"],
    featured: true
  }
];

export const WORK_EXPERIENCE = [
  {
    id: "cybernauticstech",
    role: "Senior Frontend Developer",
    company: "CybernauticsTech",
    location: "Mohali, Punjab",
    period: "May 2023 – Present",
    current: true,
    description: "Leading frontend development and theme customization for high-traffic Shopify & WordPress eCommerce stores across international markets.",
    points: [
      "Built and maintained 20+ custom Shopify Liquid themes and WordPress/WooCommerce websites for clients in the UK, Germany, Austria, and the US.",
      "Improved site loading speeds (Core Web Vitals) to achieve sub-2 second load times, directly boosting store conversions and SEO rankings.",
      "Converted Figma, XD, and Photoshop designs into 100% pixel-perfect, responsive, and mobile-friendly web pages.",
      "Collaborated closely with project managers, designers, and overseas clients to deliver projects reliably on schedule."
    ],
    technologies: ["Shopify Liquid (OS 2.0)", "WordPress", "WooCommerce", "JavaScript (ES6+)", "SCSS", "Tailwind CSS", "React", "PageSpeed Optimization"]
  },
  {
    id: "jaig-enterprises",
    role: "Senior Web Designer / Team Lead",
    company: "JAIG Enterprises Pvt. Ltd.",
    location: "Mohali, Punjab",
    period: "Jul 2018 – Feb 2023",
    duration: "4 Years 8 Months",
    current: false,
    description: "Led the frontend design and development team, building custom client websites, Shopify stores, and enterprise WordPress solutions.",
    points: [
      "Mentored and guided a team of 6 junior frontend developers, conducting code reviews and maintaining high coding standards.",
      "Successfully delivered 50+ client projects from initial PSD/Figma wireframes to final production launch.",
      "Created a reusable CSS/SCSS component library that cut development turnaround time by 30%.",
      "Worked directly with overseas clients to understand their business requirements and provide practical technical solutions."
    ],
    technologies: ["Shopify", "WordPress", "HTML5 / CSS3", "JavaScript", "Bootstrap", "Team Leadership", "Figma / PSD to HTML"]
  },
  {
    id: "caresoft-solutions",
    role: "Senior Web Designer",
    company: "Caresoft Solutions",
    location: "Mohali, Punjab",
    period: "Feb 2017 – Jul 2018",
    duration: "1 Year 6 Months",
    current: false,
    description: "Focused on responsive web development, custom WordPress themes, and cross-browser testing for various client projects.",
    points: [
      "Developed fully responsive web layouts that work seamlessly across Google Chrome, Safari, Firefox, and mobile viewports.",
      "Customized WooCommerce product pages, filters, and checkout workflows to improve user engagement.",
      "Integrated third-party APIs and contact forms for smooth data handling."
    ],
    technologies: ["WordPress", "WooCommerce", "JavaScript", "jQuery", "PHP", "Cross-Browser Testing"]
  },
  {
    id: "ab-soft-labs",
    role: "Junior Web Designer",
    company: "AB Soft Labs Pvt. Ltd.",
    location: "Mohali, Punjab",
    period: "Sep 2015 – Jul 2017",
    duration: "1 Year 11 Months",
    current: false,
    description: "Started my career converting visual mockups into clean, semantic HTML5/CSS3 web pages and assisting with CMS setups.",
    points: [
      "Converted 40+ PSD and Photoshop design files into clean, responsive HTML5 and CSS3 templates.",
      "Gained hands-on expertise in WordPress theme customizations, animations, and responsive design best practices.",
      "Assisted senior engineers with QA testing, cross-device checks, and pre-launch bug fixes."
    ],
    technologies: ["HTML5", "CSS3", "jQuery", "PSD to HTML", "Bootstrap", "Responsive Layouts"]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "AISECT Education Center, Dr. C.V. Raman University",
    location: "Bhopal, India",
    year: "2012"
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "H.P. Board, Dharamshala",
    location: "Palampur, Himachal Pradesh",
    year: "2009"
  },
  {
    degree: "Secondary (Class X)",
    institution: "H.P. Board, Dharamshala",
    location: "Palampur, Himachal Pradesh",
    year: "2006"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Six Months Industrial Training in PHP & Web Technologies",
    provider: "WEBASTRAL INFOTECH",
    location: "Mohali, Punjab"
  }
];
