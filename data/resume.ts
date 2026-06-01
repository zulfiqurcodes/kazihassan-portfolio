export const profile = {
  name: "Kazi Hassan, Ph.D.",
  title: "Technology Development Manager | Environmental Engineer",
  tagline: "20+ years developing patented water quality solutions",
  email: "kazihassan2001@yahoo.com",
  phone: "256-656-7550",
  location: "Rockaway, NJ 07866",
  linkedin: "https://www.linkedin.com/in/kazihassan",
  summary:
    "Technically skilled, innovative, and organized, with a strong ability to identify client problems. Holds four patents for developing analyzers to detect carcinogenic compounds, ensuring compliance with US EPA regulations for clean drinking water. Eager to advance a career focused on chemical, environmental, and water quality solutions through innovation.",
};

export type Experience = {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Parker Hannifin Corp.",
    location: "Huntsville, AL",
    title: "Technology Development Manager",
    startDate: "Jan 2016",
    endDate: "Dec 2023",
    bullets: [
      "Developed and patented Parker's THM Analyzer, transforming an initial concept into full-scale production, with over 165 units sold globally.",
      "Subject matter expert in water & wastewater treatment and water quality compliance, building relationships with key customers including American Water, East Bay MUD, and Las Vegas Valley Water Authority.",
      "Holds four US and three international patents, all approved and published. Presents research at major conferences including the American Water Works Association.",
    ],
  },
  {
    company: "Parker Hannifin Corp.",
    location: "Huntsville, AL",
    title: "Senior Engineer",
    startDate: "Jun 2013",
    endDate: "Jan 2016",
    bullets: [
      "Extended the modified USEPA method 524.2 to analyze purgeable organic compounds in drinking water using gas chromatography and SAW detectors.",
      "Developed the On-Line THM Analyzer, including product development, field testing, ETL & UL certification, and marketing launch materials.",
      "Managed a $1 million R&D contract between Parker and OI Analytics (Xylem) to develop water quality monitoring equipment.",
    ],
  },
  {
    company: "Parker Hannifin Corp.",
    location: "Huntsville, AL",
    title: "Senior Project Engineer",
    startDate: "Jan 2010",
    endDate: "Jun 2013",
    bullets: [
      "Oversaw alpha and beta phases to produce the preproduction version of the THM analyzer.",
      "Field-tested the preproduction THM analyzer with customers across the USA, gathering feedback for final product adjustments.",
      "Coordinated a $2 million contract between Parker and CMS Field Product (OI Analytical/Xylem).",
    ],
  },
  {
    company: "Parker Hannifin Corp.",
    location: "Huntsville, AL",
    title: "Project Engineer (Design)",
    startDate: "Apr 2007",
    endDate: "Jan 2010",
    bullets: [
      "Developed and field-tested a purge & trap with gas chromatography system using nanoporous carbon-coated SAW.",
      "Established an internal team at Parker, including engineers and chemists, to develop a breadboard proving the capability of nanoporous carbon-coated SAWs for THM detection in water.",
      "Launched the multistage Winovation process to develop a bench-top THM analyzer.",
    ],
  },
  {
    company: "Parker Hannifin Corp.",
    location: "Huntsville, AL",
    title: "Application Engineer",
    startDate: "Oct 2005",
    endDate: "Apr 2007",
    bullets: [
      "Coordinated a $2 million contract between SNL and Parker under the 'Work for Others' program to assess the feasibility of SAW technology for THM detection.",
      "Collaborated with the University of Akron to refine methods for measuring disinfection byproducts.",
      "Organized a technical conference for Parker, inviting innovative companies to assess products for future growth.",
    ],
  },
  {
    company: "Envital Co, Ltd",
    location: "Wadsworth, OH",
    title: "Project Manager",
    startDate: "Nov 2004",
    endDate: "Sept 2005",
    bullets: [
      "Led project 'Barberton Coagulation and Disinfection Byproduct Reduction Assessment', determining coagulant type, dose, and sludge reduction.",
      "Worked on the 'Initial Distribution System Evaluation' for the City of Barberton, OH.",
    ],
  },
];

