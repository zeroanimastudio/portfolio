// Content lives here so the sections shown in js/app.js stay plain markup.

const HOME_LIST = [
  "Millenial born in 1985",
  "Illustrator",
  "Home bartender",
  "Content creator",
  "PC Gamer",
  "Amateur guitar player",
  "Karaoke enjoyer",
  "Tabletop RPG fan",
  "Fermentation enthusiast",
  "Home cook",
  "World traveller",
  "Yoga practitioner",
];

const CASE_STUDIES = [
  {
    slug: "cisco-common-object-library",
    year: "2025-2026",
    title: "Cisco — Common Object Library",
    blurb: "Unifying how every product on Cisco's security platform creates, manages, and shares a common set of objects.",
    challenge: `Cisco has an enormous portfolio of network hardware and software products, each managing its own objects independently. The goal: consolidate these into a single source of truth that any product could pull from and share. Within the security platform, this project became the Common Object Library.`,
    product: `The security platform team's broader mission is unifying every product in the portfolio into one reliable source of truth. The Common Object Library extends that: a feature already live on some platforms, now built to be consumed across all of them under a single operational model. Creating, maintaining, and controlling access to these objects directly affects the value every customer gets from the platform.`,
    role: `I joined after the library was already engineered — the hard problem left was adoption. Every product had its own categorization, attributes, naming conventions, and rules for these objects. Migrating them into the library meant reconciling all of that against the target schema without breaking what already worked.`,
    responsibilities: [
      "AI Integration",
      "Agentic AI Orchestration",
      "Information Architecture",
      "UI Design",
      "End-to-End UX Flows",
      "Collaboration with Cross-Functional Teams",
      "Testing & Refinement",
      "Stakeholder Product Presentations",
    ],
    gallery: [
      { heading: "Common Object Library Overview", images: ["Object Library.png"] },
      { heading: "Bulk Conflict Resolution Flow", images: ["Conflict resolution.png"] },
      { heading: "Object & Group Detail Drawers", images: ["Drawers.png"] },
      { heading: "Auto-Resolve Progress States", images: ["In progress banners.png"] },
      { heading: "A Look at the Figma File's Scale", images: ["Library.png"] },
    ],
    takeaways: `This project's biggest challenge was scale: hundreds of screens, dozens of flows, and reconciling naming conventions. Mapping edge cases stopped being a phase and became a daily ritual, every decision would affect every product and its own requirements.

The agentic AI workflow became core to how we moved fast. New flows were prototyped using a combination of Claude Code, Cursor, and Figma Make depending on the case, then presented to stakeholders in rapid iteration sprints. Once approved, screens were finalized in Figma for handoff. This let us test ideas at a pace that would've been impossible working screen-by-screen from the start.

Engineering pushback was constant due to technical and time constraints that meant trading ambitious features for simpler ones. Learning where those tradeoffs were worth making, and where they weren't, was as much a part of the role as the design work itself.`,
    disclaimer: `DISCLAIMER — To respect the client's NDA, this case study has been edited to remove confidential information, proprietary details, and any unreleased features. The client approved sharing the design and strategic work with that data removed.`,
    rights: `© 2026. Project designs and assets are proprietary to Cisco. Permission was granted to showcase work. All confidential information has been removed.`,
    imageDir: "cisco-common-object-library",
  },
  {
    slug: "real-estate-management",
    year: "2024",
    title: "Real Estate Management Software",
    blurb: "A dashboard for a commercial real estate firm, unifying documents, leases, mapping and AI insights.",
    challenge: `This project aimed to create a robust, user-friendly dashboard for a commercial real estate management company. The dashboard needed to centralize extensive information, including document management, property and lease tracking, mapping capabilities, AI-driven data insights, reporting and much more. The main challenge was to design an intuitive interface capable of displaying large volumes of complex data without overwhelming users, while also ensuring secure access to sensitive information since this tool is only going to be used by internal employees, this required efforts from various teams since most of the information already used where localized in different platforms (SharePoint, Yardi, for example).`,
    product: `A comprehensive real estate management platform, providing access to property data, document storage, interactive maps, different accesses for different types of users (hotel operation, senior living, commercial real estate). The tool also included an AI-powered tool to enhance document appraisal, property lookup processes and more. This tool also streamlines property management tasks, enabling teams to access and manage assets, leases, and relevant documents efficiently from a single dashboard.`,
    role: `I led the design process almost from the very start of the project, being the only designer for most of its early stages. Starting with user research and wireframing and progressing through interface design. I collaborated with business analysts, developers, and stakeholders to align the design with both user needs and business objectives. My responsibilities included designing the interface to prioritize intuitive navigation and data visualization, ensuring a cohesive design, and refining prototypes based on user feedback.`,
    responsibilities: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Information Architecture",
      "UI Design & Visual Consistency across the platform",
      "Collaboration with Cross-Functional Teams",
      "AI Integration",
      "Iterative Testing & Refinement",
      "Stakeholder Product Presentations",
    ],
    gallery: [
      { heading: "Welcome Screen and AI Integration", images: ["1_Welcome Screen.png"] },
      { heading: "Property Page, Mapping Capabilities and Document Management", images: ["2_Property Page.png"] },
      { heading: "Data Visualization", images: ["4_Data Visualization.png"] },
      { heading: "Document Manipulation", images: ["3 Document Actions.png"] },
      { heading: "AI Integration, AI Prompt Library & Feedback Flow", images: ["5_AI.png"] },
    ],
    takeaways: `This project underscored the importance of balancing data density with usability, especially for applications with high information complexity. Key learnings included the value of iterative testing for feature-heavy dashboards and the effectiveness of contemplating a design language to maintain visual and functional consistency across different applications of the same product. The project also highlighted the transformative role of AI in enhancing user experience by making complex data accessible and actionable while still being a new technology across the tech industry.`,
    disclaimer: `DISCLAIMER — To respect client confidentiality and adhere to NDA agreements, all project images have been edited to remove private information, proprietary details, and client logos. Permission has been granted from the client to use these designs to ensure privacy while allowing the core design and strategic work to be showcased.`,
    rights: `© 2024, all rights reserved. Project designs and assets are proprietary to a confidential real estate management client.`,
  },
  {
    slug: "oima-iica",
    year: "2019",
    title: "OIMA / IICA",
    blurb: "A text-heavy cooperation network site unifying agricultural market information across the Americas.",
    challenge: `The challenge was how to facilitate in an accurate and timely manner the exchange of agricultural market information to be accessible between all the nations of America. A repository for all of this information was needed to contain and provide the user every bit of information available. Plus the amount of information made it a very heavy text-wise site.`,
    product: `A cooperation network comprised of government institutions or those institutions delegated by the government, whose principal functions and aims are the collection, processing, analysis and dissemination of information relative to markets and agricultural commodities.`,
    role: `I was in charge of bringing the wireframes to life for both mobile and desktop, making sure the brand guidelines were being followed and being as meticulous as possible in the small details, since it was a tool that was going to be used by many different people from different regions and different niches.`,
    responsibilities: [
      "Mockups",
      "Style guide application",
      "Asset Creation",
      "UI Design",
      "Ideation",
    ],
    gallery: [
      { heading: "Homepage & Countries", images: ["IICA_Desktop_1.png"] },
      { heading: "Achievements, Event Description and Catalog", images: ["IICA_Desktop_2.png"] },
      { heading: "Data Visualization", images: ["IICA_Desktop_3.png"] },
      { heading: "Mobile Version", images: ["IICA_Mobile_1.png"] },
      { heading: "Data Visualization on Mobile", images: ["IICA_Mobile_2.png"] },
    ],
    takeaways: `Translating wireframes handed off by the UX designer into a UI spanning many different design aspects and components helped me see UI/UX as a whole. The project launched and is still up today, serving as a foundation for later work in the product design area. It was also an introduction to atomic design, which is now something I strive toward in my projects.`,
    disclaimer: null,
    rights: `© OIMA, 2019.`,
    imageDir: "OIMA/IICA",
  },
  {
    slug: "home-advisor",
    year: "2021",
    title: "Home Advisor",
    blurb: "Rebuilding a content-dense production page component-by-component for a CMS migration.",
    challenge: `Home Advisor was migrating its CMS to a more versatile one, but that meant every component had to be re-created for the new platform, taking the opportunity to fix and tweak small details of the previous version.`,
    product: `The page that was asked to be recreated was one of the most text-heavy pages with many different sections and components, which made it the perfect example to have as the MVP for the migration project.`,
    role: `My role was to recreate the production site divided into components and, if needed, tweak or fix inconsistencies aligned with the brand design system, while maintaining the look and feel of the original production site.`,
    responsibilities: [
      "Style guide application",
      "Mockups",
      "Asset Creation",
    ],
    gallery: [
      { heading: "Hero Image and Table Template", images: ["HA_Desktop_1.png"] },
      { heading: "Cost Calculator Design", images: ["HA_Desktop_2.png"] },
      { heading: "CTA & Footer", images: ["HA_Desktop_3.png"] },
      { heading: "Mobile Version", images: ["HA_mobile_1.png"] },
      { heading: "Cost Calculator on Mobile", images: ["HA_Mobile_2.png"] },
    ],
    takeaways: `The project was an exercise in paying attention to small details, observation and resolving discrepancies between an already existing production site and the design system in place. Recreating the site as it is live requires a lot of inspection and detail observation — being pixel-perfect and exact in measurements, lines, and curves was a good challenge that makes you more aware of those small details. This was also a collaborative project, working alongside developers and another product designer, which was a welcomed new dynamic to the project.`,
    disclaimer: null,
    rights: `© Home Advisor, 2021.`,
    imageDir: "HA",
  },
];