export type Patent = {
  title: string;
  number: string;
  type: "US" | "International";
  issued: string;
  description: string;
};

export const patents: Patent[] = [
  {
    title: "Analytical System and Method for Detecting Volatile Organic Compounds in Liquid",
    number: "US 10,895,565 B2",
    type: "US",
    issued: "Jan 19, 2021",
    description:
      "System and method for detecting volatile organic compounds in liquid samples using advanced analytical instrumentation.",
  },
  {
    title: "Analytical System and Method for Detecting Volatile Organic Compounds in Water",
    number: "US 10,161,920 B2",
    type: "US",
    issued: "Dec 25, 2018",
    description:
      "Analytical system and methodology for accurate detection of volatile organic compounds in drinking water supplies.",
  },
  {
    title: "Analytical System and Method for Detecting Volatile Organic Compounds in Water",
    number: "US 9,766,215 B2",
    type: "US",
    issued: "Sep 19, 2017",
    description:
      "Core system and method patent for volatile organic compound detection in water, forming the foundation of the THM analyzer product line.",
  },
  {
    title: "Portable Analytical System for Detecting Organic Chemicals in Water",
    number: "US 8,302,458 B2",
    type: "US",
    issued: "Nov 6, 2012",
    description:
      "Portable field-deployable system for on-site detection of organic chemicals in water, enabling real-time water quality monitoring.",
  },
  {
    title: "Analytical System and Method for Detecting Volatile Organic Compounds in Liquid",
    number: "GB 2556476 B",
    type: "International",
    issued: "Aug 4, 2021",
    description:
      "UK patent for the analytical system and method for detecting volatile organic compounds in liquid samples.",
  },
  {
    title: "Analytical System for Detecting Volatile Organic Compounds in Water",
    number: "GB 2,553,250 B",
    type: "International",
    issued: "Apr 25, 2018",
    description:
      "UK patent for the analytical system targeting volatile organic compound detection in water treatment applications.",
  },
  {
    title: "Analytical System and Method for Detecting Volatile Organic Compounds in Water",
    number: "GB 2,509,022 B",
    type: "International",
    issued: "Jan 31, 2018",
    description:
      "UK patent covering the system and method for volatile organic compound detection in water, ensuring compliance with international water quality standards.",
  },
];

export type Skill = {
  category: string;
  items: { name: string; level: number }[];
};

export const skills: Skill[] = [
  {
    category: "Instrumentation",
    items: [
      { name: "THM Analyzers (Lab & On-Line)", level: 98 },
      { name: "Gas Chromatography", level: 95 },
      { name: "Mass Spectroscopy", level: 90 },
      { name: "HPLC", level: 88 },
      { name: "TOC Analyzer", level: 92 },
      { name: "SAW (Surface Acoustic Wave)", level: 95 },
    ],
  },
  {
    category: "Water Quality & Compliance",
    items: [
      { name: "US EPA Method Compliance", level: 98 },
      { name: "Drinking Water Treatment", level: 95 },
      { name: "Disinfection Byproduct Analysis", level: 98 },
      { name: "Wastewater Treatment", level: 88 },
    ],
  },
  {
    category: "Professional",
    items: [
      { name: "R&D Management", level: 95 },
      { name: "Product Development (Winovation)", level: 92 },
      { name: "Contract Management ($1M–$2M)", level: 90 },
      { name: "Team Leadership", level: 92 },
      { name: "Conference Presentations (AWWA)", level: 88 },
    ],
  },
];

export type Education = {
  degree: string;
  field: string;
  school: string;
  location: string;
};

export const education: Education[] = [
  {
    degree: "Ph.D.",
    field: "Environmental Engineering",
    school: "The University of Akron",
    location: "Akron, OH",
  },
  {
    degree: "M.S.",
    field: "Environmental Engineering",
    school: "Asian Institute of Technology",
    location: "Bangkok, Thailand",
  },
  {
    degree: "B.Sc.",
    field: "Chemical Engineering",
    school: "Bangladesh University of Engineering & Technology",
    location: "Dhaka, Bangladesh",
  },
];