const CONTACT = {
  email: "zeroanima.studio@gmail.com",
  linkedin: "https://www.linkedin.com/in/jesus-monge-abab66a/",
};

const RESUME = {
  fileReady: true,
  fileHref: "assets/resume/Resume_2026.pdf",
  header: {
    name: "Jesús Monge",
    title: "Senior Product Designer",
    location: "San José, Costa Rica",
    phone: "(+506) 8348-8652",
    email: "zeroanima.studio@gmail.com",
  },
  skills: [
    "User Research", "Interface Design", "Design Systems", "Wireframing & Prototyping",
    "Rapid Iteration", "Collaboration & Communication", "Soft Skills", "Usability Testing",
    "AI Augmentation", "Branding", "Graphic Design",
  ],
  experience: [
    {
      company: "3Pillar Global, Remote",
      role: "Senior Product Designer",
      dates: "January 2025 - PRESENT",
      bullets: [
        "Led wireframing, user interface (UI) design, and rapid prototyping, including the use of AI-powered design tools, for an infrastructure and networks client ranked in the Fortune 100.",
        "Established and managed a hyperlocal design system tailored for a specific team, ensuring adherence to the overarching company Design System constraints.",
        "Contributed to the collaborative design and prototyping of a major initiative to consolidate disparate systems and projects into a unified dashboard.",
      ],
    },
    {
      company: "Gorilla Logic, Remote",
      role: "Senior UI/UX Consultant",
      dates: "January 2021 - December 2024",
      bullets: [
        "Led user research, usability testing, wireframing, and UI/UX design and prototyping for an award-winning commercial real estate management software.",
        "The software included document management, mapping capabilities, AI integration, property management, and comprehensive reporting.",
        "Managed stakeholder presentations and facilitated project meetings and agile rituals.",
      ],
    },
    {
      company: "Sweetrush, Remote",
      role: "Senior UI Designer",
      dates: "January 2019 - December 2020",
      bullets: [
        "Designed user interfaces for multiple client projects, including Colgate and Deloitte.",
        "Developed responsive eLearning materials for internal training, optimized for mobile, tablet, and desktop viewing.",
      ],
    },
    {
      company: "Creative Drive, San José, Costa Rica",
      role: "Art Director",
      dates: "September 2017 - October 2018",
      bullets: [
        "Managed art direction and administration for a team of designers, including planning, status reporting, and task distribution.",
        "Led client meetings and conducted benchmark presentations.",
        "Developed design, content, and sales pitch presentations for major brands such as Taco Bell, Pepsi and Gatorade.",
      ],
    },
    {
      company: "Lionbridge, San José, Costa Rica",
      role: "Senior Visual Designer",
      dates: "May 2015 - August 2017",
      bullets: [
        "UI/UX, Landing page creation",
        "Social media and presentation design",
        "Branding",
        "Animation",
      ],
    },
    {
      company: "Ogilvy & Mather, San José, Costa Rica",
      role: "Graphic Designer",
      dates: "January 2014 - May 2015",
      bullets: [
        "Supported the Coca-Cola company by creating print and digital media, illustrations, storyboards, and pitch presentations.",
      ],
    },
    {
      company: "Area 203, San José, Costa Rica",
      role: "Junior Digital Designer",
      dates: "May 2012 - August 2013",
      bullets: [
        "Ad Creation and Banner designs for lending companies based in the US.",
      ],
    },
  ],
  education: [
    {
      school: "Universidad de las Ciencias y el Arte, San José, Costa Rica",
      degree: "Bachelor's (incomplete)",
      dates: "2006 - 2010",
      detail: "Graphic design and advertising.",
    },
  ],
  certifications: [
    { name: "UX Concepts Validation", issuer: "Into UX Design", date: "May 2025" },
    { name: "UX Research and Strategy", issuer: "Into UX Design", date: "December 2023" },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jesus-monge-abab66a/" },
  ],
};
